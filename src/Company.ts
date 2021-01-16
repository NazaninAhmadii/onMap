import faker from 'faker';
import { Mappable } from './CustomeMap';

export class Company implements Mappable {
  companyName: string;
  catchPharese: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'green';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPharese = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catchphrase: ${this.catchPharese}<h3>
    </div>
    `;
  }
}