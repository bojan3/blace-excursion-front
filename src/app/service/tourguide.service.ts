import { Injectable } from '@angular/core';
import { create } from 'domain';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  createExcursion(createExcursionDTO: CreateExcursionDTO):  Observable<any>{
    return this.apiService.post(environment.apiUrl + 'tourguide/', JSON.stringify(createExcursionDTO));
  }

  getTourGuidePastExcursions(): Observable<PastExcursionDTO[]>{
    return this.apiService.get(environment.apiUrl + 'tourguide/pastExcursions');
  }

  getExcursionsTourGuide(): Observable<ExcursionDTO[]>{
    return this.apiService.get(environment.apiUrl + 'tourguide/excursions');
  }

  cancelExcursion(excursionId : number):  Observable<boolean>{
    return this.apiService.get(environment.apiUrl + 'tourguide/cancel/' + excursionId);
  }
}
