import Customer from '../models/customer';
import Employee from '../models/employee';

export default class FakeData {
  static getCustomers() {
    return [
      new Customer('Steven Black', 12345678),
      new Customer('Martha Stuart', 34215673)
    ];
  }

  static getEmployees() {
    return [
      new Employee('John Doe', '10-08-2000', '$1000'),
      new Employee('Mary Jane','01-11-2012', '$800'),
      new Employee('Michael Stuart', '03-08-2015', '$700')
    ]
  }
}