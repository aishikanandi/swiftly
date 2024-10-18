import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../../Service/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private _api: ApiService, private _router : Router, private toastr: ToastrService) {}



  ngOnInit(): void {
    this.myForm = this.formbuilder.group({
      adminName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cnfpassword: ['', [Validators.required, Validators.minLength(8)]],
    });
    const storedUserData = localStorage.getItem('userDetails');
    const storedUserEmail = localStorage.getItem('userEmail');
    const storedUserName = localStorage.getItem('userName');


    if(storedUserEmail){
      if (!storedUserData) { 
        this.toastr.warning('User registration not completed.');
        this._router.navigate(['/userregister'], { queryParams: { email: storedUserEmail, username: storedUserName } });
      }
    }
  }


  submitForm() {
    if (this.myForm.valid) {
      const personData = this.myForm.value;
      this._api.registerUser(personData).subscribe({
      next:  (res) => {
        this.myForm.reset();
        this.toastr.success(res.message);
        localStorage.setItem('userEmail', JSON.stringify({useremail: personData.email}));
        localStorage.setItem('userName', personData.adminName);
        this._router.navigate(['/userregister'], { queryParams: { email: personData.email, username: personData.adminName } })
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message);
      }
    })
    }
    else{
      this.toastr.warning('All Fields are Required');
    }
  }
  

}
