// Accessing DOM Elements
let tbodyEmployees = document.querySelector('#tbodyEmployees');
let tbodyCustomers = document.querySelector('#tbodyCustomers');
let newName: HTMLInputElement  = document.querySelector('#addName');
let newContract: HTMLInputElement = document.querySelector('#addContract');

// Setting up Classes
class Person {
  constructor(private _name: string) {}

  get name(): string {
    return this._name
  }
}

class Employee extends Person {
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

class Customer extends Person {
  constructor(name: string, private _contractNr: number) {
    super(name);
  }

  get contractNr(): number {
    return this._contractNr;
  }

}

// Creating arrays for Employees And Customers
let employeeArr = [
  new Employee('John Doe', '10-08-2000', '$1000'),
  new Employee('Mary Jane','01-11-2012', '$800'),
  new Employee('Michael Stuart', '03-08-2015', '$700')
];

let customerArr = [
  new Customer('Steven Black', 12345678),
  new Customer('Martha Stuart', 34215673)
];

// Creating HTML markups for Employees And Customers
const markupEmployees = () :string => tbodyEmployees.innerHTML = `
  ${employeeArr.map((employee, index) => `
    <tr>
      <td>${employee.name}</td>
      <td>${employee.hireDate}</td>
      <td>${employee.salary}</td>
      <td><button class="btn btn-flat danger" onClick="deleteEmployee(${index})">Delete</button></td>
    </tr>
  `).join('')}
`;

const markupCustomers = () :string => tbodyCustomers.innerHTML = `
  ${customerArr.map((customer, index) => `
    <tr>
      <td>${customer.name}</td>
      <td>${customer.contractNr}</td>
    </tr>
  `).join('')}
`;

// Deleting Employee function
const deleteEmployee = (index): void => {
  if((employeeArr.length) !== 1) {
    employeeArr.splice(index, 1);
    markupEmployees();
  }
}

// Adding Customer function
const addCustomer = (): void => {
  let name = newName.value;
  let contract = newContract.value;
  if(name !== '' && contract !== '') {
    customerArr.push(new Customer(name, +contract));
    newName.value = '';
    newContract.value = '';
    markupCustomers();
  }
}

// Calling initial markup
markupEmployees();
markupCustomers();