const prompt = require("prompt-sync")();
const userCols = +prompt("Digite quantas  COLUNAS deseja na matriz: ");
const userRows = +prompt("Digite quantas LINHAS deseja na matriz:");
const cols = [];
let rows = [];
for (let indexCol = 1; indexCol <= userCols; indexCol++) {
  // linhas:
  for (let indexLine = 1; indexLine <= userRows; indexLine++) {
    rows.push(indexLine);
  }
  cols.push(rows);
  rows = [];
}
console.log("Matriz: ");
cols.forEach((line) => console.log(line));
