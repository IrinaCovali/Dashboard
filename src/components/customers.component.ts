import Customer from '../models/customer';
import FakeData from '../data/index';

// Accessing DOM Elements
const newName: HTMLInputElement = document.querySelector('#addName');
const newContract: HTMLInputElement = document.querySelector('#addContract');
const tbodyCustomers = document.querySelector('#tbodyCustomers');
const addCustomerBtn = document.querySelector('#addCustomerBtn');

// Accessing fake customers array
const customerArr = FakeData.getCustomers();

// Creating HTML markup for Customers
const renderMarkup = (): string => {
  return tbodyCustomers.innerHTML = `
  ${customerArr.map((customer, index) => `
    <tr>
      <td>${customer.name}</td>
      <td>${customer.contractNr}</td>
    </tr>
  `).join('')}
`;
}

// Setting up Customers class
export default class CustomersComponent {
  constructor() {
    // Listen for addNewCustomer button click
    addCustomerBtn.addEventListener('click', this.addCustomer);
  }

  render(): string {
    return renderMarkup();
  }
  
  // Adding new Customer to the array
  addCustomer(): void {
    let name = newName.value;
    let contract = newContract.value;
    if(name !== '' && contract !== '') {
      customerArr.push(new Customer(name, +contract));
      newName.value = '';
      newContract.value = '';
      renderMarkup();
    }
  }
}

