import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmrideService } from './../../Service/confirmride.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';
import { InfoDialogComponent } from 'src/app/shared/info-dialog/info-dialog.component';
import { AssignDriverComponent } from 'src/app/shared/assign-driver/assign-driver.component';
import { SocketService } from 'src/app/Service/socket.service';
import { VehicleService } from 'src/app/Service/vehicle.service';
import { FeedbackComponent } from 'src/app/shared/feedback/feedback.component';

@Component({
  selector: 'app-confirmride',
  templateUrl: './confirmride.component.html',
  styleUrls: ['./confirmride.component.css']
})
export class ConfirmrideComponent {
  ridesArray: any[] =[]
  limit: number = 20;
  currentPage: number = 1;
  totalPages: number = 0;
  count: any
  search: String = '';
  paginatedRideData: any[] = [];
  driverArray: any = [];
  rideStatus!: string; 
  assignedDriverName!: string;
  driverdataArray: any;
  driverId: any;
  rideId: any;
  statusfilter: Number = -1;
  vehiclefilter: String = '';
  filteredVehicles: string[] = [];
  searchText: any;
  searchDate: any;
  sortOrder: any = 'desc';
  cityId: any;
  serviceId: any;
  userid = JSON.parse(localStorage.getItem('userDetails')||'')._id
  

  constructor(
    private authService: AuthService,
    private _confirmride: ConfirmrideService,
    private dialog: MatDialog,
    private _socket: SocketService,
    private _vehicleservice: VehicleService
  ){}

  ngOnInit(): void{
    this.getrideData()
    this.getVehicle()
    this.gettingstatusafterassigninCFR()
    this.gettingstatusafterrejectinCFR()
    this.listeningtimeoutstatusinCFR()
    this.listeningwhendriverisnearest()
    this.listenassignrejected()
    this.listennearestassignbuttonclick()
    this.ridestatusupates()
    
  }
  
