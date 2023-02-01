// Optional and non null
// Optional ?
const add = (a: number, b?: number) => b ? a + b : a; // ? (Optional) tham số không bắt buộc
console.log(add(3, 4));
console.log(add(10));

//Non Null !
const addNonNull = (a: number, b?: number) => a + b!; // ! Non Null => bắt buộc phải truyền tham số
console.log(addNonNull(20, 1));
console.log(addNonNull(22));