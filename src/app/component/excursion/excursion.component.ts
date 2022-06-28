import { Component, Input, OnInit } from '@angular/core';
import { ExcursionDTO } from 'src/app/entity/ExcursionDTO';
import { UserService } from 'src/app/service';
import { ClientService } from 'src/app/service/client.service';

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
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.userService.getMyInfo().subscribe();
  }
  createReservation(){
    this.clientService.createReservation(this.excursion).subscribe();
  }

  isUserTourGuide(): boolean{
    return (!!this.userService.currentUser) && this.userService.currentUser.role == 'ROLE_CLIENT';
  }
}
