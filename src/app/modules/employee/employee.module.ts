import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { DepartmentComponent } from './components/department/department.component';
import { ShowDepComponent } from './components/department/show-dep/show-dep.component';
import { AddEditDepComponent } from './components/department/add-edit-dep/add-edit-dep.component';
import { UserModule } from '../user/user.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeListingComponent,
    LandingHomeComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    UserModule,
    NgxPaginationModule
  ]
})
export class EmployeeModule { }
