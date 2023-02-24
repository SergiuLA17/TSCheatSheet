import {faker} from "@faker-js/faker";


export class User{
    private readonly name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    get getName(): string {
        return this.name;
    }


}