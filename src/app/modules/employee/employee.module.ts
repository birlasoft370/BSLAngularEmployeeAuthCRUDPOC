import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { HttpClientModule } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    HeaderComponent,
    FooterComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeListingComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule
  ]
})
export class EmployeeModule { }
