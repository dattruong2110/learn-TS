// Typescript Function

const square = (side: number) => side * side
console.log(square(3));

let greet: Function

greet = () => {
    console.log('This is function type');
}
greet();

const add = (a: number, b: number, c?: number | string) => { // ? (Optional) tham số không bắt buộc
    console.log(a + b);
    console.log(c);
};

add(4, 3, 7);
add(10, 11, 'Dat Truong');
add(7, 7);

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log('result:', a + b);
    console.log(c);
}

addDefault(3, 7);
addDefault(10, 11, 'Dat Truong');

const minus = (a: number, b: number): number => a - b;
console.log(minus(10, 3));

function mutiple(a: number, b: number) {
    return a * b;
}

console.log(mutiple(9, 9));

function mutipleAndAdd(a: number, b: number, c: number): number {
    return a + c * b;
}

console.log(mutipleAndAdd(2, 3, 2));