import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocationDTO } from '../entity/LocationDTO';
import { TourGuideDTO } from '../entity/TourGuideDTO';
import { VehicleDTO } from '../entity/VehicleDTO';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private apiService: ApiService
  ) { }

  getTourGuides(): Observable<TourGuideDTO[]> {
    return this.apiService.get(environment.apiUrl + 'admin/tourguides');
  }

  getLocations(): Observable<LocationDTO[]> {
    return this.apiService.get(environment.apiUrl + 'admin/locations');
  }

  getVehicles(): Observable<VehicleDTO[]> {
    return this.apiService.get(environment.apiUrl + 'admin/vehicles');
  }

}
