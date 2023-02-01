// start syntax is "tsc.cmd index.ts" "ts-node.cmd index.ts" "tsc.cmd -w index"

// const myName: string = 'Dat Truong';
// console.log('Hi my name is', myName);

// console.log('Hello');

// const number: number = 8;

// if (number % 2 == 0) {
//     console.log('This is even number');
// } else {
//     console.log('This is odd number');
// }

// Generics
// Generics giống tham số nhưng nó cho biết trước tham số nó thuộc kiểu gì
type strArr = Array<string>
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1];

const l1 = last([1, 2, 3]);
// console.log(l1);
// const l2 = last(['a', 'b']);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const l3 = lastT([1, 2, 3]);
const l4 = lastT(['a', 'b']);
const l5 = lastT<string>(['c', 'd']);

const makeArray = (x: number) => [x];

const m = makeArray(7);
// console.log(m);
// const m2 = makeArray('a');

const makeArrayT = <T>(x: T) => [x];

const m3 = makeArrayT(4);
const m4 = makeArrayT('a');

const makeArrayXY = <X, Y>(x: X, y: Y) => [x, y];
const m5 = makeArrayXY(5, 6);
const m6 = makeArrayXY('a', 'b');
const m7 = makeArrayXY('a', 7);

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y];
const m8 = makeTuple('x', 10);
const m9 = makeTuple('a', 'x');
const m10 = makeTuple<string, number>('D', 22);
const m11 = makeTuple<string | null, number>(null, 10);

const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];
const m12 = makeTupleWithDefault<string | null>('a', 21);

// Generics Extends
const makeFullName = obj => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
});

const makeFullNameConstraint = (obj: {firstName: string, lastName: string}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
});

const n1 = makeFullNameConstraint({firstName: 'Dat', lastName: 'Truong'});
// const n1 = makeFullNameConstraint({firstName: 'Dat', lastName: 'Truong', age: 22});

const makeFullNameConstraintWithGeneric = <T 
    extends {firstName: string, lastName: string}
>(
    obj: T
) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
});

const n3 = makeFullNameConstraintWithGeneric({firstName: 'Dat', lastName: 'Truong', age: 22, gender: 'male'});

const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}

const empOne = addNewEmployee({name: 'Dat', age: 22});
// console.log(empOne);
// console.log(empOne.name);

const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
} 

const empTwo = addNewEmployeeT({name: 'Dat', age: 22, male: true});
// console.log(empTwo);
// console.log(empTwo.name);

const addNewEmployeeTWithConstraint = <T extends {name: string}>(employee: T) => {
    const uid = Math.floor(Math.random() * 100);
    return {
        ...employee,
        uid
    }
}

const empThree = addNewEmployeeTWithConstraint({name: 'Dat', age: 22, male: true});
// const empThree = addNewEmployeeTWithConstraint({age: 22, male: true});

// Generics in Interface

interface Resource<T> {
    uid: number,
    name: string,
    data: T
}

type NumberResource = Resource<number[]>

const numbers: NumberResource = {
    uid: 2,
    name: 'Numbers',
    data: [1, 2, 3]
}

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'Person',
    data: 'Hello'
}

const resourceTwo: Resource<object> = {
    uid: 1,
    name: 'Movie',
    data: {name: 'Avenger'}
}

const resourceThree: Resource<string[]> = {
    uid: 1,
    name: 'Developer',
    data: ['ReactJS', 'Typescript']
}