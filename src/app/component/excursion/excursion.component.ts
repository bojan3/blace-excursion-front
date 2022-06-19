import { Component, Input, OnInit } from '@angular/core';
import { ExcursionDTO } from 'src/app/entity/ExcursionDTO';

@Component({
  selector: 'app-excursion',
  templateUrl: './excursion.component.html',
  styleUrls: ['./excursion.component.css']
})
export class ExcursionComponent implements OnInit {

  @Input()
  excursion!: ExcursionDTO;

  constructor() { }

  ngOnInit(): void {
    console.log(this.excursion);
  }

}
