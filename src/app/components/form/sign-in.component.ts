import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  templateUrl: './sign-in.component.html',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
  ],
})
export class SignInComponent {
  SignInForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private toast_error: ToastrService) {
    this.SignInForm = this.fb.group({
      email_or_username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
      auth_provider: 'simple',
    });
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,}$/;
    if (!regex.test(password)) {
      return { invalidPassword: 'The password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number' };
    }
    return null;
  }


  onSubmit() {
    if (this.SignInForm.valid) {
      this.http.post('http://127.0.0.1:5001/user/login', this.SignInForm.value).subscribe({
        next: (response: any) => {
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/black']);
        },
        error: (error) => {
          const errorMessage = error?.error?.error || 'Registration error';
          this.toast_error.error(errorMessage, 'API Error', {
            timeOut: 3000,
            closeButton: true,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-bottom-right',
            tapToDismiss: false
          });
        }
      });
    }
  }
}
