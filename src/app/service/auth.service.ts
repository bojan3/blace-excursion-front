import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenName: string = "jwt";

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    private router: Router
  ) { }

  login(user: any) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = {
      'username': user.username,
      'password': user.password
    };

    return this.apiService.post("http://localhost:9080/auth/login", JSON.stringify(body), loginHeaders)
      .pipe(map((res) => {
        console.log('Login success');
        localStorage.setItem(this.tokenName, res.body.accessToken);
      }));
  }

  signup(user: any) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.apiService.post("http://localhost:9080/auth/signup", JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
    this.userService.currentUser = null;
    localStorage.removeItem(this.tokenName);
    this.router.navigate(['/login']);
  }

  tokenIsPresent() {
    var token = localStorage.getItem(this.tokenName);
    return token != undefined && token != null;
  }

  getToken() {
    return localStorage.getItem(this.tokenName)
  }
}
