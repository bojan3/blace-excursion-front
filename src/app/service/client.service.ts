import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExcursionDTO } from '../entity/ExcursionDTO';
import { PastExcursionDTO } from '../entity/PastExcursionDTO';
import { PastExcursionKey } from '../entity/PastExcursionKey';
import { ReservationDTO } from '../entity/ReservationDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private apiService: ApiService
  ) { }

  getReservations(): Observable<ReservationDTO[]> {
    return this.apiService.get(environment.apiUrl + 'client/reservation');
  }

  cancelReservation(reservationId: PastExcursionKey){
    return this.apiService.get(environment.apiUrl + 'client/reservation/cancel/' + reservationId.excursionId);
  }

  getPastExcursions(): Observable<PastExcursionDTO[]>{
    return this.apiService.get(environment.apiUrl + 'client/pastExcursion');
  }

  createReservation(excursionDTO: ExcursionDTO): Observable<boolean>{
    return this.apiService.post(environment.apiUrl + 'client/createReservatin', JSON.stringify(excursionDTO));
  }
}
