// start syntax is "tsc.cmd index.ts" "ts-node.cmd index.ts" "tsc.cmd -w index"
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
// console.log(l1);
// const l2 = last(['a', 'b']);
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(['a', 'b']);
var l5 = lastT(['c', 'd']);
var makeArray = function (x) { return [x]; };
var m = makeArray(7);
// console.log(m);
// const m2 = makeArray('a');
var makeArrayT = function (x) { return [x]; };
var m3 = makeArrayT(4);
var m4 = makeArrayT('a');
var makeArrayXY = function (x, y) { return [x, y]; };
var m5 = makeArrayXY(5, 6);
var m6 = makeArrayXY('a', 'b');
var m7 = makeArrayXY('a', 7);
var makeTuple = function (x, y) { return [x, y]; };
var m8 = makeTuple('x', 10);
var m9 = makeTuple('a', 'x');
var m10 = makeTuple('D', 22);
var m11 = makeTuple(null, 10);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m12 = makeTupleWithDefault('a', 21);
// Generics Extends
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n1 = makeFullNameConstraint({ firstName: 'Dat', lastName: 'Truong' });
// const n1 = makeFullNameConstraint({firstName: 'Dat', lastName: 'Truong', age: 22});
var makeFullNameConstraintWithGeneric = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n3 = makeFullNameConstraintWithGeneric({ firstName: 'Dat', lastName: 'Truong', age: 22, gender: 'male' });
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployee({ name: 'Dat', age: 22 });
// console.log(empOne);
// console.log(empOne.name);
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: 'Dat', age: 22, male: true });
// console.log(empTwo);
// console.log(empTwo.name);
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeTWithConstraint({ name: 'Dat', age: 22, male: true });
var numbers = {
    uid: 2,
    name: 'Numbers',
    data: [1, 2, 3]
};
var resourceOne = {
    uid: 1,
    name: 'Person',
    data: 'Hello'
};
var resourceTwo = {
    uid: 1,
    name: 'Movie',
    data: { name: 'Avenger' }
};
var resourceThree = {
    uid: 1,
    name: 'Developer',
    data: ['ReactJS', 'Typescript']
};
