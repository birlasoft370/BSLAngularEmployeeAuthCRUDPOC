import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import CustomValidators, { createPasswordStrengthValidator } from '../../CustomValidators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private service: UserService) {

  }

  addUserform = new FormGroup({
    id: new FormControl(0),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, createPasswordStrengthValidator()]),
    confirmpassword: new FormControl('', [Validators.required])
  },
    {
      validators: [CustomValidators.match('password', 'confirmpassword')]
    });

  alert: boolean = false;
  submitted: boolean = false;

  get userFormControl() {
    return this.addUserform.controls;
  }


  collectUser(): any {
    this.submitted = true;
    if (this.addUserform.valid) {
      this.service.saveUser(this.addUserform.value).subscribe((result) => {
        this.alert = true;
        this.addUserform.reset({});
        this.submitted = false;
      })
    }
  }

  closeAlert() {
    this.alert = false;
  }
}


