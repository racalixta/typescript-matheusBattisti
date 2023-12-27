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
