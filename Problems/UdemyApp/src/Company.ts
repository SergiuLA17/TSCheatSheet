import {faker} from "@faker-js/faker";


export class Company {
    readonly name: string;
    readonly catchPhrase: string;
    readonly location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}