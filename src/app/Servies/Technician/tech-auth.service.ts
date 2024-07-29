import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechAuthService {

  constructor(private http:HttpClient,private router:Router) { }

  baseUrl = "http://localhost:3000/"

  registerTechnician(UserData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}api/technician/newTech`, UserData);
  }
  loginTechnician(userData: any): Observable<any> {
    console.log("loginTechnician api passing...")
    return this.http.post<any>(`${this.baseUrl}api/technician/newTechlogin`, userData);
  }
  GoogleregisterTechinician(UserData: any): Observable<any> {

       console.log("google request passing...")
    return this.http.post<any>(`${this.baseUrl}api/technician/GoogleRegister`, UserData);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('techtoken') 
  }



  logoutUser(): void {
    localStorage.removeItem('techtoken');
    
    this.router.navigate(['technician']);
  }
}
