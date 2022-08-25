import { Component, OnInit } from '@angular/core';
import { VehicleDTO } from 'src/app/entity/VehicleDTO';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: VehicleDTO[] = [];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getVehicles().subscribe((vehicles) => (this.vehicles = vehicles));
  }
  
}
