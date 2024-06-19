import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/Interface/Users/user-interface';
import { LoginResponse } from 'src/app/Interface/LoginUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient) { }


  baseUrl = "http://localhost:3000/"

  registerUser(UserData:UserInterface){

    return this.http.post(`${this.baseUrl}api/user/newUser`,UserData)
    
  }

  loginUser(userData: UserInterface): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}api/user/newLogin`, userData);
  }


 
}
