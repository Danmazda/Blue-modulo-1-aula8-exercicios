const prompt = require("prompt-sync")();
const userNum = +prompt("Digite um número para ver seu fatorial: ");
let responseStr = `${userNum}!=${userNum}`;
let response = userNum;
for (let fatNum = userNum - 1; fatNum > 0; fatNum--) {
  responseStr += `x${fatNum}`;
  response *= fatNum;
}
responseStr += `=${response}`;
console.log(responseStr);
