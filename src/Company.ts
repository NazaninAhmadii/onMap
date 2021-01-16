import faker, { fake } from 'faker';

export class Company {
  companyName: string;
  catchPharese: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPharese = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}