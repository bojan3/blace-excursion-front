import { Component, Input, OnInit } from '@angular/core';
import { ExcursionDTO } from 'src/app/entity/ExcursionDTO';
import { ExcursionService } from 'src/app/service/excursion.service';
import { TourguideService } from 'src/app/service/tourguide.service';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

  @Input()
  forTourGuide: boolean = false;
  excursions: ExcursionDTO[] = [];

  constructor(
    private excursionService: ExcursionService,
    private toutguideService: TourguideService
  ) { }

  ngOnInit(): void {
    if (this.forTourGuide){
      this.toutguideService.getExcursionsTourGuide().subscribe((excursions) => (
        this.excursions = excursions ))
      }
    else{
    this.excursionService.getExcursions().subscribe((excursions) => {
      this.excursions = excursions;
      console.log(excursions);
    }
      );
  }
  }
}
