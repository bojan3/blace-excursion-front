import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  sortTypes: string[] = ['date', 'maxNumberOfPersons', 'price'];
  sortType!: string;
  orders: string[] = ['asc', 'desc'];
  order: string = 'asc';

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
    }
      );
  }
  }

  getSorted(){
    console.log(this.sortType)
    console.log(this.order)
    this.excursionService.getExcursions(this.sortType ,this.order).subscribe((excursions) => (
      this.excursions = excursions ));
  }
}
