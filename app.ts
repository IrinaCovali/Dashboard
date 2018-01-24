let tbodyE = document.querySelector('.tbodyE');
let tbodyC = document.querySelector('.tbodyC');
let newName: HTMLInputElement  = document.querySelector('.addName');
let newContract: HTMLInputElement = document.querySelector('.addContract');

class Person {
  constructor(private name: string) {}

  getName(): string {
    return this.name
  }
}

class Employee extends Person {
  constructor(name: string, private hireDate: number, private salary: number) {
    super(name);
  }

  getHireDate(): number {
    return this.hireDate;
  }

  getSalary(): number {
    return this.salary;
  }
}

class Customer extends Person {
  constructor(name: string, private contractNr: number) {
    super(name);
  }

  getcontractNr(): number {
    return this.contractNr;
  }

}

let employeeArr = [
  new Employee('Max', 10, 1000),
  new Employee('John', 20, 2000),
  new Employee('Jane', 30, 3000)
];

let customerArr = [
  new Customer('Steve', 1000000),
  new Customer('Martha', 2000000)
];

const deleteEmployee = (index): void => {
  if((employeeArr.length - 1) != index) {
    employeeArr.splice(index, 1);
    markupE();
  }
}

const addCustomer = (): void => {
  let name = newName.value;
  let contract = newContract.value;
  if(name !== '' && contract !== '') {
    customerArr.push(new Customer(name, +contract));
    newName.value = '';
    newContract.value = '';
    markupC();
  }
}

const markupE = () :string => tbodyE.innerHTML = `
  ${employeeArr.map((employee, index) => `
    <tr>
      <td>${employee.getName()}</td>
      <td>${employee.getHireDate()}</td>
      <td>${employee.getSalary()}</td>
      <td><button onClick="deleteEmployee(${index})">Delete</button></td>
    </tr>
  `).join('')}
`;

const markupC = () :string => tbodyC.innerHTML = `
  ${customerArr.map((customer, index) => `
    <tr>
      <td>${customer.getName()}</td>
      <td>${customer.getcontractNr()}</td>
    </tr>
  `).join('')}
`;

 markupE();
 markupC();
