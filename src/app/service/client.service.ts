import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.apiService.get('http://localhost:9080/api/client/reservation');
  }

  cancelReservation(reservationId: PastExcursionKey){
    return this.apiService.put('http://localhost:9080/api/client/reservation/cancel/' + reservationId.excursionId, JSON.stringify('blank'));
  }

  getPastExcursions(): Observable<PastExcursionDTO[]>{
    return this.apiService.get('http://localhost:9080/api/client/pastExcursion');
  }
}
