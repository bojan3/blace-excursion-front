export class VehicleDTO{

    name: string;
    maxNumberOfPersons: number;
    canDelete: boolean;

    constructor(
        name: string,
        maxNumberOfPersons: number,
        canDelete: boolean
    ){
        this.name = name;
        this.maxNumberOfPersons = maxNumberOfPersons;
        this.canDelete = canDelete;
    }

}