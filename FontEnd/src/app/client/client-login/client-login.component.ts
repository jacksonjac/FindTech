declare var google:any
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/Interface/Users/user-interface';
import { ToastService } from 'src/app/Servies/Toster/toast-service.service';
import { UserAuthService } from 'src/app/Servies/Users/user-auth.service';
import { LoginResponse } from 'src/app/Interface/LoginUser'; // Import the new interface

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.scss']
})
export class ClientLoginComponent implements OnInit {
  ngZone: any;


  constructor(
    private fb: FormBuilder,
    private auth: UserAuthService,
    private toastService: ToastService,
    private router: Router
  ) {}
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '1096596892716-ogub7mk17mvh4mus97tdcmkc87r82m2p.apps.googleusercontent.com',
      callback: (response: any) => this.handleLogin(response)
    });

    google.accounts.id.renderButton(document.getElementById("login-btn"), {
      theme: 'filled_black',
      size: 'large',
      text: 'signin_with',
      shape: 'rectangular'
    });
  }

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  handleLogin(response: any): void {
    if (response) {
      const payload = this.decodeToken(response.credential);

      if (payload) {
        sessionStorage.setItem("loggedUser", JSON.stringify(payload));
        this.toastService.showSuccess('Login Successful', 'Welcome to the Technicians List!');
        this.router.navigate(['techlist']);
      } else {
        this.toastService.showError('Login Failed', 'Invalid login response.');
      }
    }
  }




  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[^\\s]+$')]]
  });

  

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
