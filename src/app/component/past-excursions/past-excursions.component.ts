import { Component, OnInit } from '@angular/core';
import { PastExcursionDTO } from 'src/app/entity/PastExcursionDTO';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-past-excursions',
  templateUrl: './past-excursions.component.html',
  styleUrls: ['./past-excursions.component.css']
})
export class PastExcursionsComponent implements OnInit {

  pastExcursions: PastExcursionDTO[] = [];

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.clientService.getPastExcursions().subscribe((pastExcursions) => (this.pastExcursions = pastExcursions));
  }

}
