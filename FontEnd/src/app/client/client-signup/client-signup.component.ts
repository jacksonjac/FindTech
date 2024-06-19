import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { UserInterface } from 'src/app/Interface/Users/user-interface';
import { UserAuthService } from 'src/app/Servies/Users/user-auth.service';


@Component({
  selector: 'app-client-signup',
  templateUrl: './client-signup.component.html',
  styleUrls: ['./client-signup.component.scss'],
  providers: [MessageService]
})
export class ClientSignupComponent implements OnInit{




  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  signupForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    district: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[^\\s]+$')]],
    confirmPassword: ['', [Validators.required]]
  }, { validator: this.passwordMatchValidator });
  messageService: any;

  constructor(private fb: FormBuilder ,
    private auth:UserAuthService,
    private mService:MessageService,
    private router:Router,
    private primengConfig: PrimeNGConfig) {}

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
     const UserData = {
      name:this.signupForm.value.name,
      email:this.signupForm.value.email,
      phone:this.signupForm.value.phone,
      district:this.signupForm.value.district,
      password:this.signupForm.value.password}

   
      this.auth.registerUser(UserData as UserInterface)
      .subscribe((response) => {
        if (response) {
           console.log(response,"from back end")
          this.router.navigate(['otppage']);
        } else {
          console.log("Failed to register");
        }
      }, (error) => {
        console.log(error);
      });
  }
}


   
}
