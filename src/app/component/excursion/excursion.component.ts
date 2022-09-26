import { Component, Input, OnInit } from '@angular/core';
import { ExcursionDTO } from 'src/app/entity/ExcursionDTO';
import { UserService } from 'src/app/service';
import { ClientService } from 'src/app/service/client.service';
import { TourguideService } from 'src/app/service/tourguide.service';

@Component({
  selector: 'app-excursion',
  templateUrl: './excursion.component.html',
  styleUrls: ['./excursion.component.css']
})
export class ExcursionComponent implements OnInit {

  @Input()
  excursion!: ExcursionDTO;

  constructor(
    private clientService: ClientService,
    private userService: UserService,
    private tourguideService: TourguideService
    ) { }

  ngOnInit(): void {
    this.userService.getMyInfo().subscribe();
  }
  createReservation(){
    this.clientService.createReservation(this.excursion).subscribe();
  }

  isUserTourGuide(): boolean{
    return (!!this.userService.currentUser) && this.userService.getUserRole() == 'ROLE_TOURGUIDE';
  }

  isUserClient(): boolean{
    return (!!this.userService.currentUser) && this.userService.getUserRole() == 'ROLE_CLIENT';
  }

  cancel(){
    this.tourguideService.cancelExcursion(this.excursion.id).subscribe( ()  => {
      window.location.reload();
    });
  }

}
