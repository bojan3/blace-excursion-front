export class LocationDTO{

  id: number;
  name: string;
  description: string;
  canDelete: boolean;

  constructor(id: number, name: string, description: string, canDelete: boolean){
    this.id = id;
    this.name = name;
    this.description = description;
    this.canDelete = canDelete;
  }

}
