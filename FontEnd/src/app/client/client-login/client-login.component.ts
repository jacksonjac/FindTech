import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserAuthService } from 'src/app/Servies/Users/user-auth.service';

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
  constructor(private fb: FormBuilder,
     private auth:UserAuthService ,
     private mService:MessageService,
     private router:Router,) {}


     onSubmit() {
      if (this.loginForm.valid) {
       const UserData = {
       
        email:this.loginForm.value.email,
      
        password:this.loginForm.value.password}
  
     
        this.auth.loginUser(UserData as any)
        .subscribe((response) => {
          if (response) {
           
            console.log("responce of loginbackend",response)

           this.router.navigate(['techlist'])
          } else {
            console.log("Failed to register");
          }
        }, (error) => {
          console.log(error);
        });
    }
  }
}
