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
