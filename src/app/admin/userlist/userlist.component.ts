import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/Servies/admin/authservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  Userslist: any[] = [];

  constructor(private auth: AuthserviceService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.auth.Userlist().subscribe(
      (response) => {
        console.log("userlist in front end", response);
        if (response.status) {
          this.Userslist = response.data;
        } else {
          console.error('Error fetching user list:', response.message);
        }
      },
      (error) => {
        console.error('Error fetching user list:', error);
      }
    );
  }

  blockUser(userId: string) {
    this.auth.blockUser(userId).subscribe(
      (response) => {
        console.log("User blocked successfully:", response);
        // Optionally update Userslist or handle success feedback
      },
      (error) => {
        console.error('Error blocking user:', error);
        // Handle error feedback
      }
    );
  }
  UnblockUser(userId: string) {
    this.auth.blockUser(userId).subscribe(
      (response) => {
        console.log("User blocked successfully:", response);
        // Optionally update Userslist or handle success feedback
      },
      (error) => {
        console.error('Error blocking user:', error);
        // Handle error feedback
      }
    );
  }
}