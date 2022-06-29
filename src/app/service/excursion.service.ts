import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    getExcursions(): Observable<ExcursionDTO[]>{
      return this.apiService.get('http://localhost:9080/api/excursion');
    }

    getComments(excursionId:number): Observable<CommentDTO[]>{
      return this.apiService.get('http://localhost:9080/api/excursion/comments/' + excursionId);
    }

    getLocations():  Observable<LocationDTO[]>{
      return this.apiService.get('http://localhost:9080/api/excursion/locations');
    }

}
