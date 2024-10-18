import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from '../dashboard/login/login.component';
import { SignupComponent } from '../dashboard/signup/signup.component';
import { UsersComponent } from '../dashboard/users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

const route :  Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userregister',component:UsersComponent}
]

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
    
  ]
})
export class AuthModule { }
