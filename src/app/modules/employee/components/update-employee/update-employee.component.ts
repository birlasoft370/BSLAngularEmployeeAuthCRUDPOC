import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  constructor(private route: ActivatedRoute,private modalService: NgbModal, private empService: EmployeeService,private router:Router) { }

  ngOnInit() {
    console.warn(this.route.snapshot.params['id']);
    this.empService.getCurrentEmployee(this.route.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);
      this.editEmployee = new FormGroup({
        name: new FormControl(result.name, Validators.required),
        address: new FormControl(result.address, [Validators.required]),
        age: new FormControl(result.age, [Validators.required, Validators.max(99), Validators.min(1)]),
        department: new FormControl(result.department, Validators.required),
        salary: new FormControl(result.salary, Validators.required)
      });
    });
  }

  alert: boolean = false;
  submitted: boolean = false;
  public alertMessage: string = "";

  departmentdata: any[] = [{ "code": "IT", "name": "IT" }, { "code": "HR", "name": "HR" }];

  editEmployee = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.max(99), Validators.min(1)]),
    department: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });

  collectEmployee(): any {
    this.submitted = true;
    if (this.editEmployee.valid) {
      this.empService.updateEmployee(this.route.snapshot.params['id'], this.editEmployee.value).subscribe((result) => {
        this.alert = true;
        this.submitted = false;
        this.alertMessage = "Your data has been updated successfully.";
        var element = document.getElementById('submitBtn');
        element?.click();
      })
    }
  }

  closeAlert() {
    this.alert = false;
  }

  get employeeFormControl() {
    return this.editEmployee.controls;
  }

  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }
  closeClick() {
    this.modalService.dismissAll('Close click');
    this.router.navigate(['employee', 'list']);
  }
}
