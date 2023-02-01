// Type Alias
type StringOrNumber = string | number;
type Student = { 
    name: string; 
    id: StringOrNumber;
}

const studentDetails = (id: StringOrNumber, studentName: string): void => { // void không trả về gì cho cái hàm này cả
    console.log(`Student ${studentName} has ID: ${id}`);
}

// studentDetails(1, 'Truong Tan Dat');
// studentDetails('2', 'Dat Truong');

const greet = (user: Student) => console.log(`${user.name} with ID: ${user.id} say hello`);

greet({ name: 'Truong Tan Dat', id: 1 });