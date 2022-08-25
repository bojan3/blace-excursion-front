import { last } from "rxjs/operators";

export class TourGuideDTO{
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;

    constructor(
        id: number,
        username: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string
    ){
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}