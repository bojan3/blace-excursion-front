import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateExcursionDTO } from '../entity/CreateExcursionDTO';
import { ExcursionDTO } from '../entity/ExcursionDTO';
import { PastExcursionDTO } from '../entity/PastExcursionDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TourguideService {

  constructor(
    private apiService: ApiService
  ) { }

  createExcursion(createExcursionDTO: CreateExcursionDTO):  Observable<boolean>{
    return this.apiService.post('http://localhost:9080/api/tourguide/', JSON.stringify(createExcursionDTO));
  }

  getTourGuidePastExcursions(): Observable<PastExcursionDTO[]>{
    return this.apiService.get('http://localhost:9080/api/tourguide/pastExcursions');
  }

  getExcursionsTourGuide(): Observable<ExcursionDTO[]>{
    return this.apiService.get('http://localhost:9080/api/tourguide/excursions');
  }

  cancelExcursion(excursionId : number):  Observable<boolean>{
    return this.apiService.get('http://localhost:9080/api/tourguide/cancel/' + excursionId);
  }
}
