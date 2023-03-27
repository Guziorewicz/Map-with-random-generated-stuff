// import faker for generate random data 
import {faker} from '@faker-js/faker';
// import intreface for check that class is correct for using
import { MarkerPoint } from './CustomMap';

// define a class for User with properties, export keyword used to get class in index.ts
// `implements` connecting classes so Typescript can make a comparison
export class User implements MarkerPoint {   
    name: string;
    location : {
        lat: number;
        lng: number;
    };

    // define constructor uses faker 
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()), // used parseFloat function beacouse faker provides lat and lng as strings 
            lng: parseFloat(faker.address.longitude())
        } 
    }
    // Add method that returning the properties
    makeContent() : string {
        return `<div><h5>${this.name}</h5></div>`;
    }
}

