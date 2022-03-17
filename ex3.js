const prompt = require("prompt-sync")();
const userNum = +prompt("Digite um número para ver sua tabuada: ");
for (let index = 1; index <= 10; index++) {
  console.log(
    `${userNum} x ${`${index}`.padStart(2, "0")} = ${userNum * index}`
  );
}
