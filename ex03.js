const prompt = require("prompt-sync")();
console.clear();

let num;

let contador = 0;
let arrayNum = [];

while (contador < 20) {
  num = Math.floor(Math.random() * 100 + 1);
  arrayNum.push(num);
  contador++;
}
console.log(arrayNum);
console.log("Antes do metodo sort.");
arrayNum.sort((a, b) => a - b);
console.log("Depois do metodo sort.");
console.log(arrayNum);
