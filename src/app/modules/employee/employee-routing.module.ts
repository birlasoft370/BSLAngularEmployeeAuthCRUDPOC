import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    children: [
      { path: 'list', component: EmployeeListingComponent },
      { path: 'add', component: AddEmployeeComponent },
      { path: 'update/:id', component: UpdateEmployeeComponent },
      { path: '', redirectTo: '/employee/list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
