const carsList = ["uno", "gol", "palio", "corsa"];
const consumption = [13.4, 14.4, 15, 13];
let betterConsumption = 0;
// for of joga o elemento do array na variável à esquerda
for (const num of consumption) {
  if (num > betterConsumption) {
    betterConsumption = num;
  }
}

console.log("O carro com melhor consumo é: ");
let betterCarConsumption = carsList[consumption.indexOf(betterConsumption)];
console.log(betterCarConsumption);

console.log("Para cada um dos carros percorrer 1000Km você gastará:");
// for in joga o índice do array na variável à esquerda
for (const car in carsList) {
  console.log(`${carsList[car]}:`);
  console.log("R$" + ((1000 / consumption[car]) * 5.5).toFixed(2));
}
