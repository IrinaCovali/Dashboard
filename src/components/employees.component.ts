import { employeeArr } from '../sample-data/employee-array';

// Accessing DOM Element
const tbodyEmployees = document.querySelector('#tbodyEmployees');

// Setting up Employees class
export default class Employees {
  constructor() {
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
      ${employeeArr.map((employee, index) => `
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
    if((employeeArr.length) !== 1) {
      employeeArr.splice(index, 1);
      this.render();
    }
  }
}