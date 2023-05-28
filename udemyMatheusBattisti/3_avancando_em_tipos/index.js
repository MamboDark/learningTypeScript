/* 1 - arrays
Podemos especificar um array como tipo também;
Se temos um array de números: number[]
Se é um array de string: string[]
Isso acontece pois geralmente os arrays possuem apenas um único tipo de dado entre seus itens;*/
console.log('|===== ARRAYS =====|');
var numbers = [1, 2, 3];
numbers.push(5);
console.log("Imprimindo um indice do array num\u00E9rico: ".concat(numbers[2]));
var nomes = ['Nelson', 'Carvalho'];
nomes.push('Andressa', 'Costa'); // aceita tipos de sua categoria 'strings'.
console.log("Imprimindo um indice do array string: ".concat(nomes[2]));
// indicando um array: string[] ou numbers[] utilizando os colchetes.
/* 2 - sintaxe antiga de arrays
Os tipos de array possuem duas sintaxes;
obs: a anterior é à mais utilizada;
Podemos também fazer desta maneira: Array<number>;*/
console.log('|===== ARRAYS =====|');
var nums = [100, 200];
nums.push(300, 400);
console.log(nums);
// 3 - any / serve para todos os tipos
var arr1 = [1, 'teste', true, [], { nome: 'Nelson' }];
console.log(arr1);
arr1.push([1, 2, 3]);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorno defunção
function greeting(name) {
    return "Ola ".concat(name);
}
console.log(greeting('Nelson'));
/* 6 - função anonima
setTimeout(function(){
    const sallary: number = 1000
    // console.log(parseFloat(sallary))
    console.log(sallary)
}, 1)
*/
//  7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: ".concat(coord.x));
    console.log("Y coordinates: ".concat(coord.y));
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
var pessoaObj = { nome: 'Nelson', surname: 'Carvalho' };
console.log(pessoaObj);
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("a: ".concat(a));
    console.log("a: ".concat(b));
    if (c) {
        console.log("a: ".concat(c));
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(1)
// 9 - validação de parâmentros opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem ?");
    }
    return "Ol\u00E1 ".concat(firstName, ", tudo bem ?");
}
console.log(advancedGreeting('Nelson', 'Carvalho'));
console.log(advancedGreeting('NNelson'));
//  10 - union type
function showBalance(balance) {
    console.log("o saldo da conta \u00E9 R$ ".concat(balance));
}
showBalance(100);
showBalance('400');
// showBalance(true)
var arr2 = [1, 'teste', true];
//  11 - union types avançado
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId('200');
showId(123);
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " ZZ: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: 'Nelson', age: 27 };
console.log(somePerson);
//  15 - Literal types
var test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection('center');
/* 16 - Non-null Assertion Operators

const p = document.getElementById('some')
console.log(p!.innerText)
*/
/*  17 - Bigint

let n: bigint
n = 2000n
console.log(n)
console.log(typeof n)
*/
// 18 - symbol / serve para criar um valor unico.
console.log('18 - Symbol');
var symbolA = Symbol('a');
var symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
