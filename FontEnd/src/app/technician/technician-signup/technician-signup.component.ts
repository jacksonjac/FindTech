import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-technician-signup',
  templateUrl: './technician-signup.component.html',
  styleUrls: ['./technician-signup.component.scss']
})
export class TechnicianSignupComponent {
  signupForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    district: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[^\\s]+$')]],
    confirmPassword: ['', [Validators.required]]
  }, { validator: this.passwordMatchValidator });

  constructor(private fb: FormBuilder) {}

  passwordMatchValidator(form: any) {
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;

    if (password !== confirmPassword) {
      form.get('confirmPassword').setErrors({ mismatch: true });
    } else {
      form.get('confirmPassword').setErrors(null);
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted!', this.signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
