import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';
import { ReservationDTO } from '../entity/ReservationDTO';
import { Observable } from 'rxjs';
import { PastExcursionDTO } from '../entity/PastExcursionDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: any;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
  }

  getMyInfo() {
    return this.apiService.get('http://localhost:9080/api/whoami')
      .pipe(map(user => {
        this.currentUser = user;
        localStorage.setItem('role', user.roles[0]);
        return user;
      }));
  }

  getUserRole(): string {
    this.getMyInfo()
    return this.currentUser.roles[0];
  }

}
