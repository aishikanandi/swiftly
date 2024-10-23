import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/Service/users.service';
import { CreaterideService } from 'src/app/Service/createride.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _api: ApiService, private user: UsersService, private _router: Router, private formBuilder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log(email, password);
  
      this._api.loginUser({ email, password }).subscribe({
        next: (res: any) => {
          const token = res.token;
          sessionStorage.setItem('token', token);
          localStorage.setItem("token", token);
          this.getUserData();
          this.loginForm.reset();
          this.toastr.success(res.message, 'Success');
          this._router.navigate(['/app/dashboard']);
        },
        error: (error) => {
          // Handle login error
          console.error(error);
          this.toastr.error(error.error.message);
        }
      });
    } else {
      this.toastr.warning('All Fields are required.');
    }
  }
  
  getUserData() {
    const { email } = this.loginForm.value;
    console.log('hiiiiiii');
    this.user.getUserByEmail({useremail:email}).subscribe({
      next: (response: any) => {
        console.log(response)
        localStorage.setItem('userName', JSON.stringify({username: response.username}));
        localStorage.setItem('userDetails', JSON.stringify(response));
        localStorage.setItem('userEmail', JSON.stringify({useremail: response.useremail}));
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  

}


