const firstName = "John";
const anoterName = 1;
const x = true;

function greeting(name: string) {
  console.log("Olá " +  name);
}

greeting(firstName);
// greeting(anoterName);
// greeting(x);

// Atividade

const numA =  1;
const numB = 2;

function sumNumbers(numA: number, numB: number) {
    return numA + numB;
}

let sum = sumNumbers(numA, numB);

console.log(sum);

