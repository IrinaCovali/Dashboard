import Customer from '../models/customer';
import FakeData from '../data/index';

// Accessing DOM Elements
const newName: HTMLInputElement = document.querySelector('#addName');
const newContract: HTMLInputElement = document.querySelector('#addContract');
const tbodyCustomers = document.querySelector('#tbodyCustomers');
const addCustomerBtn = document.querySelector('#addCustomerBtn');
const noCustomers = document.querySelector('#noCustomers');

// Setting up Customers class
export default class CustomersComponent {
  private customerArr: Customer[];

  constructor() {
    // Accessing fake customers array
    this.customerArr = FakeData.getCustomers();

    this.setEventListener()
  }

  // Creating HTML markup for Customers
  render(): string {
    if(!tbodyCustomers) {
      noCustomers.innerHTML = 'Something went wrong';
      return;
    }

    return tbodyCustomers.innerHTML = `
    ${this.customerArr.map((customer, index) => `
      <tr>
        <td>${customer.name}</td>
        <td>${customer.contractNr}</td>
      </tr>
    `).join('')}
  `;
  }
  
  // Adding new Customer to the array
  addCustomer(): void {
    let name = newName.value;
    let contract = newContract.value;

    if(name == '' && contract == '') return;

    this.customerArr.push(new Customer(name, +contract));
    newName.value = '';
    newContract.value = '';
    this.render();
  }

  setEventListener() {
    if(!tbodyCustomers) {
      noCustomers.innerHTML = 'Something went wrong';
      return;
    }

    // Listen for addNewCustomer button click
    addCustomerBtn.addEventListener('click', () => this.addCustomer());
  }
}

