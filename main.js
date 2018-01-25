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
var tbodyEmployees = document.querySelector('#tbodyEmployees');
var tbodyCustomers = document.querySelector('#tbodyCustomers');
var newName = document.querySelector('#addName');
var newContract = document.querySelector('#addContract');
var Person = /** @class */ (function () {
    function Person(_name) {
        this._name = _name;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, _hireDate, _salary) {
        var _this = _super.call(this, name) || this;
        _this._hireDate = _hireDate;
        _this._salary = _salary;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "hireDate", {
        get: function () {
            return this._hireDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}(Person));
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(name, _contractNr) {
        var _this = _super.call(this, name) || this;
        _this._contractNr = _contractNr;
        return _this;
    }
    Object.defineProperty(Customer.prototype, "contractNr", {
        get: function () {
            return this._contractNr;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}(Person));
var employeeArr = [
    new Employee('John Doe', '10-08-2000', '$1000'),
    new Employee('Mary Jane', '01-11-2012', '$800'),
    new Employee('Michael Stuart', '03-08-2015', '$700')
];
var customerArr = [
    new Customer('Steven Black', 12345678),
    new Customer('Martha Stuart', 34215673)
];
var deleteEmployee = function (index) {
    if ((employeeArr.length) !== 1) {
        employeeArr.splice(index, 1);
        markupEmployees();
    }
};
var addCustomer = function () {
    var name = newName.value;
    var contract = newContract.value;
    if (name !== '' && contract !== '') {
        customerArr.push(new Customer(name, +contract));
        newName.value = '';
        newContract.value = '';
        markupCustomers();
    }
};
var markupEmployees = function () { return tbodyEmployees.innerHTML = "\n  " + employeeArr.map(function (employee, index) { return "\n    <tr>\n      <td>" + employee.name + "</td>\n      <td>" + employee.hireDate + "</td>\n      <td>" + employee.salary + "</td>\n      <td><button class=\"btn btn-flat danger\" onClick=\"deleteEmployee(" + index + ")\">Delete</button></td>\n    </tr>\n  "; }).join('') + "\n"; };
var markupCustomers = function () { return tbodyCustomers.innerHTML = "\n  " + customerArr.map(function (customer, index) { return "\n    <tr>\n      <td>" + customer.name + "</td>\n      <td>" + customer.contractNr + "</td>\n    </tr>\n  "; }).join('') + "\n"; };
markupEmployees();
markupCustomers();
