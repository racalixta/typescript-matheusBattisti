// 1 - Arrays
// let number: number[] = [1, 2, 3, "teste" , true]; // o "teste" e 'true' dará erro 
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"; // isso também dará erro
var nome = ["João", "Maria", "Ana"];
// nomes.push(4); // erro pq é array de string
// 2 - Outra sintaxe de Arrays (essa era mais utilizada antigamente, a atual é a de cima)
// const ums: Array<number> = [100, 200, "Teste", true]; // o "teste" e 'true' dará erro 
var nums = [100, 200];
nums.push(300);
//nums.push("string dara erro");
console.log(nums[0]);
// 3 - Any (aceitar qualquer tipo) - é bom evitar o uso
var arr1 = [1, "teste", true, [], { nome: "João" }];
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(3, 4);
// soma("a", "b"); // dará erro pois o TS entende que é string
// 5 - Retorno de funções
function greeting(name) {
    //                               ^^ indica que o retorno será string
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting("Ana"));
// console.log(greeting(132)); // dará erro pois o TS entende que é number
// 6 - funcao anonima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary)); // não permite pois o param tem q ser string
    // console.log(sallary);
}, 2000);
// 7 - Tipos de objeto
function passCoordinates(coord) {
    console.log("X coord: " + coord.x);
    console.log("Y coord: " + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
var pessoaObj = { name: "John", lastName: "Dude" };
// 8 - props opcionais
// ao colocar "?" depois do 'c' ele se torna opcional, mas precisa de um if para ver se não é null
function showNumbers(a, b, c) {
    console.log("A: ", +a);
    console.log("B: ", +b);
    if (c) {
        console.log("C: ", +c);
    }
}
showNumbers(1, 4, 7);
showNumbers(3, 2);
// 9 - Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1 ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("John", "Dude"));
console.log(advancedGreeting("Mikal"));
