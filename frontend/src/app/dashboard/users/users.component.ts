import { AuthService } from "../../Service/auth.service";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { UsersService } from "src/app/Service/users.service";
import { StripeComponent, userdata } from "../stripe/stripe.component";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { DriverService } from "src/app/Service/driver.service";
import { CityService } from "src/app/Service/city.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent {
  userupdateForm!: FormGroup;
  AddForm!: FormGroup;
  AddbuttonForm: boolean = false;
  updateForm: boolean = false;
  countrycode: any[] = [];
  file: any;
  selectedCC: any;
  id: any;
  count: any;
  search: string = '';
  usersArray: any[] = [];
  paginatedUsers: any[] = [];
  currentPage = 1
  limit = 5; 
  totalPages = 0; 
  selectedSortBy: string = 'name';
  selectedSortOrder: string = 'desc';
  email: string | null = '';
  username: string | null = '';
  cityArray: any[] = [];


  constructor(
    private _users: UsersService,
    private _driver: DriverService,
    private _city: CityService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private dialog: MatDialog,
    private _router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    // this.getUserData();
    // this.fetchCountryDataAPI();
    // this.getcountryCode();

    this.route.queryParams.subscribe(params => {
      this.email = params['email'] || ''; 
    });

    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || ''; 
    });

    this.AddForm = this.formBuilder.group({
      profile: [""],
      username: ["", [Validators.required]],
      useremail: ["", [Validators.required, Validators.email]],
      countrycode: [""],
      userphone: ["", [Validators.required, Validators.minLength(10)]],
      userType: ['', Validators.required],
      city: ['', Validators.required]
    }, {
      validators: [this.emailMatchValidator.bind(this), this.usernameMatchValidator.bind(this)]
    });    

    this.userupdateForm = this.formBuilder.group({
      updateusername: ["", [Validators.required]],
      updateuseremail: ["", [Validators.required, Validators.email]],
      updatecountrycode: [""],
      updateuserphone: ["", [Validators.required, Validators.minLength(10)]],
    });
}

