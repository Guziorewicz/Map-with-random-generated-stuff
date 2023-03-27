// As same as User.ts
import {faker} from '@faker-js/faker';
import { MarkerPoint } from './CustomMap';

export class Company implements MarkerPoint {
    companyName: string;
    catchPhrase: string;
    location : {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()), 
            lng: parseFloat(faker.address.longitude())
        };
    }

    makeContent() : string {
        return `
        <div>
        <h4>${this.companyName}</h4>
        <h4>${this.catchPhrase}</h4>
        </div>`;
        }
}