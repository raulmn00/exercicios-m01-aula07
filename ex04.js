const prompt = require("prompt-sync")();
console.clear();

/* 
Faça um programa que peça o nome de usuário e a senha de um usuário. 
A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.
*/

console.log(
  "Olá, crie uma senha. Ela deve conter ao menos 8 caracteres, um número e um caractere especial!"
);
console.log(
  `Esses são os caracteres especiais aceitos: 
  (espaço) ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ ] ^ _ `
);

let senhaCorreta = false;
while (senhaCorreta != true) {
  let senha = prompt("Digite a sua senha: ");
  let senhaSplit = senha.split("");

  if (senhaSplit.length < 8) {
    console.log("Sua senha deve conter mais de 8 caracteres.");
    continue;
  }

  let countNums = 0;
  let countCaracteresEspeciais = 0;

  for (let i = 0; i < senhaSplit.length; i++) {
    if (
      senhaSplit[i] == "0" ||
      senhaSplit[i] == "1" ||
      senhaSplit[i] == "2" ||
      senhaSplit[i] == "3" ||
      senhaSplit[i] == "4" ||
      senhaSplit[i] == "5" ||
      senhaSplit[i] == "6" ||
      senhaSplit[i] == "7" ||
      senhaSplit[i] == "8" ||
      senhaSplit[i] == "9"
    ) {
      countNums++;
    }
    if (
      senhaSplit[i] == " " ||
      senhaSplit[i] == "!" ||
      senhaSplit[i] == "#" ||
      senhaSplit[i] == "$" ||
      senhaSplit[i] == "%" ||
      senhaSplit[i] == "&" ||
      senhaSplit[i] == "'" ||
      senhaSplit[i] == "(" ||
      senhaSplit[i] == ")" ||
      senhaSplit[i] == "*" ||
      senhaSplit[i] == "+" ||
      senhaSplit[i] == "," ||
      senhaSplit[i] == "-" ||
      senhaSplit[i] == "." ||
      senhaSplit[i] == "/" ||
      senhaSplit[i] == ":" ||
      senhaSplit[i] == ";" ||
      senhaSplit[i] == "<" ||
      senhaSplit[i] == "=" ||
      senhaSplit[i] == ">" ||
      senhaSplit[i] == "?" ||
      senhaSplit[i] == "@" ||
      senhaSplit[i] == "[" ||
      senhaSplit[i] == "]" ||
      senhaSplit[i] == "^" ||
      senhaSplit[i] == "_" ||
      senhaSplit[i] == "`" ||
      senhaSplit[i] == '"' ||
      senhaSplit[i] == "|"
    ) {
      countCaracteresEspeciais++;
    }
  }

  if (countNums == 0 || countCaracteresEspeciais == 0) {
    console.log(
      "Sua senha deve conter ao menos 1 número e 1 caractere especial!"
    );
    continue;
  } else {
    console.log("Senha criada com sucesso!");
    senhaCorreta = true;
  }
}
