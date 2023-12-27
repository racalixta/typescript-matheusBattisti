// 1 - number 
var x = 10;
console.log("numbers " + x);
// x = "teste";  // isso dara um erro
var y = 15.65486795386;
console.log("numbers " + y);
console.log("numbers " + y.toPrecision(3));
// 2 - string
var firstName = "John";
console.log("firstName: " + firstName.toUpperCase());
var lastName = "John";
console.log("lastName: " + lastName.toUpperCase());
var fullName = firstName + " " + lastName;
console.log("fullName: " + fullName);
console.log("fullName typeof: " + typeof fullName);
// 3 - boolean
var a = false;
console.log(a);
console.log(typeof a);
// 4 - Inference e Annotation
var ann = "Teste";
// ann = 1; // dará erro, pois o TS entende que é uma string
var inf = "Teste";
// inf = 1; // dará erro, pois o TS entende que é uma string
// 5 - Para gerar um arquivo de configuracao do TS basta digitar "tsc --init" no terminal
