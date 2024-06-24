import { Component } from '@angular/core';
import { TechAuthService } from '../Servies/Technician/tech-auth.service';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.scss']
})
export class TechnicianComponent {

  constructor(private authService:TechAuthService){}

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  logout(): void {
    this.authService.logoutUser();
  }
}
