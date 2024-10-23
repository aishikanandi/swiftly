"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[898],{8898:(I,d,l)=>{l.r(d),l.d(d,{VehicleModule:()=>y});var m=l(177),r=l(9417),e=l(7705),g=l(4131),v=l(5794),f=l(6731),p=l(9213),u=l(8834);function F(o,s){1&o&&(e.j41(0,"div"),e.EFF(1,"Vehicle is required."),e.k0s())}function b(o,s){if(1&o&&(e.j41(0,"div",13),e.DNE(1,F,2,0,"div",1),e.k0s()),2&o){const t=e.XpG(2);let i;e.R7$(1),e.Y8G("ngIf",null==(i=t.vehicleForm.get("vehicleName"))||null==i.errors?null:i.errors.required)}}function x(o,s){if(1&o){const t=e.RV6();e.qex(0),e.j41(1,"div",4)(2,"div",5)(3,"form",6),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.addVehicle())}),e.j41(4,"div",7)(5,"label",8),e.EFF(6,"Vehicle Type"),e.k0s(),e.nrm(7,"input",9),e.DNE(8,b,2,1,"div",10),e.k0s(),e.j41(9,"div",7)(10,"label",8),e.EFF(11,"Add Vehicle Image"),e.k0s(),e.j41(12,"input",11),e.bIt("change",function(n){e.eBV(t);const c=e.XpG();return e.Njj(c.onFileSelected(n))}),e.k0s()(),e.j41(13,"div")(14,"button",12),e.EFF(15," Add"),e.k0s()()()()(),e.bVm()}if(2&o){const t=e.XpG();let i,n;e.R7$(3),e.Y8G("formGroup",t.vehicleForm),e.R7$(4),e.AVh("is-invalid",(null==(i=t.vehicleForm.get("vehicleName"))?null:i.invalid)&&((null==(i=t.vehicleForm.get("vehicleName"))?null:i.touched)||(null==(i=t.vehicleForm.get("vehicleName"))?null:i.dirty))),e.R7$(1),e.Y8G("ngIf",(null==(n=t.vehicleForm.get("vehicleName"))?null:n.invalid)&&((null==(n=t.vehicleForm.get("vehicleName"))?null:n.touched)||(null==(n=t.vehicleForm.get("vehicleName"))?null:n.dirty)))}}function _(o,s){if(1&o){const t=e.RV6();e.qex(0),e.j41(1,"div",4)(2,"div",5)(3,"form",6),e.bIt("ngSubmit",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.updateVehicle())}),e.j41(4,"div",7)(5,"label",8),e.EFF(6,"Vehicle Type"),e.k0s(),e.nrm(7,"input",9),e.k0s(),e.j41(8,"div",7)(9,"label",8),e.EFF(10,"Add Vehicle Image"),e.k0s(),e.j41(11,"input",14),e.bIt("change",function(n){e.eBV(t);const c=e.XpG();return e.Njj(c.onFileSelected(n))}),e.k0s()(),e.j41(12,"div")(13,"button",15),e.EFF(14," Update"),e.k0s()()()()(),e.bVm()}if(2&o){const t=e.XpG();e.R7$(3),e.Y8G("formGroup",t.vehicleForm)}}function V(o,s){if(1&o){const t=e.RV6();e.j41(0,"div",16),e.nrm(1,"img",17),e.j41(2,"div",18)(3,"h5",19),e.EFF(4),e.k0s(),e.j41(5,"button",20),e.bIt("click",function(){const c=e.eBV(t).$implicit,a=e.XpG();return e.Njj(a.editVehicle(c))}),e.j41(6,"mat-icon"),e.EFF(7,"edit"),e.k0s(),e.EFF(8,"Edit "),e.k0s()()()}if(2&o){const t=s.$implicit;e.R7$(1),e.Mz_("src","http://localhost:4000/",t.vehicleImage,"",e.B4B),e.R7$(3),e.JRh(t.vehicleName)}}let C=(()=>{class o{constructor(t,i,n,c,a){this.formbuilder=t,this._vehicle=i,this.cdr=n,this.toastr=c,this.authService=a,this.AddbuttonForm=!1,this.updateButtonForm=!1,this.isUpdate=!1}ngOnInit(){this.vehicleForm=this.formbuilder.group({vehicleName:["",[r.k0.required]]}),this._vehicle.getvehicleData().subscribe({next:t=>{this.vehiclesData=t.data.map(i=>({_id:i._id,vehicleName:i.vehicleName,vehicleImage:i.vehicleImage}))},error:t=>{alert(t)}})}onFileSelected(t){this.file=t.target.files[0]}addVehicle(){const t=new FormData;t.append("vehicleImage",this.file),t.append("vehicleName",this.vehicleForm.value.vehicleName),this.vehicleForm.valid?this._vehicle.registerVehicle(t).subscribe({next:i=>{this.vehiclesData.push(i.vehicle),this.vehicleForm.reset(),this.AddbuttonForm=!1,this.toastr.success(i.message)},error:i=>{console.log(i),this.toastr.warning(i.error.message)}}):this.toastr.warning("Please Fill Valid Details")}updateVehicle(){const t=new FormData;t.append("vehicleImage",this.file),t.append("vehicleName",this.vehicleForm.value.vehicleName),console.log(this.vehicleForm.value),this._vehicle.updateVehicle(this.id,t).subscribe({next:n=>{let c=n.vehicle;this.vehicleForm.reset(),this.updateButtonForm=!1,console.log(this.vehiclesData),this.file=null,this.toastr.success(n.message);let a=this.vehiclesData.find(h=>(console.log(h),h._id===c._id));console.log(a),Object.keys(a).forEach(h=>{a[h]=c[h]})},error:n=>{console.log(n),this.toastr.warning(n.error.message)}}),this.selectedVehicle=null}editVehicle(t){this.id=t._id,this.isUpdate=!0,this.selectedVehicle=t,console.log(this.vehicleForm),console.log(t.vehicleName),this.vehicleForm.patchValue({vehicleName:t.vehicleName}),this.updateButtonForm=!0,this.AddbuttonForm=!1}toggleFormVisibility(){this.AddbuttonForm=!this.AddbuttonForm,this.selectedVehicle=null,this.vehicleForm.reset(),this.updateButtonForm=!1}resetTimer(){this.authService.resetInactivityTimer()}static{this.\u0275fac=function(i){return new(i||o)(e.rXU(r.ok),e.rXU(g.K),e.rXU(e.gRc),e.rXU(v.tw),e.rXU(f.u))}}static{this.\u0275cmp=e.VBU({type:o,selectors:[["app-vehicle"]],decls:6,vars:3,consts:[["id","showbtn",3,"click"],[4,"ngIf"],[1,"card-container","container","d-flex","flex-wrap"],["class","m-4 card",4,"ngFor","ngForOf"],[1,"parentFormContainer"],["id","formContainer"],[1,"container",3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label","d-flex","justify-content-start"],["type","text","formControlName","vehicleName",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["type","file","formControlName","vehicleImage","name","vehicleImage",1,"form-control",3,"change"],["type","submit","id","Addbutton",1,"btn","btn-primary","w-100"],[1,"invalid-feedback"],["type","file","formControlName","vehicleImage","name","vehicleImage","ccept","image/png, image/jpg, image/gif, image/jpeg",1,"form-control",3,"change"],["type","submit","id","updateButton",1,"btn","btn-primary","w-100"],[1,"m-4","card"],["id","vehicle_image","name","image","alt","vehicle-image",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],["mat-button","","mat-stroked-button","","color","primary","color","accent","mat-button","",3,"click"]],template:function(i,n){1&i&&(e.j41(0,"button",0),e.bIt("click",function(){return n.toggleFormVisibility()}),e.EFF(1," Add Vehicle"),e.k0s(),e.DNE(2,x,16,4,"ng-container",1),e.DNE(3,_,15,1,"ng-container",1),e.j41(4,"div",2),e.DNE(5,V,9,2,"div",3),e.k0s()),2&i&&(e.R7$(2),e.Y8G("ngIf",n.AddbuttonForm),e.R7$(1),e.Y8G("ngIf",n.updateButtonForm),e.R7$(2),e.Y8G("ngForOf",n.vehiclesData))},dependencies:[m.Sq,m.bT,r.qT,r.me,r.BC,r.cb,r.j4,r.JD,p.An,u.$z],styles:["h1[_ngcontent-%COMP%]{font-family:cursive;padding:40px;color:#fff}.parentFormContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#formContainer[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #000;width:90%;max-width:600px;padding:20px;margin:40px}input[_ngcontent-%COMP%]{width:100%;padding:5px}#showbtn[_ngcontent-%COMP%]{padding:10px;border-radius:5px;box-shadow:2px 2px 2px #4371e4;margin:20px;border:1px solid black}#showbtn[_ngcontent-%COMP%]:hover{transform:scale(1.1);transition:all linear .2s;z-index:1;box-shadow:2px 2px 20px #0000004d;cursor:pointer}@media screen and (max-width: 480px){#formContainer[_ngcontent-%COMP%]{width:90%;margin:20px}}@media screen and (max-width: 780px){#formContainer[_ngcontent-%COMP%]{width:80%;margin:20px}}.card-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin-top:3%}.card[_ngcontent-%COMP%]{border-radius:8px;border:1px solid #cccccc;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:200px;height:270px;margin:10px;transition:all linear .2s}@media screen and (max-width: 480px){.card[_ngcontent-%COMP%]{width:90%;height:auto}}"]})}}return o})();var j=l(8498);const N=[{path:"",component:C,pathMatch:"full"}];let y=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=e.$C({type:o})}static{this.\u0275inj=e.G2t({imports:[m.MD,j.iI.forChild(N),r.YN,r.X1,p.m_,u.Hl]})}}return o})()}}]);