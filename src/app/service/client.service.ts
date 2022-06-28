import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.apiService.get('http://localhost:9080/api/client/reservation');
  }

  cancelReservation(reservationId: PastExcursionKey){
    return this.apiService.get('http://localhost:9080/api/client/reservation/cancel/' + reservationId.excursionId);
  }

  getPastExcursions(): Observable<PastExcursionDTO[]>{
    return this.apiService.get('http://localhost:9080/api/client/pastExcursion');
  }

  createReservation(excursionDTO: ExcursionDTO): Observable<boolean>{
    return this.apiService.post('http://localhost:9080/api/client/createReservatin', JSON.stringify(excursionDTO));
  }
}
