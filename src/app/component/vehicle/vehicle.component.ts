import { Component, Input, OnInit } from '@angular/core';
import { VehicleDTO } from 'src/app/entity/VehicleDTO';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input()
  vehicle!: VehicleDTO;;

  constructor() { }

  ngOnInit(): void {
  }

  deleteVehicle(){
    //TO DO
  }

}