  //-------------------------------------------- GET RIDE DATA with SEARCH, PAGINATION, FILTER   ---------------------------------------------
  getrideData() {
    this.search = this.searchText || this.searchDate;
    console.log(this.userid)
    this._confirmride.getride(this.currentPage, this.limit, this.search, this.vehiclefilter, this.sortOrder, this.userid).subscribe({
      next: (response: any) => {
        this.ridesArray = response.rides;
        console.log(this.ridesArray)
        this.totalPages = response.totalPages;
        this.count = response.totalCount;

      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  onPageSizeChange(event: any): void {
    this.limit = parseInt(event.target.value);
    console.log(this.limit);
    
    this.currentPage = 1;
    this.updatePaginatedDrivers();
    this.getrideData();
  }
  onPageChange(pageNumber: number) {
    console.log(pageNumber);
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.updatePaginatedDrivers();
      this.getrideData();
      
    }
  }
  updatePaginatedDrivers() {
    const startIndex = (this.currentPage - 1) * this.limit;
    const endIndex = startIndex + this.limit;
    this.paginatedRideData = this.ridesArray.slice(startIndex, endIndex);
  }


  //-----------------------------------GET VEHICLE ARRAY IN FILTER------------------------------//
  getVehicle(){
    this._vehicleservice.getvehicleData().subscribe(response => {
      // console.log(response);
      
      this.filteredVehicles = response.data.map((vehicle: any) => vehicle.vehicleName);
      // console.log(this.filteredVehicles);
      
    });
  }


  clearFilter() {
    this.statusfilter = -1;
    this.vehiclefilter = '';
    this.sortOrder = 'asc'

    this.getrideData()
  }


  //--------------------------------------INFO DIALOG REF CODE---------------------------------------------//
  openInfoDialog(ride: any): void {
    // console.log(ride)
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = '650px'; 
    dialogConfig.data = ride; 
    
    const dialogRef = this.dialog.open(InfoDialogComponent, dialogConfig);
    
  }
  
  //--------------------------------------ASSIGN DIALOG REF CODE---------------------------------------------//
  openAssignDriverDialog(ride: any): void {
    // console.log(ride);
    
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true; 
    dialogConfig.width = '1000px'; 
    dialogConfig.data = ride; 
    
    const dialogRef = this.dialog.open(AssignDriverComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data: any) => {
      console.log(data);
      this.driverdataArray = data
      
      // console.log("Assigned Driver Id:  ",this.driverdataArray.driverdata._id);  
      this.driverId = this.driverdataArray.driverdata._id
      this.rideId = this.driverdataArray.ridedata._id
      this.cityId = this.driverdataArray.ridedata.cityId
      this.serviceId = this.driverdataArray.ridedata.serviceId
      // console.log("Driver ID:",this.driverId,"RIDE ID:",this.rideId);

      //==========emit data into socket.js when dialog box close=============
      // console.log(this.driverdataArray.ridedata.nearest);
      
      if(this.driverdataArray.ridedata.nearest == false){
        // console.log("if");
        this._socket.emitassignedDriver(this.driverId  , this.rideId)
      }else{
        // console.log("else");
        this._socket.emitnearestdriver(this.rideId, this.cityId, this.serviceId)

        //--------------SENDING PUSH NOTIFICATION DRIVER NOT FOUND-----------------//
        this._socket.listeningmytaskfunc().subscribe((response: any)=> {
          this.getrideData();
        })
      }
    });
  }

  //-----------------SHOW UPDATED STATUS IN CFR AFTER ASSIGN BUTTON CLICK-------------------------//
  gettingstatusafterassigninCFR(){
    this._socket.onFinalassignedDriverData('data').subscribe((response: any)=> {

      this.getrideData();
    })
  }

  //-----------------SHOW UPDATED STATUS IN CFR AFTER REJECT BUTTON CLICK (BOTH Single and Nearest)-------------------------//
  listenassignrejected(){
    this._socket.listenassignrejected().subscribe((response: any)=> {
      
      this.getrideData();
    })
  }
  gettingstatusafterrejectinCFR(){
    this._socket.listenrejectRunningRequest().subscribe((response: any)=> {

      this.getrideData();
    })
  }

  //-----------------SHOW UPDATED STATUS IN CFR AFTER TIME-OUT-------------------------//
  listeningtimeoutstatusinCFR(){
    this._socket.listeningtimeoutstatusinCFR().subscribe((response: any)=> {

      this.getrideData();
    })
  }
      
  //-----------------SHOW UPDATED STATUS IN CFR AFTER TIME-OUT-------------------------//
  listeningwhendriverisnearest(){
    this._socket.listeningwhendriverisnearest().subscribe((response: any)=> {

      this.getrideData();
    })
  }

  //---------------------WHEN NEAREST ASSIGN CLICKED--------------------//
  listennearestassignbuttonclick() {
    this._socket.listeningnearestdriver().subscribe((res: any) => {
      this.getrideData()
    })
  }

  //----------------AFTER ACCEPT RIDE IN REAL-TIME STATUS UPDATES----------------//
  ridestatusupates() {
    this._socket.listeningrideupdates().subscribe((ridedata: any) => {
      this.getrideData();
      const hasCompletedRide = ridedata.ridestatus === 7;
  
      if (hasCompletedRide) {
        this.openFeedbackDialog(ridedata._id);
      }
    });
  }
  
  openFeedbackDialog(rideId: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '650px';
    dialogConfig.data = {rideId}; 
    console.log(dialogConfig.data)
  
    const dialogRef = this.dialog.open(FeedbackComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
    });
  }
  
  
     
  //--------------------------------CANCEL RIDE------------------------------------------//
  cancelride(rideId: any){
    this._socket.emitcancelride(rideId)
    this.ridesArray = this.ridesArray.filter((ride: any) => ride._id !== rideId);
    this._socket.listencancelride().subscribe((ridedata: any) => {
      this.getrideData()
    })

  }

  // ---------------------------------------EXTRA COMMON CODE--------------------------------------------//
  resetTimer() {
    this.authService.resetInactivityTimer();
  }
  
}

