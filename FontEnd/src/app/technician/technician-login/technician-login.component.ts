import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-technician-login',
  templateUrl: './technician-login.component.html',
  styleUrls: ['./technician-login.component.scss']
})
export class TechnicianLoginComponent {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[^\\s]+$')]]
  });
  constructor(private fb: FormBuilder) {}
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }

}
