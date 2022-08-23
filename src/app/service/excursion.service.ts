import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentDTO } from '../entity/CommentDTO';
import { CreateCommentDTO } from '../entity/CreateCommentDTO';
import { CreateExcursionDTO } from '../entity/CreateExcursionDTO';
import { ExcursionDTO } from '../entity/ExcursionDTO';
import { LocationDTO } from '../entity/LocationDTO';
import { PastExcursionDTO } from '../entity/PastExcursionDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ExcursionService {

  constructor(
    private apiService: ApiService
    ) { }

    getExcursions(type?: string, order?: string): Observable<ExcursionDTO[]>{
      if (type && order)
        return this.apiService.get(environment.apiUrl + 'excursion/', {type: type, order: order});
      return this.apiService.get(environment.apiUrl + 'excursion');
    }

    getComments(excursionId:number): Observable<CommentDTO[]>{
      return this.apiService.get(environment.apiUrl + 'excursion/comments/' + excursionId);
    }

    getLocations(): Observable<LocationDTO[]>{
      return this.apiService.get(environment.apiUrl + 'excursion/locations');
    }

}
