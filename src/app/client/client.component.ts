import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../Servies/Users/user-auth.service';
// import { fadeAnimation } from '../Services/animations/animation.service';

import {NavigationEnd, Router, RouterOutlet} from '@angular/router'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  // animations:[fadeAnimation]
})
export class ClientComponent implements OnInit {

  Userid: string = "";
  dropdownOpen = false;
  userName = '';
  userEmail = '';
  imageurl =''
  animationState: string = 'fade';
  isLoading:boolean = false


  constructor(
    private auth: UserAuthService, 
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show()
   

    // Simulate data loading
    setTimeout(() => {
      this.isLoading = false;
      this.spinner.hide();
    }, 2000);
  }

   loggedIn(): boolean {
    return this.auth.loggedIn();
  }

  logout(): void {
    this.auth.logoutUser();
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  getRouteAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}