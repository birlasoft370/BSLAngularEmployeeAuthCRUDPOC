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

  EmployeeNameFilter: string = "";
  EmployeeListWithoutFilter: any = [];

  constructor(private empService: EmployeeService) { }
  ngOnInit(): void {
    this.LoadEmployee();
  }
  collection: any = [];

  LoadEmployee() {
    this.empService.getEmployeeList().subscribe((result) => {
      this.collection = result;
      this.EmployeeListWithoutFilter = result;
      this.EmployeeNameFilter = "";
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

  FilterFn() {
    var EmployeeNameFilter = this.EmployeeNameFilter;

    this.collection = this.EmployeeListWithoutFilter.filter(function (el: any) {
      return el.name.toString().toLowerCase().includes(EmployeeNameFilter.toString().trim().toLowerCase())
    });
  }

}
