"use strict";
// 1 - number 
let x = 10;
console.log("numbers " + x);
// x = "teste";  // isso dara um erro
let y = 15.65486795386;
console.log("numbers " + y);
console.log("numbers " + y.toPrecision(3));
// 2 - string
const firstName = "John";
console.log("firstName: " + firstName.toUpperCase());
const lastName = "John";
console.log("lastName: " + lastName.toUpperCase());
const fullName = firstName + " " + lastName;
console.log("fullName: " + fullName);
console.log("fullName typeof: " + typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
// 4 - Inference e Annotation
const ann = "Teste";
// ann = 1; // dará erro, pois o TS entende que é uma string
let inf = "Teste";
// inf = 1; // dará erro, pois o TS entende que é uma string
// 5 - Para gerar um arquivo de configuracao do TS basta digitar "tsc --init" no terminal
// 6 - Para o TS ficar em hot reload precisa digitar "tsc -W" no terminal
console.log(inf);
