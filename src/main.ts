import EmployeesComponent from './components/employees.component';
import CustomersComponent from './components/customers.component';

// Calling initial markup
const employees = new EmployeesComponent();
employees.render();

const customers = new CustomersComponent();
customers.render();
