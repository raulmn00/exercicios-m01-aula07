const prompt = require("prompt-sync")();
console.clear();

/* 
Crie um programa em que o usuário escolha a quantidade de notas serem entradas 
e depois peça e armazene essa quantidade de notas em um array. 
Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).
*/

let qtdNotas = +prompt(
  "Digite a quantidade de médias finais que você deseja cadastrar: "
);
let arrayNotas = [];

let qtdAlunosAprov = 0;
let qtdAlunosRec = 0;
let qdtAlunosRep = 0;

while (qtdNotas != 0) {
  arrayNotas.push(+prompt("Digite uma nota: "));
  qtdNotas--;
}

for (let index = 0; index < arrayNotas.length; index++) {
  if (arrayNotas[index] >= 7) {
    qtdAlunosAprov++;
  } else if (arrayNotas[index] >= 5 && arrayNotas[index] < 7) {
    qtdAlunosRec++;
  } else if (arrayNotas[index] < 5) {
    qdtAlunosRep++;
  }
}

console.log(
  `${qtdAlunosAprov} alunos foram aprovados, ${qtdAlunosRec} alunos ficaram em recuperação, ${qdtAlunosRep} alunos foram reprovados.`
);
