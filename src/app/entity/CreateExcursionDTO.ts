export class CreateExcursionDTO{

  date: Date;
  maxNumberOfPersons: number;
  locationIds: number[];

  constructor(date: Date, maxNumberOfPersons: number, locationIds: number[]){
    this.date = date;
    this.maxNumberOfPersons = maxNumberOfPersons;
    this.locationIds = locationIds;
  }

}
