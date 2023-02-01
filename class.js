"use strict";
exports.__esModule = true;
exports.Employee = void 0;
// Class
var Employee = /** @class */ (function () {
    // public name: string // public => thuộc tính name có thể được truy cập hoặc thay đổi value từ bên ngoài class Employee
    // private age: number // private => thuộc tính age không thể được truy cập hoặc thay đổi value từ bên ngoài class Employee
    // readonly male: boolean // readonly => hoàn hoàn có thể truy cập được thuộc tính male từ bên ngoài class Employee nhưng không thể thay đổi value của male
    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.male = m;
    // }
    function Employee(name, age, male) {
        this.name = name;
        this.age = age;
        this.male = male;
    }
    Employee.prototype.print = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Gender Male: ").concat(this.male);
    };
    return Employee;
}());
exports.Employee = Employee;
var dat = new Employee('Dat', 22, true);
// console.log(dat.name);
// console.log(dat.age);
// console.log(dat.male);
// dat.name = 'Dat';
// dat.male = false;
// console.log(dat);
console.log(dat.print());
var nhut = new Employee('Nhut', 22, true);
var employees = [];
employees.push(dat);
employees.push(nhut);
employees.forEach(function (employee) { return console.log(employee.name, employee.male, employee.print()); });
