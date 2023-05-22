// 1. Crie uma variável que recebe um número
var num = 7;
// 2. Converta este número para string em uma nova variável
var numeroString = num.toString();
// 4. Imprima este número em uma string maior, utilizando o recurso de template strings ou concatenação
var stringMaior = 'O número é: ' + numeroString;
console.log(stringMaior);
// 
var n1 = 7;
var numString = n1.toString();
var impr = "O n\u00FAmero \u00E9 ".concat(numString);
console.log(impr);
