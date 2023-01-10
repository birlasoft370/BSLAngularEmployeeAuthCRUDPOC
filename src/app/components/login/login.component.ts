import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faLock = faLock;
  submitted = false;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  get loginFormControl() {
    return this.loginForm.controls;
  }

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['employee']);
    }
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result: any) => {
          //console.log(result);
          //console.log(result['user'].userName);
          if (result['user'].userName != '') {
            this.auth.setToken(result['user'].userName);
            this.router.navigate(['/employee']);
          }
          else {
            alert('Failed to login');
          }
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  };
}
