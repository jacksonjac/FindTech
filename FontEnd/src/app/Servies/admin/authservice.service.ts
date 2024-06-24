import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient,private router:Router) { }
 baseUrl = "http://localhost:3000/"


  loginAdmin(AdminData: any): Observable<any> {
    console.log("loginadmin api passing..." ,AdminData)
    return this.http.post<any>(`${this.baseUrl}api/admin/Adminlogin`, AdminData);
  }

  Userlist():Observable<any>{
    console.log("passing uselist..")
    return this.http.get<any>(`${this.baseUrl}api/admin/userlist`)
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('admintoken') 
  }
  blockUser(userId: string): Observable<any> {
    console.log("Passing block user....", userId);
    return this.http.post(`${this.baseUrl}api/admin/blockuser?id=${userId}`, {});
  }
  UnblockUser(userId: string): Observable<any> {
    console.log("Passing block user....", userId);
    return this.http.post(`${this.baseUrl}api/admin/Unblockuser?id=${userId}`, {});
  }


  logoutUser(): void {
    localStorage.removeItem('admintoken');
    
    this.router.navigate(['admin']);
  }
}
