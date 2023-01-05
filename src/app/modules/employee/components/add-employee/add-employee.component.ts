import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private empService: EmployeeService, private modalService: NgbModal, private router: Router) { }
  alert: boolean = false;
  submitted: boolean = false;
  public alertMessage: string = "";

  departmentdata: any[] = [{ "code": "IT", "name": "IT" }, { "code": "HR", "name": "HR" }];
  addEmployee = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.max(99), Validators.min(1)]),
    department: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });

  collectEmployee(): any {
    this.submitted = true;
    if (this.addEmployee.valid) {
      this.empService.saveEmployee(this.addEmployee.value).subscribe((result) => {
        this.alert = true;
        this.addEmployee.reset({});
        this.submitted = false;
        this.alertMessage = "Your data has been inserted successfully.";
        var element = document.getElementById('submitBtn');
        element?.click();
      })
    }
  }

  closeAlert() {
    this.alert = false;
  }

  get employeeFormControl() {
    return this.addEmployee.controls;
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  closeClick() {
    this.modalService.dismissAll('Close click');
    this.router.navigate(['employee', 'list']);
  }
}
