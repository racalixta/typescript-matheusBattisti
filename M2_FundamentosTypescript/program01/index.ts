// number 
let x: number = 10;

console.log("numbers " + x);

// x = "teste";  // isso dara um erro

let y: number = 15.65486795386;

console.log("numbers " + y);
console.log("numbers " + y.toPrecision(3));

// string
const firstName: string = "John";

console.log("firstName: " + firstName.toUpperCase());

const lastName: string = "John";


console.log("lastName: " + lastName.toUpperCase());

const fullName: string = firstName + " " + lastName;

console.log("fullName: " + fullName);
console.log("fullName typeof: " + typeof fullName);

// boolean

let a: boolean = false;

console.log(a);
console.log(typeof a);
