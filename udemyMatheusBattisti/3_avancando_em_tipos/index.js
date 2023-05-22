// 1 arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
console.log('Imprimindo apenas um indice do array: ' + numbers[2]);
var nomes = ['Nelson', 'Carvalho'];
console.log(nomes);
// Nessa aula pode se reparar como o ts se comporta em relação a fidelidade do código sinalizando as listas string[] ou numbers[] utilizando os colchetes.
// 2- sintaxe antiga de arrays
var nums = [100, 200];
nums.push(300);
console.log(nums);
// 3 - any
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
// 6 - função anonima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
    console.log(sallary);
}, 500);
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
// showNumbers(1,2,3)
// showNumbers(4,5)
showNumbers(1);
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
showBalance(true);
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
// 16 - Non-null Assertion Operators
var p = document.querySelector('#some-p');
console.log(p.innerText);
