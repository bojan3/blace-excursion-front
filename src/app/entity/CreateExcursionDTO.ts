export class CreateExcursionDTO{

  date: Date;
  maxNumberOfPersons: number;
  price: number;
  locationId: number;

  constructor(date: Date, maxNumberOfPersons: number, price: number, locationId: number){
    this.date = date;
    this.maxNumberOfPersons = maxNumberOfPersons;
    this.price = price;
    this.locationId = locationId;
  }

}
