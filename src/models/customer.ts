import Person from './person';

// Setting up Customer Class
export default class Customer extends Person {
  constructor(name: string, private _contractNr: number) {
    super(name);
  }

  get contractNr(): number {
    return this._contractNr;
  }

}