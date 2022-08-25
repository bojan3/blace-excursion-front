import { Component, Input, OnInit } from '@angular/core';
import { TourGuideDTO } from 'src/app/entity/TourGuideDTO';

@Component({
  selector: 'app-tourguide',
  templateUrl: './tourguide.component.html',
  styleUrls: ['./tourguide.component.css']
})
export class TourguideComponent implements OnInit {

  @Input()
  tourguide!: TourGuideDTO;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTourGuide(){
    // TO DO
  }
}
