import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  selectedOptions!: SelectionModel<MatListOption>;
  numOfPersons!: number;
  locationIds: string[] = [];
  message!: string;
  showMessage = true;

  constructor(
    private excursionService: ExcursionService,
    public dialog: MatDialog,
    private router: Router,
    private tourguideService: TourguideService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.excursionService.getLocations().subscribe((locations) => (this.locations = locations));
  }

  createExcursion(){
    const createExcursionDTO = new CreateExcursionDTO(this.date, this.numOfPersons, this.toNumber(this.locationIds));
    console.log(createExcursionDTO);
    this.tourguideService.createExcursion(createExcursionDTO).subscribe((message) => {
      if(message.body.succes)
        this.router.navigate(['']);
      this.message = message.body.text;
    });
  }

  toNumber(strings: string[]){
    let numbers: number[] = [];
    strings.forEach( (string) => numbers.push(Number(string)));
    return numbers;
  }


  onChangeLocations($event: any){
    if($event.checked)
      this.locationIds.push($event.source.value)
    else{
      this.locationIds.forEach( (id, index) => id == $event.source.value ? this.locationIds.splice(index) : {} );
    }
  }
}
