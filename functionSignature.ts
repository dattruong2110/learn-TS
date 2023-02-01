// Function Signature
// let greet: Function;
// greet = () => {console.log('Hello World!')}

let greet: (a: string, b: string) => void; // chữ kí của function
greet = (name: string, greeting: string) => {console.log(`${name} say ${greeting}`)}; // tạo ra hàm này như thế nào và hàm này sẽ làm những việc gì
greet('Dat Truong', 'hello'); // gọi hàm

let calculate: (a: number, b: number, c: string) => number;
calculate = (numOne: number, numTwo: number, action: string) => action === 'add' ? numOne + numTwo : numOne - numTwo;
console.log(calculate(7, 3, 'add'));

type Student = { name: string, age: number };
let printStudent: (student: Student) => void
printStudent = ({ name, age }: Student) => {
    console.log(`${name} is ${age} years old`);
}
printStudent({ name: 'Dat', age: 22 });

const dat = {
    name: 'Dat Truong',
    age: 22
}

printStudent(dat);