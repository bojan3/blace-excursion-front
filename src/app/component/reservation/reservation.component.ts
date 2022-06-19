import { Component, Input, OnInit } from '@angular/core';
import { ReservationDTO } from 'src/app/entity/ReservationDTO';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @Input()
  reservation!: ReservationDTO;

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    console.log(this.reservation)
  }
  cancelReservation(){
    this.clientService.cancelReservation(this.reservation.id).subscribe();
  }
}
