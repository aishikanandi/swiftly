"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[449],{9449:(p,s,r)=>{r.r(s),r.d(s,{SettingModule:()=>v});var u=r(177),o=r(9417),t=r(7705),c=r(2007),d=r(5794),g=r(6731);const a=function(){return{"background-color":"#ebebeb"}};let h=(()=>{class l{constructor(e,n,i,m){this._setting=e,this.toastr=n,this.authService=i,this.formBuilder=m,this.timeoutArray=[10,20,30,45,60,90,120],this.stopArray=[1,2,3,4,5],this.credentials=[]}ngOnInit(){this.initializeForm(),this.getsettingData()}initializeForm(){this.settingForm=this.formBuilder.group({ridetimeout:["",[o.k0.required]],stop:["",[o.k0.required]],EMAIL_USER:["",[o.k0.required]],EMAIL_PASSWORD:["",[o.k0.required]],accountSid:["",[o.k0.required]],authToken:["",[o.k0.required]],twilioPhoneNumber:["",[o.k0.required]],STRIPE_Publishable_key:["",[o.k0.required]],STRIPE_Secret_key:["",[o.k0.required]]})}getsettingData(){this._setting.get_setting_data().subscribe({next:e=>{console.log(e),this.settingdata=e,this.id=e[0]._id,this.settingForm.patchValue({ridetimeout:e[0].ridetimeout,stop:e[0].stop,EMAIL_USER:e[0].EMAIL_USER,EMAIL_PASSWORD:e[0].EMAIL_PASSWORD,accountSid:e[0].accountSid,authToken:e[0].authToken,twilioPhoneNumber:e[0].twilioPhoneNumber,STRIPE_Publishable_key:e[0].STRIPE_Publishable_key,STRIPE_Secret_key:e[0].STRIPE_Secret_key})},error:e=>{console.log(e)}})}onSubmit(){console.log(this.settingForm.value),this.settingForm.valid?this._setting.updateSetting({settingdata:this.settingForm.value,id:this.id}).subscribe({next:n=>{console.log(n),this.settingdata=n,this.toastr.success(n.message),this.getsettingData()},error:n=>{console.log(n),this.toastr.error(n.error.message)}}):(this.toastr.warning("All Fields Required"),console.log("All Fields Required"))}resetTimer(){this.authService.resetInactivityTimer()}static{this.\u0275fac=function(n){return new(n||l)(t.rXU(c.q),t.rXU(d.tw),t.rXU(g.u),t.rXU(o.ok))}}static{this.\u0275cmp=t.VBU({type:l,selectors:[["app-setting"]],decls:61,vars:24,consts:[[1,"parentFormContainer"],["id","formContainer"],[1,"mb-3"],[1,"container",3,"formGroup","ngSubmit"],[1,"form-group","row","align-items-center","mb-2","d-flex"],[1,"col-sm-3","col-form-label","text-end"],[1,"col-sm-9","form-custom-select"],["type","text","formControlName","ridetimeout",1,"form-control",3,"value"],["type","text","formControlName","stop",1,"form-control",3,"value"],[1,"form-group","row","align-items-center","mb-2"],["type","text","formControlName","EMAIL_USER",1,"form-control",3,"value","ngStyle"],["type","text","formControlName","EMAIL_PASSWORD",1,"form-control",3,"value","ngStyle"],["type","text","formControlName","accountSid",1,"form-control",3,"value","ngStyle"],["type","text","formControlName","authToken",1,"form-control",3,"value","ngStyle"],["type","text","formControlName","twilioPhoneNumber",1,"form-control",3,"value","ngStyle"],["type","text","formControlName","STRIPE_Publishable_key",1,"form-control",3,"value","ngStyle"],["type","text","formControlName","STRIPE_Secret_key",1,"form-control",3,"value","ngStyle"],[1,"note","mt-2"],["type","submit",1,"btn","btn-info"]],template:function(n,i){1&n&&(t.j41(0,"div",0)(1,"div",1)(2,"h2",2),t.EFF(3,"Setting Panel"),t.k0s(),t.j41(4,"form",3),t.bIt("ngSubmit",function(){return i.onSubmit()}),t.j41(5,"div",4)(6,"label",5),t.EFF(7,"Ride Timeout"),t.k0s(),t.j41(8,"div",6),t.nrm(9,"input",7),t.k0s()(),t.j41(10,"div",4)(11,"label",5),t.EFF(12,"Stop"),t.k0s(),t.j41(13,"div",6),t.nrm(14,"input",8),t.k0s()(),t.j41(15,"div")(16,"div",9)(17,"label",5),t.EFF(18,"Ethereal Username"),t.k0s(),t.j41(19,"div",6),t.nrm(20,"input",10),t.k0s()()(),t.j41(21,"div")(22,"div",9)(23,"label",5),t.EFF(24,"Ethereal Password"),t.k0s(),t.j41(25,"div",6),t.nrm(26,"input",11),t.k0s()()(),t.j41(27,"div")(28,"div",9)(29,"label",5),t.EFF(30,"Account Sid"),t.k0s(),t.j41(31,"div",6),t.nrm(32,"input",12),t.k0s()()(),t.j41(33,"div")(34,"div",9)(35,"label",5),t.EFF(36,"Auth Token"),t.k0s(),t.j41(37,"div",6),t.nrm(38,"input",13),t.k0s()()(),t.j41(39,"div")(40,"div",9)(41,"label",5),t.EFF(42,"Twilio Phone Number"),t.k0s(),t.j41(43,"div",6),t.nrm(44,"input",14),t.k0s()()(),t.j41(45,"div")(46,"div",9)(47,"label",5),t.EFF(48,"STRIPE Publishable Key "),t.k0s(),t.j41(49,"div",6),t.nrm(50,"input",15),t.k0s()()(),t.j41(51,"div")(52,"div",9)(53,"label",5),t.EFF(54,"STRIPE Secret Key"),t.k0s(),t.j41(55,"div",6),t.nrm(56,"input",16),t.k0s()()(),t.j41(57,"p",17),t.EFF(58," *Note : Please be cautious before changing the credentials. "),t.k0s(),t.j41(59,"button",18),t.EFF(60,"Update"),t.k0s()()()()),2&n&&(t.R7$(4),t.Y8G("formGroup",i.settingForm),t.R7$(5),t.Y8G("value",i.ridetimeout),t.R7$(5),t.Y8G("value",i.stop),t.R7$(6),t.Y8G("value",i.EMAIL_USER)("ngStyle",t.lJ4(17,a)),t.R7$(6),t.Y8G("value",i.EMAIL_PASSWORD)("ngStyle",t.lJ4(18,a)),t.R7$(6),t.Y8G("value",i.accountSid)("ngStyle",t.lJ4(19,a)),t.R7$(6),t.Y8G("value",i.authToken)("ngStyle",t.lJ4(20,a)),t.R7$(6),t.Y8G("value",i.twilioPhoneNumber)("ngStyle",t.lJ4(21,a)),t.R7$(6),t.Y8G("value",i.STRIPE_Publishable_key)("ngStyle",t.lJ4(22,a)),t.R7$(6),t.Y8G("value",i.STRIPE_Secret_key)("ngStyle",t.lJ4(23,a)))},dependencies:[u.B3,o.qT,o.me,o.BC,o.cb,o.j4,o.JD],styles:[".parentFormContainer[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif}#formContainer[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:4px 4px 16px #d0d0d0;width:90%;max-width:600px;padding:20px;margin:40px}#formContainer[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.form-custom-select[_ngcontent-%COMP%]{position:relative;display:inline-block}.form-custom-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{appearance:none;-webkit-appearance:none;-moz-appearance:none;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.form-dropdown-icon[_ngcontent-%COMP%]{position:absolute;top:50%;right:2rem;transform:translateY(-50%);pointer-events:none}.note[_ngcontent-%COMP%]{color:red;font-weight:700}"]})}}return l})();var f=r(8498);const S=[{path:"",component:h,pathMatch:"full"}];let v=(()=>{class l{static{this.\u0275fac=function(n){return new(n||l)}}static{this.\u0275mod=t.$C({type:l})}static{this.\u0275inj=t.G2t({imports:[u.MD,f.iI.forChild(S),o.YN,o.X1]})}}return l})()}}]);