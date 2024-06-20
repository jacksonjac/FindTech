import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../Servies/Users/user-auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor(private authService: UserAuthService) { }

  ngOnInit(): void {
    console.log("Client main component");
  }

   loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  logout(): void {
    this.authService.logoutUser();
  }
}
