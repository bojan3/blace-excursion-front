import { Component, Input, OnInit } from '@angular/core';
import { LocationDTO } from 'src/app/entity/LocationDTO';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input()
  location!: LocationDTO; 

  constructor() { }

  ngOnInit(): void {
    
  }

  deleteLocation(){
    // TO DO
  }
}
