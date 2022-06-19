import { Component, Input, OnInit } from '@angular/core';
import { PastExcursionDTO } from 'src/app/entity/PastExcursionDTO';

@Component({
  selector: 'app-past-excursion',
  templateUrl: './past-excursion.component.html',
  styleUrls: ['./past-excursion.component.css']
})
export class PastExcursionComponent implements OnInit {

  @Input()
  pastExcursion!: PastExcursionDTO;

  constructor() { }

  ngOnInit(): void {
  }

}
