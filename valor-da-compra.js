const input = require('readline-sync');

console.log("== ESCOLHA SUAS MAÇÃS ==");

const macas = input.question ("Insira a quantidade de macas desejada: ")

if (macas < 12  ){
    console.log("O valor total da compra é: R$ " + (0.30*macas) .toFixed(2))
} else if (macas >= 12){
    console.log("O valor total da compra é: R$" + (0.25*macas) . toFixed(2))
}


