// 1 - Arrays

// let number: number[] = [1, 2, 3, "teste" , true]; // o "teste" e 'true' dará erro 
let numbers: number[] = [1, 2, 3];
numbers.push(5);

console.log(numbers[2]);
// numbers = "teste"; // isso também dará erro

const nome: string[] = ["João", "Maria", "Ana"];
// nomes.push(4); // erro pq é array de string

// 2 - Outra sintaxe de Arrays (essa era mais utilizada antigamente, a atual é a de cima)

// const ums: Array<number> = [100, 200, "Teste", true]; // o "teste" e 'true' dará erro 
const nums: Array<number> = [100, 200];

nums.push(300);
//nums.push("string dara erro");
console.log(nums[0]);

// 3 - Any (aceitar qualquer tipo) - é bom evitar o uso

const arr1: any = [1, "teste", true, [], {nome: "João"}]; 
arr1.push([1, 2, 3]);
console.log(arr1);

// 4 - parametros tipados

function soma(a: number, b: number) {
  console.log(a + b);
}
soma(3, 4);
// soma("a", "b"); // dará erro pois o TS entende que é string



// 5 - Retorno de funções

function greeting(name: string): string {
  //                               ^^ indica que o retorno será string
  return `Olá ${name}`;
}

console.log(greeting("Ana"));
// console.log(greeting(132)); // dará erro pois o TS entende que é number



// 6 - funcao anonima

setTimeout(function() {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary)); // não permite pois o param tem q ser string

  // console.log(sallary);

}, 2000);


// 7 - Tipos de objeto

function passCoordinates(coord: {x: number, y: number}) {
  console.log("X coord: " + coord.x);
  console.log("Y coord: " + coord.y);
}

const objCoord = {x: 329, y: 84.2};
passCoordinates(objCoord);

const pessoaObj: {name: string, lastName: string} = {name: "John", lastName: "Dude"};


// 8 - props opcionais

// ao colocar "?" depois do 'c' ele se torna opcional, mas precisa de uma validação
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: ", + a);
  console.log("B: ", + b);

  // não é a melhor maneira de se fazer a validação
  if(c) {
    console.log("C: ", + c);
  }

}
showNumbers(1, 4, 7);
showNumbers(3, 2);

// 9 - Validando argumento opcional (jeito certo de fazer a validação)

function advancedGreeting(firstName: string, lastName?: string) {

  if(lastName !== undefined) {
    return `Olá ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá ${firstName}, tudo bem?`;  
}

console.log(advancedGreeting("John", "Dude"));
console.log(advancedGreeting("Mikal"));










