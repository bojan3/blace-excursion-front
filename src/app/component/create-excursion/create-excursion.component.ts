import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { Router } from '@angular/router';
import { CreateCommentDTO } from 'src/app/entity/CreateCommentDTO';
import { CreateExcursionDTO } from 'src/app/entity/CreateExcursionDTO';
import { LocationDTO } from 'src/app/entity/LocationDTO';
import { ExcursionService } from 'src/app/service/excursion.service';
import { TourguideService } from 'src/app/service/tourguide.service';
import { PopupComponent } from '../popup/popup.component';



interface DisplayMessage {
  msgType: string;
  msgBody: string;
}

@Component({
  selector: 'app-create-excursion',
  templateUrl: './create-excursion.component.html',
  styleUrls: ['./create-excursion.component.css']
})
export class CreateExcursionComponent implements OnInit {

  locations: LocationDTO[] = [];
  date!: Date;
  selectedLocation!: number[];
  selectedOptions!: SelectionModel<MatListOption>;
  price!: number;
  numOfPersons!: number;
  notification!: DisplayMessage | undefined;

  constructor(
    private excursionService: ExcursionService,
    public dialog: MatDialog,
    private router: Router,
    private tourguideService: TourguideService
  ) { }

  ngOnInit(): void {
    this.excursionService.getLocations().subscribe((locations) => (this.locations = locations));
  }

  createExcursion(){
    const createExcursionDTO = new CreateExcursionDTO(this.date, this.numOfPersons, this.price, this.selectedLocation[0]);
    this.tourguideService.createExcursion(createExcursionDTO).subscribe((created) => {
      this.router.navigate(['']);
    },
    error => {
      this.dialog.open(PopupComponent);
    }

    );
  }
}
