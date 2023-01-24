import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from '@angular/forms';
import { map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { EmployeeService } from '../employee/services/employee.service';
import { UserService } from './service/user.service';
// Refer :- https://blog.angular-university.io/angular-custom-validators/

export function createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

        return !passwordValid ? { passwordStrength: true } : null;
    }
}

/*

export function userExistsValidator(controlusername: string, Controloldpassword: string, service: AuthService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const username = control.get(controlusername)?.value;
        const password = control.get(Controloldpassword)?.value;
        var formvalue = { username: username, password: password };
        console.log(formvalue);
        return service.login(formvalue)
            .pipe(
                map(user => user ? { userExists: true } : null)
            );
    }
}
*/

//Refer :-https://stackoverflow.com/questions/51605737/confirm-password-validation-in-angular-6
export default class CustomValidators {
    static match(controlName: string, matchControlName: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const control = controls.get(controlName);
            const matchControl = controls.get(matchControlName);
            console.log(controlName, matchControlName);
            console.log(control?.value, matchControl?.value);
            if (!matchControl?.errors && control?.value !== matchControl?.value) {
                matchControl?.setErrors({
                    matching: {
                        actualValue: matchControl?.value,
                        requiredValue: control?.value
                    }
                });
                return { matching: true };
            }
            return null;
        };
    }
}