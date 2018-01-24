var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var tbodyE = document.querySelector('.tbodyE');
var tbodyC = document.querySelector('.tbodyC');
var newName = document.querySelector('.addName');
var newContract = document.querySelector('.addContract');
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, hireDate, salary) {
        var _this = _super.call(this, name) || this;
        _this.hireDate = hireDate;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getHireDate = function () {
        return this.hireDate;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}(Person));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, contractNr) {
        var _this = _super.call(this, name) || this;
        _this.contractNr = contractNr;
        return _this;
    }
    Customer.prototype.getcontractNr = function () {
        return this.contractNr;
    };
    return Customer;
}(Person));
var employeeArr = [
    new Employee('Max', 10, 1000),
    new Employee('John', 20, 2000),
    new Employee('Jane', 30, 3000)
];
var customerArr = [
    new Customer('Steve', 1000000),
    new Customer('Martha', 2000000)
];
var deleteEmployee = function (index) {
    if ((employeeArr.length - 1) != index) {
        employeeArr.splice(index, 1);
        markupE();
    }
};
var addCustomer = function () {
    var name = newName.value;
    var contract = newContract.value;
    if (name !== '' && contract !== '') {
        customerArr.push(new Customer(name, +contract));
        newName.value = '';
        newContract.value = '';
        markupC();
    }
};
var markupE = function () { return tbodyE.innerHTML = "\n  " + employeeArr.map(function (employee, index) { return "\n    <tr>\n      <td>" + employee.getName() + "</td>\n      <td>" + employee.getHireDate() + "</td>\n      <td>" + employee.getSalary() + "</td>\n      <td><button onClick=\"deleteEmployee(" + index + ")\">Delete</button></td>\n    </tr>\n  "; }).join('') + "\n"; };
var markupC = function () { return tbodyC.innerHTML = "\n  " + customerArr.map(function (customer, index) { return "\n    <tr>\n      <td>" + customer.getName() + "</td>\n      <td>" + customer.getcontractNr() + "</td>\n    </tr>\n  "; }).join('') + "\n"; };
markupE();
markupC();
