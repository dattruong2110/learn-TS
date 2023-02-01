// Class
export class Employee {
    // public name: string // public => thuộc tính name có thể được truy cập hoặc thay đổi value từ bên ngoài class Employee
    // private age: number // private => thuộc tính age không thể được truy cập hoặc thay đổi value từ bên ngoài class Employee
    // readonly male: boolean // readonly => hoàn hoàn có thể truy cập được thuộc tính male từ bên ngoài class Employee nhưng không thể thay đổi value của male

    // constructor(n: string, a: number, m: boolean) {
    //     this.name = n;
    //     this.age = a;
    //     this.male = m;
    // }

    constructor(
        public name: string,
        private age: number,
        readonly male: boolean
    ) {}

    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }
}

const dat = new Employee('Dat', 22, true);
// console.log(dat.name);
// console.log(dat.age);
// console.log(dat.male);

// dat.name = 'Dat';
// dat.male = false;
// console.log(dat);

console.log(dat.print());

const nhut = new Employee('Nhut', 22, true);

let employees: Employee[] = [];
employees.push(dat);
employees.push(nhut);

employees.forEach(employee => console.log(employee.name, employee.male, employee.print()));