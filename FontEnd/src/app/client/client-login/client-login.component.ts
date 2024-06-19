import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/Interface/Users/user-interface';
import { ToastService } from 'src/app/Servies/toast-service.service';
import { UserAuthService } from 'src/app/Servies/Users/user-auth.service';
import { LoginResponse } from 'src/app/Interface/LoginUser'; // Import the new interface

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[^\\s]+$')]]
  });

  constructor(
    private fb: FormBuilder,
    private auth: UserAuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const UserData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.auth.loginUser(UserData as UserInterface)

        .subscribe((response: any) => {  
          
            
          if (response && response.status) {
            console.log("Login successful:", response.token);
            localStorage.setItem('token',response.token)
        
            
         this.toastService.showSuccess('Login Successful', 'Welcome to the Technicians List!');
            this.router.navigate(['techlist']);


          } else {
            console.log("Failed to login:", response.message);
            this.toastService.showError('Login Failed', response.message || 'Please check your credentials.');
          }
        }, error => {
          console.log("Error during login:", error);
          this.toastService.showError('Error', 'An error occurred during login.');
        });
    }
  }
}
