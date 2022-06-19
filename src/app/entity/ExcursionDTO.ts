import { LocationDTO } from "./LocationDTO";

export class ExcursionDTO{

  id: number;
  date: Date;
  maxNumberOfPersons: number;
  numberOfPerosns: number;
  price: number;
  tourGuideName: string;
  locationDTO: LocationDTO;

  constructor(
    id: number,
    date: Date,
    maxNumberOfPersons: number,
    numberOfPerosns: number,
    price: number,
    tourGuideName: string,
    locationDTO: LocationDTO
  ){
    this.id = id;
    this.date = date;
    this.maxNumberOfPersons = maxNumberOfPersons;
    this.numberOfPerosns = numberOfPerosns;
    this.price = price;
    this.tourGuideName = tourGuideName;
    this.locationDTO = locationDTO;
  }

}
