import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserlistingComponent } from './components/userlisting/userlisting.component';

const routes: Routes = [
  {
    path: '', component: UserdashboardComponent,
    children: [
      { path: '', component: UserlistingComponent },
      { path: 'add', component: AddUserComponent },
      { path: 'update/:id', component: UpdateUserComponent },
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
