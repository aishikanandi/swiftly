"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[874],{6874:(U,u,l)=>{l.r(u),l.d(u,{DriverModule:()=>z});var p=l(177),c=l(9417),e=l(7705),C=l(1155),F=l(6731),b=l(5794),h=l(2758),M=l(7842),v=l(415),_=l(9213),g=l(9115),f=l(8834);function x(i,a){1&i&&(e.j41(0,"div"),e.EFF(1,"Name is required."),e.k0s())}function P(i,a){if(1&i&&(e.j41(0,"div",50),e.DNE(1,x,2,0,"div",51),e.k0s()),2&i){const t=e.XpG(2);let r;e.R7$(1),e.Y8G("ngIf",null==(r=t.driverForm.get("drivername"))||null==r.errors?null:r.errors.required)}}function y(i,a){1&i&&(e.j41(0,"div"),e.EFF(1,"Email is required."),e.k0s())}function k(i,a){1&i&&(e.j41(0,"div"),e.EFF(1,"Please enter a valid email."),e.k0s())}function D(i,a){if(1&i&&(e.j41(0,"div",50),e.DNE(1,y,2,0,"div",51),e.DNE(2,k,2,0,"div",51),e.k0s()),2&i){const t=e.XpG(2);let r,n;e.R7$(1),e.Y8G("ngIf",null==(r=t.driverForm.get("driveremail"))||null==r.errors?null:r.errors.required),e.R7$(1),e.Y8G("ngIf",null==(n=t.driverForm.get("driveremail"))||null==n.errors?null:n.errors.email)}}function O(i,a){if(1&i&&(e.j41(0,"option",52),e.EFF(1),e.k0s()),2&i){const t=a.$implicit;e.Y8G("value",t),e.R7$(1),e.JRh(t)}}function j(i,a){1&i&&(e.j41(0,"div"),e.EFF(1,"Phone is required."),e.k0s())}function E(i,a){1&i&&(e.j41(0,"div"),e.EFF(1,"Phone number must be 10 digits."),e.k0s())}function S(i,a){if(1&i&&(e.j41(0,"div",53),e.DNE(1,j,2,0,"div",51),e.DNE(2,E,2,0,"div",51),e.k0s()),2&i){const t=e.XpG(2);let r,n;e.R7$(1),e.Y8G("ngIf",null==(r=t.driverForm.get("driverphone"))||null==r.errors?null:r.errors.required),e.R7$(1),e.Y8G("ngIf",null==(n=t.driverForm.get("driverphone"))||null==n.errors?null:n.errors.minlength)}}function G(i,a){if(1&i&&(e.j41(0,"option",52),e.EFF(1),e.k0s()),2&i){const t=a.$implicit;e.Y8G("value",t._id),e.R7$(1),e.JRh(t.city)}}function R(i,a){if(1&i){const t=e.RV6();e.j41(0,"div",28)(1,"h2",29),e.EFF(2,"Driver Registration"),e.k0s(),e.j41(3,"form",30),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.onSubmit())}),e.j41(4,"div",29)(5,"label",31),e.EFF(6,"Driver Name"),e.k0s(),e.nrm(7,"input",32),e.DNE(8,P,2,1,"div",33),e.k0s(),e.j41(9,"div",29)(10,"label",31),e.EFF(11,"Driver Email"),e.k0s(),e.nrm(12,"input",34),e.DNE(13,D,3,2,"div",33),e.k0s(),e.j41(14,"div",35)(15,"label",31),e.EFF(16,"Phone Number"),e.k0s(),e.j41(17,"div",36)(18,"select",37,38),e.bIt("change",function(){e.eBV(t);const n=e.sdS(19),o=e.XpG();return e.Njj(o.onSelectedCode(n.value))}),e.j41(20,"option",39),e.EFF(21,"Select"),e.k0s(),e.DNE(22,O,2,2,"option",40),e.k0s(),e.nrm(23,"input",41),e.DNE(24,S,3,2,"div",42),e.k0s()(),e.j41(25,"div",29)(26,"label",31),e.EFF(27,"Choose City"),e.k0s(),e.j41(28,"select",43,44),e.bIt("change",function(){e.eBV(t);const n=e.sdS(29),o=e.XpG();return e.Njj(o.onSelectedCity(n.value))}),e.j41(30,"option",39),e.EFF(31,"Select City"),e.k0s(),e.DNE(32,G,2,2,"option",40),e.k0s()(),e.j41(33,"div",29)(34,"label",31),e.EFF(35,"Upload Profile"),e.k0s(),e.j41(36,"input",45),e.bIt("change",function(n){e.eBV(t);const o=e.XpG();return e.Njj(o.onFileSelected(n))}),e.k0s()(),e.j41(37,"div",46)(38,"div",47)(39,"button",48),e.EFF(40," Submit"),e.k0s(),e.j41(41,"button",49),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.CancelForm())}),e.EFF(42," Cancel"),e.k0s()()()()()}if(2&i){const t=e.XpG();let r,n,o,s,d,m;e.R7$(3),e.Y8G("formGroup",t.driverForm),e.R7$(4),e.AVh("is-invalid",(null==(r=t.driverForm.get("drivername"))?null:r.invalid)&&((null==(r=t.driverForm.get("drivername"))?null:r.touched)||(null==(r=t.driverForm.get("drivername"))?null:r.dirty))),e.R7$(1),e.Y8G("ngIf",(null==(n=t.driverForm.get("drivername"))?null:n.invalid)&&((null==(n=t.driverForm.get("drivername"))?null:n.touched)||(null==(n=t.driverForm.get("drivername"))?null:n.dirty))),e.R7$(4),e.AVh("is-invalid",(null==(o=t.driverForm.get("driveremail"))?null:o.invalid)&&((null==(o=t.driverForm.get("driveremail"))?null:o.touched)||(null==(o=t.driverForm.get("driveremail"))?null:o.dirty))),e.R7$(1),e.Y8G("ngIf",(null==(s=t.driverForm.get("driveremail"))?null:s.invalid)&&((null==(s=t.driverForm.get("driveremail"))?null:s.touched)||(null==(s=t.driverForm.get("driveremail"))?null:s.dirty))),e.R7$(9),e.Y8G("ngForOf",t.countrycodeArray),e.R7$(1),e.AVh("is-invalid",(null==(d=t.driverForm.get("driverphone"))?null:d.invalid)&&((null==(d=t.driverForm.get("driverphone"))?null:d.touched)||(null==(d=t.driverForm.get("driverphone"))?null:d.dirty))),e.R7$(1),e.Y8G("ngIf",(null==(m=t.driverForm.get("driverphone"))?null:m.invalid)&&((null==(m=t.driverForm.get("driverphone"))?null:m.touched)||(null==(m=t.driverForm.get("driverphone"))?null:m.dirty))),e.R7$(8),e.Y8G("ngForOf",t.citiesname)}}function T(i,a){if(1&i&&(e.j41(0,"td"),e.EFF(1),e.k0s()),2&i){const t=e.XpG().$implicit;e.R7$(1),e.JRh(t.serviceDetails.vehicleName)}}function N(i,a){1&i&&(e.j41(0,"td"),e.EFF(1,"No Service"),e.k0s())}const $=function(i,a){return{approved:i,declined:a}};function I(i,a){if(1&i){const t=e.RV6();e.j41(0,"tr")(1,"td"),e.nrm(2,"img",54),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.k0s(),e.j41(11,"td")(12,"div",55)(13,"input",56),e.bIt("click",function(){const o=e.eBV(t).$implicit,s=e.XpG();return e.Njj(s.driverStatus(o))}),e.k0s(),e.EFF(14),e.k0s()(),e.DNE(15,T,2,1,"td",51),e.DNE(16,N,2,0,"td",51),e.j41(17,"td")(18,"button",57)(19,"mat-icon"),e.EFF(20,"edit"),e.k0s()(),e.j41(21,"mat-menu",null,58)(23,"button",59),e.bIt("click",function(){const o=e.eBV(t).$implicit,s=e.XpG();return e.Njj(s.editbtn(o))}),e.j41(24,"mat-icon"),e.EFF(25,"update"),e.k0s(),e.EFF(26,"Update"),e.k0s(),e.j41(27,"button",60),e.bIt("click",function(){const o=e.eBV(t).$implicit,s=e.XpG();return e.Njj(s.deleteDriver(o._id))}),e.j41(28,"mat-icon"),e.EFF(29,"delete_forever"),e.k0s(),e.EFF(30,"Delete"),e.k0s(),e.j41(31,"button",61),e.bIt("click",function(){const o=e.eBV(t).$implicit,s=e.XpG();return e.Njj(s.onserviceType(o))}),e.j41(32,"mat-icon"),e.EFF(33,"drive_eta"),e.k0s(),e.EFF(34,"Service Type"),e.k0s()()()()}if(2&i){const t=a.$implicit,r=e.sdS(22);e.R7$(2),e.Mz_("src","http://localhost:4000/",t.profile,"",e.B4B),e.R7$(2),e.JRh(t.drivername),e.R7$(2),e.JRh(t.driveremail),e.R7$(2),e.JRh(t.countrycode+" "+t.driverphone),e.R7$(2),e.JRh(t.cityDetails.city),e.R7$(3),e.Y8G("checked",t.status)("ngClass",e.l_i(11,$,t.status,!t.status)),e.R7$(1),e.SpI(" ",1==t.status?"Approved":"Declined"," "),e.R7$(1),e.Y8G("ngIf",null!=t.servicetype),e.R7$(1),e.Y8G("ngIf",null==t.servicetype),e.R7$(2),e.Y8G("matMenuTriggerFor",r)}}function w(i,a){if(1&i&&(e.j41(0,"option",52),e.EFF(1),e.k0s()),2&i){const t=a.$implicit;e.Y8G("value",t._id),e.R7$(1),e.JRh(t.vehicleName)}}function B(i,a){if(1&i){const t=e.RV6();e.j41(0,"div",62)(1,"form",30),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.updateService())}),e.j41(2,"h1"),e.EFF(3,"Select Service Type"),e.k0s(),e.j41(4,"select",63,64),e.bIt("change",function(){e.eBV(t);const n=e.sdS(5),o=e.XpG();return e.Njj(o.onSelectedVehicle(n.value))}),e.j41(6,"option",65),e.EFF(7,"Select Service"),e.k0s(),e.DNE(8,w,2,2,"option",40),e.k0s(),e.j41(9,"div",66)(10,"button",67),e.EFF(11,"Add"),e.k0s(),e.j41(12,"button",68),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.closeModal())}),e.EFF(13,"Close"),e.k0s()()()()}if(2&i){const t=e.XpG();e.R7$(1),e.Y8G("formGroup",t.serviceForm),e.R7$(7),e.Y8G("ngForOf",t.vehiclesData)}}const V=function(i,a,t){return{itemsPerPage:i,currentPage:a,totalItems:t}};let Y=(()=>{class i{constructor(t,r,n,o,s,d,m){this._driver=t,this.formBuilder=r,this.authService=n,this.toastr=o,this.socket=s,this._socket=d,this._city=m,this.driverFormButton=!1,this.countrycodeArray=[],this.isEditMode=!1,this.citiesname=[],this.driverArray=[],this.limit=5,this.currentPage=1,this.totalPages=0,this.paginatedDrivers=[],this.search="",this.serviceModal=!1,this.selectedSortBy="name",this.selectedSortOrder="desc"}ngOnInit(){this.getCityNamefromDB(),this.getDriverData(),this.getVehicleNamefromDB(),this.getDriverStatus(),this.getDriverService(),this.driverForm=this.formBuilder.group({profile:[""],drivername:["",[c.k0.required]],driveremail:["",[c.k0.required,c.k0.email]],countrycode:["",[c.k0.required]],driverphone:["",[c.k0.required,c.k0.minLength(10)]],city:["",[c.k0.required]],status:[""]}),this.serviceForm=this.formBuilder.group({servicetype:[""]})}getcountryCode(){this._driver.getcode().subscribe({next:t=>{this.countrycodeArray=["+91"]},error:t=>{console.log(t)}})}onSelectedCode(t){this.selectedcountrycode=t}getCityNamefromDB(){this._city.getallcities().subscribe({next:t=>{console.log(t.citydata),this.citiesname=t.citydata},error:t=>{console.log(t)}})}onSelectedCity(t){this.selectedCity=t,console.log(t)}onFileSelected(t){this.file=t.target.files[0],console.log(this.file)}onSubmit(){this.isEditMode?this.updateDriver():this.AddDriver()}AddDriver(){console.log(this.driverForm.value);var r=new FormData;r.append("drivername",this.driverForm.value.drivername),r.append("driveremail",this.driverForm.value.driveremail),r.append("countrycode",this.selectedcountrycode),r.append("driverphone",this.driverForm.value.driverphone),r.append("city",this.selectedCity),r.append("profile",this.file),this.driverForm.valid?this._driver.addDriver(r).subscribe({next:n=>{console.log(n),this.getDriverData(),this.driverForm.reset(),this.driverFormButton=!1,this.file=null,this.toastr.success(n.message)},error:n=>{console.log(n.error.message),this.toastr.error(n.error.message)}}):this.toastr.warning("All Fields are Required")}getDriverData(){this._driver.getDriver(this.search,this.currentPage,this.limit,this.selectedSortBy,this.selectedSortOrder).subscribe({next:t=>{this.driverArray=t.driverdata,this.totalPages=t.totalPage,this.count=t.count,this.updatePaginatedDrivers()},error:t=>{console.log(t)}})}onPageSizeChange(t){this.limit=parseInt(t.target.value),this.currentPage=1,this.updatePaginatedDrivers(),this.getDriverData()}onPageChange(t){t>=1&&t<=this.totalPages&&(this.currentPage=t,this.updatePaginatedDrivers(),this.getDriverData())}getPagesArray(){return Array(this.totalPages).fill(0).map((t,r)=>r+1)}updatePaginatedDrivers(){const t=(this.currentPage-1)*this.limit;this.paginatedDrivers=this.driverArray.slice(t,t+this.limit)}deleteDriver(t){console.log(t),confirm("Are you sure you want to delete this Driver?")&&this._driver.deleteDriver(t).subscribe({next:n=>{console.log(n),this.getDriverData(),this.toastr.success(n.message)},error:n=>{console.log(n.error.message),this.toastr.error(n.error.message)}})}editbtn(t){this.isEditMode=!0,this.id=t._id,console.log(t),this.driverFormButton=!0,this.driverForm.patchValue({drivername:t.drivername,driveremail:t.driveremail,countrycode:t.countrycode,city:t.city,driverphone:t.driverphone,status:t.status})}updateCancel(){this.driverFormButton=!this.driverFormButton}updateDriver(){const t=this.driverForm.value;console.log(t);const r=new FormData;r.append("drivername",t.drivername),r.append("driveremail",t.driveremail),r.append("countrycode",t.countrycode),r.append("driverphone",t.driverphone),r.append("city",t.city),r.append("profile",this.file),this._driver.updateDriver(this.id,r).subscribe({next:n=>{console.log(n.updatedDriver),this.driverArray.push(n.updatedDriver),this.getDriverData(),this.driverForm.reset(),this.driverFormButton=!1,this.file=null,this.toastr.success(n.message)},error:n=>{console.log(n),this.toastr.error(n.error.message)}})}driverStatus(t){this.id=t._id,this._socket.updatedriverStatus(this.id,!t.status)}getDriverStatus(){this._socket.onUpdateStatusData().subscribe({next:t=>{this.driverArray=t,this.getDriverData(),this.toastr.success(t.message,"Success")},error:t=>{console.log(t),this.toastr.error(t.error.message)}})}getVehicleNamefromDB(){this._driver.getVehicleData().subscribe({next:t=>{this.vehiclesData=t.data},error:t=>{console.log(t.error.message)}})}onSelectedVehicle(t){this.selectedVehicle=t}onserviceType(t){this.driverFormButton=!1,this.serviceModal=!0,this.id=t._id,this.serviceForm.patchValue({servicetype:t.servicetype})}updateService(){const t=this.serviceForm.value.servicetype;console.log(t),this._socket.updatedriverService(this.id,t)}getDriverService(){this._socket.onUpdateServiceData().subscribe({next:t=>{this.getDriverData(),this.serviceModal=!1,this.serviceForm.reset(),this.toastr.success(t.message,"Success")},error:t=>{console.log(t),this.toastr.error(t.error.message)}})}toggleFormVisibility(){this.driverFormButton=!this.driverFormButton,this.isEditMode=!1,this.driverForm.reset(),this.driverForm.patchValue({countrycode:"",city:""})}closeModal(){this.serviceModal=!1,this.serviceForm.reset()}CancelForm(){this.driverFormButton=!1,this.isEditMode=!1,this.driverForm.reset(),this.driverForm.patchValue({countrycode:"",city:""})}resetTimer(){this.authService.resetInactivityTimer()}static{this.\u0275fac=function(r){return new(r||i)(e.rXU(C.S),e.rXU(c.ok),e.rXU(F.u),e.rXU(b.tw),e.rXU(h.L),e.rXU(h.L),e.rXU(M.h))}}static{this.\u0275cmp=e.VBU({type:i,selectors:[["app-driver"]],decls:65,vars:16,consts:[[1,"container"],[1,"filter-section"],["id","showbtn",1,"",3,"click"],["aria-hidden","true",1,"fa","fa-user-plus"],["type","text","id","search-input","placeholder","Search by ID, Name, Email, Phone...",3,"ngModel","ngModelChange"],["id","searchbtn",3,"click"],["id","pageSize",1,"m-2",3,"ngModel","ngModelChange","change"],["value","5"],["value","10"],["value","20"],["value","50"],["value","100"],["id","filter-dropdown",3,"ngModel","ngModelChange","change"],["value","name"],["value","email"],["value","phone"],["value","desc"],["value","asc"],[1,"parentFormContainer"],["id","formContainer",4,"ngIf"],["id","tableContainer"],[1,"table-responsive"],[1,"table"],[1,"bg-light","text-dark"],[4,"ngFor","ngForOf"],["class","modal-body",4,"ngIf"],[1,"d-flex","justify-content-center"],["previousLabel","","nextLabel","",3,"maxSize","responsive","pageChange"],["id","formContainer"],[1,"mb-3"],[1,"container",3,"formGroup","ngSubmit"],[1,"form-label","d-flex","justify-content-start"],["type","text","formControlName","drivername","placeholder","Enter Name",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["type","email","formControlName","driveremail","placeholder","Enter Email",1,"form-control"],[1,"parent","mb-3"],[1,"phone-input","w-100"],["id","country-code","name","code","formControlName","countrycode",1,"form-control","w-25",3,"change"],["code",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","tel","id","phone-number","formControlName","driverphone","placeholder","Enter Phone","maxlength","10","onkeypress","return event.charCode >= 48 && event.charCode <= 57",1,"form-control"],["class","invalid-feedback text-danger",4,"ngIf"],["id","city-name","name","city","formControlName","city",1,"form-control","w-100",3,"change"],["city",""],["type","file","formControlName","profile","name","profile",1,"form-control",3,"change"],[1,"form-group","row","mt-3"],[1,"d-flex","justify-content-between"],["type","submit",1,"btn","btn-success"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"],[3,"value"],[1,"invalid-feedback","text-danger"],["alt","driver-profile",3,"src"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckChecked",1,"form-check-input",3,"checked","ngClass","click"],["color","accent","mat-button","",3,"matMenuTriggerFor"],["lvl2master","matMenu"],["mat-menu-item","","id","updatebtn",3,"click"],["mat-menu-item","","id","deletebtn",3,"click"],["mat-menu-item","",3,"click"],[1,"modal-body"],["name","vehicle","formControlName","servicetype",1,"form-control","w-100",3,"change"],["vehicle",""],["value","null","disabled","","selected",""],[1,"p-2"],[1,"btn","btn-success","m-2"],[1,"btn","btn-danger",3,"click"]],template:function(r,n){1&r&&(e.j41(0,"div",0)(1,"div",1)(2,"button",2),e.bIt("click",function(){return n.toggleFormVisibility()}),e.nrm(3,"i",3),e.EFF(4,"\xa0Add Driver"),e.k0s(),e.j41(5,"input",4),e.bIt("ngModelChange",function(s){return n.search=s}),e.k0s(),e.j41(6,"button",5),e.bIt("click",function(){return n.getDriverData()}),e.EFF(7,"Search"),e.k0s(),e.j41(8,"select",6),e.bIt("ngModelChange",function(s){return n.limit=s})("change",function(s){return n.onPageSizeChange(s)}),e.j41(9,"option",7),e.EFF(10,"Select Page"),e.k0s(),e.j41(11,"option",7),e.EFF(12,"5"),e.k0s(),e.j41(13,"option",8),e.EFF(14,"10"),e.k0s(),e.j41(15,"option",9),e.EFF(16,"20"),e.k0s(),e.j41(17,"option",10),e.EFF(18,"50"),e.k0s(),e.j41(19,"option",11),e.EFF(20,"100"),e.k0s()(),e.j41(21,"select",12),e.bIt("ngModelChange",function(s){return n.selectedSortBy=s})("change",function(){return n.getDriverData()}),e.j41(22,"option",13),e.EFF(23,"Name"),e.k0s(),e.j41(24,"option",14),e.EFF(25,"Email"),e.k0s(),e.j41(26,"option",15),e.EFF(27,"Phone"),e.k0s()(),e.j41(28,"select",12),e.bIt("ngModelChange",function(s){return n.selectedSortOrder=s})("change",function(){return n.getDriverData()}),e.j41(29,"option",16),e.EFF(30,"Sorting Order"),e.k0s(),e.j41(31,"option",17),e.EFF(32,"Ascending"),e.k0s(),e.j41(33,"option",16),e.EFF(34,"Descending"),e.k0s()()()(),e.j41(35,"div",18),e.DNE(36,R,43,12,"div",19),e.k0s(),e.j41(37,"div",18)(38,"div",20)(39,"div",21)(40,"table",22)(41,"thead",23)(42,"tr")(43,"th"),e.EFF(44,"Profile"),e.k0s(),e.j41(45,"th"),e.EFF(46,"Name"),e.k0s(),e.j41(47,"th"),e.EFF(48,"Email"),e.k0s(),e.j41(49,"th"),e.EFF(50,"Phone"),e.k0s(),e.j41(51,"th"),e.EFF(52,"City"),e.k0s(),e.j41(53,"th"),e.EFF(54,"Driver Status"),e.k0s(),e.j41(55,"th"),e.EFF(56,"Service"),e.k0s(),e.j41(57,"th"),e.EFF(58,"Action"),e.k0s()()(),e.j41(59,"tbody"),e.DNE(60,I,35,14,"tr",24),e.nI1(61,"paginate"),e.k0s()()()()(),e.DNE(62,B,14,2,"div",25),e.j41(63,"div",26)(64,"pagination-controls",27),e.bIt("pageChange",function(s){return n.onPageChange(s)}),e.k0s()()),2&r&&(e.R7$(5),e.Y8G("ngModel",n.search),e.R7$(3),e.Y8G("ngModel",n.limit),e.R7$(13),e.Y8G("ngModel",n.selectedSortBy),e.R7$(7),e.Y8G("ngModel",n.selectedSortOrder),e.R7$(8),e.Y8G("ngIf",n.driverFormButton),e.R7$(24),e.Y8G("ngForOf",e.i5U(61,9,n.driverArray,e.sMw(12,V,n.limit,n.currentPage,n.count))),e.R7$(2),e.Y8G("ngIf",n.serviceModal),e.R7$(2),e.Y8G("maxSize",5)("responsive",!0))},dependencies:[p.YU,p.Sq,p.bT,c.qT,c.xH,c.y7,c.me,c.wz,c.BC,c.cb,c.tU,c.vS,c.j4,c.JD,v.ej,_.An,g.kk,g.fb,g.Cp,f.$z,v.kf],styles:[".sortorder[_ngcontent-%COMP%]{margin-left:20px;display:flex;justify-content:center;align-items:center}.sortorder[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}#custom-input[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:10px}#search[_ngcontent-%COMP%]{width:25%}.parentFormContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#formContainer[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #d0d0d0;width:40%;max-width:600px;padding:20px;margin:40px}.updateContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin-top:5%}.container[_ngcontent-%COMP%]{border-radius:5px;padding:20px;transition:all linear .3s}.container[_ngcontent-%COMP%]:hover{transform:scale(1);transition:all linear .3s;z-index:1}.parent[_ngcontent-%COMP%]{align-items:center;justify-content:center}.phone-input[_ngcontent-%COMP%]{width:40%;background-color:#fff;display:flex}.phone-input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-right:10px}#pageSize[_ngcontent-%COMP%]{justify-content:center}label[_ngcontent-%COMP%]{font-size:large;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}.container[_ngcontent-%COMP%]{margin:0 auto;padding:20px}.filter-section[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;margin-bottom:20px}#filter-dropdown[_ngcontent-%COMP%], #pageSize[_ngcontent-%COMP%]{padding:5px}#search-input[_ngcontent-%COMP%]{flex-grow:1;padding:5px}#showbtn[_ngcontent-%COMP%]{padding:6px;background-color:#00b900;color:#fff;border:none;cursor:pointer;border-radius:3px}#searchbtn[_ngcontent-%COMP%]{padding:6px;background-color:#7200c4;color:#fff;border:none;cursor:pointer;border-radius:3px}#tableContainer[_ngcontent-%COMP%]{background-color:#333;border-radius:10px;box-shadow:4px 4px 16px #17b009;width:90%;padding:20px;margin:40px}.table-responsive[_ngcontent-%COMP%]{overflow-x:auto}tbody[_ngcontent-%COMP%]{color:#fff}img[_ngcontent-%COMP%]{height:40px}@media (max-width: 780px){.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:12px;color:#fff}#tableContainer[_ngcontent-%COMP%]{background-color:#333;border-radius:10px;box-shadow:4px 4px 16px #17b009;width:90%;max-width:600px;padding:20px;margin:40px}.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{color:#000}#formContainer[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #d0d0d0;width:90%;max-width:600px;padding:20px;margin:40px}#button-search-div[_ngcontent-%COMP%]{display:block}.sortorder[_ngcontent-%COMP%]{margin-left:20px;display:block}.sortorder[_ngcontent-%COMP%], #custom-input[_ngcontent-%COMP%]{display:block}#search[_ngcontent-%COMP%]{width:100%}}@media (max-width: 480px){.table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%] > .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{font-size:14px}}#button-search-div[_ngcontent-%COMP%]{display:block}.card[_ngcontent-%COMP%]{border-radius:10px;border:1px solid #cccccc;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:300px;margin:10px;transition:all linear .2s}.card-img-top[_ngcontent-%COMP%]{height:50px;width:50px}@media screen and (max-width: 480px){#formContainer[_ngcontent-%COMP%]{width:90%;margin:20px}}@media screen and (max-width: 780px){#formContainer[_ngcontent-%COMP%]{width:80%;margin:20px}}@media screen and (max-width: 480px){.card[_ngcontent-%COMP%]{width:90%;height:auto}}.modal-body[_ngcontent-%COMP%]{background-color:#fff;width:30%;box-shadow:2px 2px 2px #666;position:fixed;z-index:9999;top:0;bottom:0;left:70%;background-color:#00000080;overflow:auto;transition:left 2s ease-in-out}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:3%}.card[_ngcontent-%COMP%]{border-radius:8px;border:1px solid #cccccc;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:40%;margin:10px;transition:all linear .2s}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background:#000;color:#fff;border-radius:3px;width:80%}.approved[_ngcontent-%COMP%]{background-color:green}"]})}}return i})();var A=l(8498);const X=[{path:"",component:Y,pathMatch:"full"}];let z=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=e.$C({type:i})}static{this.\u0275inj=e.G2t({imports:[p.MD,A.iI.forChild(X),c.YN,c.X1,v.ed,_.m_,g.Cn,f.Hl]})}}return i})()}}]);