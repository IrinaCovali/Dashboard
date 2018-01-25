import { Person } from './person';

// Setting up Employee Class
export class Employee extends Person {
  constructor(name: string, private _hireDate: string, private _salary: string) {
    super(name);
  }

  get hireDate(): string {
    return this._hireDate;
  }

  get salary(): string {
    return this._salary;
  }
}
