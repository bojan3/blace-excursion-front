import { Component, Input, OnInit } from '@angular/core';
import { ReservationDTO } from 'src/app/entity/ReservationDTO';
import { ClientService } from 'src/app/service/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @Input()
  reservation!: ReservationDTO;

  constructor(
    private router: Router,
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.reservation)
  }
  cancelReservation(){
    this.clientService.cancelReservation(this.reservation.id).subscribe(() =>
    (window.location.reload())
    );
  }
}
