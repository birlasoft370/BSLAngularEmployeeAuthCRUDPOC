import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../../service/user.service';
import CustomValidators, { createPasswordStrengthValidator } from '../../CustomValidators';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  constructor(private service: UserService, private route: ActivatedRoute, private authservice: AuthService) { }
  ngOnInit() {
    console.warn(this.route.snapshot.params['id']);
    this.service.getCurrentUser(this.route.snapshot.params['id']).subscribe((result: any) => {
      console.log(result);

      this.updateUserform.setValue({
        id: result.id,
        username: result.userName,
        oldpassword: result.password,
        newpassword: '',
        confirmpassword: ''
      });
    });
  }

  updateUserform = new FormGroup({
    id: new FormControl(),
    username: new FormControl('', Validators.required),
    oldpassword: new FormControl('', [Validators.required]),
    newpassword: new FormControl('', [Validators.required, createPasswordStrengthValidator()]),
    confirmpassword: new FormControl('', [Validators.required])
  },
    {
      validators: [CustomValidators.match('newpassword', 'confirmpassword')],
      //asyncVavalidatorslidators: [userExistsValidator('username', 'oldpassword', this.authservice)]
    });

  alert: boolean = false;
  submitted: boolean = false;

  get userFormControl() {
    return this.updateUserform.controls;
  }


  collectUser(): any {
    console.log(this.updateUserform.value);
    this.submitted = true;
    console.log(this.updateUserform.valid);
    if (this.updateUserform.valid) {
      var updateData = { userName: this.updateUserform.controls.username.value, password: this.updateUserform.controls.newpassword.value }
      this.service.updateUser(this.route.snapshot.params['id'], updateData).subscribe((result) => {
        this.alert = true;
        this.updateUserform.reset({});
        this.submitted = false;
      })
    }
  }

  closeAlert() {
    this.alert = false;
  }
}