// Custom validator to check if the email in the form matches the email from query params
emailMatchValidator(formGroup: FormGroup) {
  const emailControl = formGroup.get('useremail');

  if (emailControl?.value !== this.email) {
    emailControl?.setErrors({ emailMismatch: true });
  } else {
    emailControl?.setErrors(null);
  }
}

  usernameMatchValidator(formGroup: FormGroup) {
    const usernameControl = formGroup.get('username');

    if (usernameControl?.value !== this.username) {
      usernameControl?.setErrors({ usernameMismatch: true });
    } else {
      usernameControl?.setErrors(null);
    }
  }

  onUserTypeChange(event: any): void {
    const selectedUserType = event.target.value;
    if (selectedUserType === 'driver') {
      this.getCityData(); 
    }
  }

  onSelected(value: any) {
    this.selectedCC = value;
    console.log(value)
  }

  // --------------------IMAGE SELECTED---------------------
  onFileSelected(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  // --------------------------------------------ADD USER DATA---------------------------------------------
  AddUser() {
    var userFormData = new FormData();
    userFormData.append("profile", this.file);
    userFormData.append("username", this.AddForm.value.username);
    userFormData.append("useremail", this.AddForm.value.useremail);
    userFormData.append("countrycode", "+91");
    userFormData.append("userphone", this.AddForm.value.userphone);
    userFormData.append("userType", this.AddForm.value.userType);
    console.log(userFormData);

    
    if (this.AddForm.valid) {
      if(this.AddForm.value.userType==='driver'){
        var driverFormData = new FormData();
        const selectedCityName = this.AddForm.value.city; 
        const selectedCity = this.cityArray.find(city => city.city === selectedCityName)
        if (selectedCity && selectedCity._id) {
          driverFormData.append("drivername", this.AddForm.value.username);
          driverFormData.append("driveremail", this.AddForm.value.useremail);
          driverFormData.append("countrycode", "+91");
          driverFormData.append("driverphone", this.AddForm.value.userphone);
          driverFormData.append("city", selectedCity._id);
        
          this._driver.addDriver(driverFormData).subscribe({
            next: (response: any) => {
              console.log(response);
            },
            error: (error: any) => {
              console.log(error.error.message);
              this.toastr.error(error.error.message);
            },
          });
        } }
      

      this._users.addUser(userFormData).subscribe({
        next: (resp: any) => {
          this.usersArray.push(resp.newUser);
          this.AddForm.reset();
          this.AddbuttonForm = false;
          this.file = null
          this.toastr.success(resp.message);
          this._router.navigate(['/login'])
          localStorage.setItem('userDetails', JSON.stringify(resp.newUser));
        },
        error: (error: any) => {
          console.log(error);
          this.toastr.warning(error.error.message);
        },
      });
    } else {
      this.toastr.info("All Fields are Required");
    }
  }

  // ------------------------------------------------GET ALL CITIES ---------------------------------------------
  getCityData(): void {
    this._city.getallcities().subscribe({
      next: (response) => {
        console.log(response.citydata);
        this.cityArray = response.citydata;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

    // --------------------------------------------GET USER DATA FXN---------------------------------------------
    getUserData() {
      this._users.getUsers(this.search, this.currentPage, this.limit, this.selectedSortBy, this.selectedSortOrder).subscribe({
        next: (response: any) => {
          this.usersArray = response.userdata;
          this.totalPages = response.totalPage;
          this.count = response.count;
  
          this.updatePaginatedUsers();
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
    onPageSizeChange(event: any): void {
      this.limit = parseInt(event.target.value);
      this.currentPage = 1;
      this.updatePaginatedUsers();
      this.getUserData();
    }
    onPageChange(pageNumber: number) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
        this.updatePaginatedUsers();
        this.getUserData();
      }
    }
    getPagesArray(): number[] {
      return Array(this.totalPages).fill(0).map((_, index) => index + 1);
    }
    updatePaginatedUsers() {
      const startIndex = (this.currentPage - 1) * this.limit;
      const endIndex = startIndex + this.limit;
      this.paginatedUsers = this.usersArray.slice(startIndex, endIndex);
    }
  

  // --------------------------------------------DELETE USER DATA---------------------------------------------
  deleteUser(userId: string): void {
    const confirmation = confirm("Are you sure you want to delete this user?");

    if (confirmation) {
      this._users.deleteUser(userId).subscribe({
        next: (response: any) => {
          this.usersArray.push(response.newUser);
          this.getUserData();
          this.toastr.success(response.message);
        },
        error: (error: any) => {
          console.log(error.error.message);
          this.toastr.error(error.error.message);
        },
      });
    }
  }

  // --------------------------------------------UPDATE USER DATA---------------------------------------------
  updateBtnClick(user: any): void {
    this.id = user._id;
    this.updateForm = true;
    this.AddbuttonForm = false
    this.userupdateForm.patchValue({
      updateusername: user.username,
      updateuseremail: user.useremail,
      updatecountrycode: "+91",
      updateuserphone: user.userphone,
    });
    // console.log(user.countrycode)
  }
  updateUSER(): void {
    const updatedData = this.userupdateForm.value;
    var formdata = new FormData();
    formdata.append("profile", this.file);
    formdata.append("updateusername", updatedData.updateusername);
    formdata.append("updateuseremail", updatedData.updateuseremail);
    formdata.append("updatecountrycode", "+91");
    formdata.append("updateuserphone", updatedData.updateuserphone);
    console.log(formdata);
    this._users.updateUser(this.id, formdata).subscribe({
      next: (response: any) => {
        console.log(response);
        this.usersArray.push(response.updatedUser);
        this.getUserData();
        this.userupdateForm.reset();
        this.file = null
        this.updateForm = !this.updateForm;
        this.toastr.success(response.message);
      },
      error: (error: any) => {
        console.log(error);
        this.toastr.error(error.error.message);
      },
    });
  }


  //-------------------------------------STRIPE--------------------------------------//
  openDialog(val: any) {
    const dialogData: userdata = {
      userdata: val,
    };

    const dialogRef: MatDialogRef<StripeComponent> = this.dialog.open(
      StripeComponent,
      {
        width: '650px',
        data: dialogData,
      }
    );

    dialogRef.afterClosed().subscribe((data: string) => {
      console.log(data);
    });
  }





  // --------------------------------------------CUSTOM CODE---------------------------------------------//
  updateCancel() {
    this.updateForm = !this.updateForm;
  }
  
  // toggleFormVisibility() {
  //   this.AddbuttonForm = !this.AddbuttonForm;
  //   this.updateForm = false
  //   this.AddForm.reset()
  //   this.AddForm.patchValue({
  //     countrycode:''
  //   });
  // }

  resetTimer() {
    this.authService.resetInactivityTimer();
  }
}
