import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInterface } from 'src/app/Interface/Users/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient) { }


  baseUrl = "http://localhost:3000/"

  registerUser(UserData:UserInterface){

    return this.http.post(`${this.baseUrl}api/user/newUser`,UserData)
    
  }

  loginUser(UserData:any){
    console.log("sfsdfsdff",UserData)
    return this.http.post(`${this.baseUrl}api/user/newLogin`,UserData)
  }


 
}
