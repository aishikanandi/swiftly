import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersOldComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';

const routes : Routes = [{ path : "" , component : UsersOldComponent , pathMatch : "full"}]


@NgModule({
  declarations: [UsersOldComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
