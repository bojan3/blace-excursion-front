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
    if (localStorage.getItem('role') == 'ROLE_CLIENT')
      return true;
    return false;
  }

  isUserTourGuide(): boolean{
    if (localStorage.getItem('role') == 'ROLE_TOURGUIDE')
      return true;
    return false;
  }

  isUserAdmin(): boolean{
    if (localStorage.getItem('role') == 'ROLE_ADMIN')
      return true;
    return false;
  }
}
