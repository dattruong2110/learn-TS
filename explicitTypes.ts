// Explicit Types 
let myName: string = 'Dat';
let age: number;
let isAuthenticated: boolean;

myName = 'Dat Truong';
// myName = 22;

age = 22;
// age = 'Dat';

isAuthenticated = false;
// isAuthenticated = 10

// Arrays
let students: string[] = ['Dat Truong', 'Dat Huynh'];

// students.push(5);
students.push('Nhut');

// Union
let mixed: (string | number | boolean)[]

mixed = ['Dat Truong', 22, true];
mixed.push(22);
mixed.push('Dat');
mixed.push(false);
// console.log(mixed);  

let id: string | number;
id = '1';
id = 1;

let hobby: 'book' | 'music';
hobby = 'book';
// hobby = 'play game';

// Object
let person: object;
person = {name: 'Dat Truong', age: 22};
person = []

let student: {
    name: string,
    age: number,
    isGood: boolean
}

student = {
    name: 'Dat Truong',
    age: 22,
    isGood: false
}