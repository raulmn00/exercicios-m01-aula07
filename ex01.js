const prompt = require("prompt-sync")();
console.clear();

let numeroInteiro = +prompt("Digite um número inteiro: ");

let arrayTodo = [];
let arrayPar = [];
let arrayImpar = [];

for (let index = 0; index <= numeroInteiro; index++) {
  arrayTodo[index] = index;
}

for (let i = 0; i < arrayTodo.length; i++) {
  if (arrayTodo[i] % 2 == 0) {
    arrayPar.push(arrayTodo[i]);
  } else {
    arrayImpar.push(arrayTodo[i]);
  }
}

console.log("Array completo: ", arrayTodo);
console.log("Array com ímpares: ", arrayImpar);
console.log("Array com pares: ", arrayPar);
