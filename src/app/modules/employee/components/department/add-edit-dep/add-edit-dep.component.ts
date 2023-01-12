import { Component, Input } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent {
  constructor(private service: EmployeeService) { }
  @Input() dep: any;
  DepartmentId: string = '';
  DepartmentName: string = '';

  ngOnInit(): void {
    console.log('addeditcomponent', this.dep);
    this.DepartmentId = this.dep.departmentId;
    this.DepartmentName = this.dep.departmentName;
  }

  addDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    if (this.DepartmentName != null && this.DepartmentName != "") {
      this.service.addDepartment(val).subscribe(res => {
        console.log(res);
        alert(res.toString());
      });
    }
    else {
      alert('Please fill the department name field');
    }
  }

  updateDepartment() {
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    if (this.DepartmentName != null && this.DepartmentName != "") {
      this.service.updateDepartment(val).subscribe(res => {
        alert(res.toString());
      });
    }
    else {
      alert('Please fill the department name field');
    }
  }
}
