import Employee from '../models/employee' 
import FakeData from '../data/index';

// Accessing DOM Element
const tbodyEmployees = document.querySelector('#tbodyEmployees');

// Setting up Employees class
export default class EmployeesComponent {
  
  // Accessing fake employees array
  private employeeArr: Employee[];

  constructor() {
    this.employeeArr = FakeData.getEmployees();

    // Listen for deleteEmployee button click
    tbodyEmployees.addEventListener('click', event => {
      if((<HTMLElement>event.target).nodeName === 'BUTTON') {
        this.deleteEmployee(+(<HTMLElement>event.target).id);
      }
    });
  }

  // Creating HTML markup for Employees
  render() :string {
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
}