import { Customer } from './models/customer';
import { customerArr } from './sample-data/customers-array';

// Accessing DOM Elements
let tbodyCustomers = document.querySelector('#tbodyCustomers');
let newName: HTMLInputElement  = document.querySelector('#addName');
let newContract: HTMLInputElement = document.querySelector('#addContract');
let addCustomerBtn = document.querySelector('#addCustomerBtn');

// Creating HTML markup for Customers
export const markupCustomers = () :string => tbodyCustomers.innerHTML = `
  ${customerArr.map((customer, index) => `
    <tr>
      <td>${customer.name}</td>
      <td>${customer.contractNr}</td>
    </tr>
  `).join('')}
`;

// Adding new Customer function
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

// Listen for addNewCustomer button click
addCustomerBtn.addEventListener('click', addCustomer);