import { employeeArr } from './sample-data/employee-array';

// Accessing DOM Element
let tbodyEmployees = document.querySelector('#tbodyEmployees');


// Creating HTML markup for Employees
export const markupEmployees = () :string => tbodyEmployees.innerHTML = `
  ${employeeArr.map((employee, index) => `
    <tr>
      <td>${employee.name}</td>
      <td>${employee.hireDate}</td>
      <td>${employee.salary}</td>
      <td><button class="btn btn-flat danger" id="${index}">Delete</button></td>
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

// Listen for deleteEmployee button click
tbodyEmployees.addEventListener('click', event => {
  if((<HTMLElement>event.target).nodeName === 'BUTTON') {
    deleteEmployee(+(<HTMLElement>event.target).id);
  }
});
