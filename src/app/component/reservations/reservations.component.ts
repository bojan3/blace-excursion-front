import { Component, OnInit } from '@angular/core';
import { ReservationDTO } from 'src/app/entity/ReservationDTO';
import { UserService } from 'src/app/service';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: ReservationDTO[] = [];
  userId!: number;
  constructor(
    private clientService: ClientService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.clientService.getReservations().subscribe((reservatins) => (this.reservations = reservatins));
  }

}
