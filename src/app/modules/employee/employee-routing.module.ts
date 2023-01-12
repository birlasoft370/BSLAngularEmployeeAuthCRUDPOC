import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DepartmentComponent } from './components/department/department.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    children: [
      { path: '', component: LandingHomeComponent },
      { path: 'list', component: EmployeeListingComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: 'update/:id', component: UpdateEmployeeComponent },
      { path: 'department', component: DepartmentComponent },
      { path: '', redirectTo: '/employee/', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
