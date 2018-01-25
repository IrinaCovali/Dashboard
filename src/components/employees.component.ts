import Employee from '../models/employee' 
import FakeData from '../data/index';

// Accessing DOM Elements
const tbodyEmployees = document.querySelector('#tbodyEmployees');
const noEmployees = document.querySelector('#noEmployees');

// Setting up Employees class
export default class EmployeesComponent {
  
  // Accessing fake employees array
  private employeeArr: Employee[];

  constructor() {
    this.employeeArr = FakeData.getEmployees();

    this.setEventListener();
  }

  // Creating HTML markup for Employees
  render() :string {
    if(!tbodyEmployees) {
      noEmployees.innerHTML = 'Something went wrong';
      return;
    }

    return tbodyEmployees.innerHTML = `
      ${this.employeeArr.map((employee, index) => `
        <tr>
          <td>${employee.name}</td>
          <td>${employee.hireDate}</td>
          <td>${employee.salary}</td>
          <td><button class="btn btn-flat danger" id="${index}">Delete</button></td>
        </tr>
      `).join('')}
    `;
  }

  // Deleting Employee function
  deleteEmployee(index): void {
    if((this.employeeArr.length) !== 1) {
      this.employeeArr.splice(index, 1);
      this.render();
    }
  }

  setEventListener() {
    if(!tbodyEmployees) {
      noEmployees.innerHTML = 'Something went wrong';
      return;
    }

    // Listen for deleteEmployee button click
    tbodyEmployees.addEventListener('click', event => {
      if((<HTMLElement>event.target).nodeName === 'BUTTON') {
        this.deleteEmployee(+(<HTMLElement>event.target).id);
      }
    });
  }
}