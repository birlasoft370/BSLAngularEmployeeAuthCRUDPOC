import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserlistingComponent } from './components/userlisting/userlisting.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordPipe } from './password.pipe';


@NgModule({
  declarations: [
    UserdashboardComponent,
    UserlistingComponent,
    AddUserComponent,
    UpdateUserComponent,
    PasswordPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
