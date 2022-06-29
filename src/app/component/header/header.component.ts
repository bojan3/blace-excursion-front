import { Component, OnInit } from '@angular/core';
import { AuthService, UserService } from 'src/app/service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  isUserLogged() {
    return !!this.userService.currentUser;
  }

  logout(){
    this.authService.logout();
  }

  isUserClient(): boolean{
    return (!!this.userService.currentUser) && this.userService.getUserRole() == 'ROLE_CLIENT';
  }

  isUserTourGuide(): boolean{
    return (!!this.userService.currentUser) && this.userService.getUserRole() == 'ROLE_TOURGUIDE';
  }

  isUserAdmin(): boolean{
    return (!!this.userService.currentUser) && this.userService.getUserRole() == 'ROLE_ADMIN';
  }

}
