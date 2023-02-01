let names = ['Dat Huynh', 'Nhut', 'Kiet', 'Duy'];
names.push('Dat Truong');
// names là array kiểu string nên không thể push kiểu dự liệu khác vào được.
// names.push(5);
// names.push(true);

console.log(names);

let numbers = [1, 2, 3];
numbers.push(4);
numbers[3] = 10;
// numbers là array kiểu number nên không thể push kiểu dự liệu khác vào được.
// numbers.push('Dat Truong');
// numbers[2] = 'Dat';

console.log(numbers);

let mixed = [21, 'Dat Truong', true];
mixed.push(7);
mixed.push('Dat');
mixed[3] = false;

console.log(mixed);

let person = {
    name: 'Dat Truong',
    age: 22,
    isStudent: false
};

// person.name = 21
person.name = 'Truong Tan Dat';

// person.age = 'Dat';
person.age = 28;

// không thể add thêm thuộc tính khác vào object bằng cách .hobbies được.
// person.hobbies = ['football'];

person = {
    name: 'My Duyen Huynh',
    age: 18,
    isStudent: true,
    // skills: ['sleep'] không add thêm skills được vì Object cha không có thuộc tính này. 
};

console.log(person);