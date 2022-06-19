import { Component, OnInit } from '@angular/core';
import { ExcursionDTO } from 'src/app/entity/ExcursionDTO';
import { ExcursionService } from 'src/app/service/excursion.service';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

  excursions: ExcursionDTO[] = [];

  constructor(
    private excursionService: ExcursionService
  ) { }

  ngOnInit(): void {
    this.excursionService.getExcursions().subscribe((excursions) => {
      this.excursions = excursions;
      console.log(excursions);
    });
  }
}
