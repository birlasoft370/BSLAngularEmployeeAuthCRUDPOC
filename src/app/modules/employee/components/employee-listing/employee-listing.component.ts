import { Component } from '@angular/core';
import { EmployeeRoutingModule } from '../../employee-routing.module';
import { EmployeeService } from '../../services/employee.service';
import { faLock, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.css']
})
export class EmployeeListingComponent {
  faLock = faLock;
  faEdit = faEdit;
  faDelete = faTrash;
  constructor(private empService: EmployeeService) { }
  ngOnInit(): void {
    this.LoadEmployee();
  }
  collection: any = [];

  LoadEmployee() {
    this.empService.getEmployeeList().subscribe((result) => {
      this.collection = result;
    });
  }

  deleteEmployee(id: any) {
    if (confirm('you want to delete?')) {
      this.empService.deleteEmployee(id).subscribe((result) => {
        console.log(result);
        this.LoadEmployee();
      })
    }
  }

}
