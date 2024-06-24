import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/Interface/Users/user-interface';
import { LoginResponse } from 'src/app/Interface/LoginUser';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterResponse } from 'src/app/Interface/Users/RegisterResponse';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient,private router:Router) { }


  baseUrl = "http://localhost:3000/"

  registerUser(UserData: any): Observable<RegisterResponse> {
    return this.http.post<any>(`${this.baseUrl}api/user/newUser`, UserData);
  }
  loginUser(userData: UserInterface): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}api/user/newLogin`, userData);
  }
  GoogleregisterUser(UserData: any): Observable<any> {

       console.log("google request passing...")
    return this.http.post<any>(`${this.baseUrl}api/user/GoogleRegister`, UserData);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('token') 
  }



  logoutUser(): void {
    localStorage.removeItem('token');
    
    this.router.navigate(['']);
  }
 
}
