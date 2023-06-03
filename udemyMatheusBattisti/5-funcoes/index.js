var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/*
Funções que não retornam nada - 1 - void
Podemos ter funções que não retornam valores;
Qual seria o tipo de dado indicado para essa situação?
Neste caso utililizamos o void!
Ele vai dizer ao TS que não temos um valor de retorno;*/
console.log('===== VOID =====');
function withoutReturn() {
    console.log('Esta função não tem retorno!');
}
withoutReturn();
/*
Callback como argumento - 2 - callback
Podemos inserir uma função de callback como argumento de uma função;
Nela conseguimos definir o tio de argumento aceito pela callback;
E também o tipo de retorno a mesma; */
console.log('===== CALLBACK =====');
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(f, userName) {
    console.log('Preparando a função!');
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Nelson');
preGreeting(greeting, 'Junior');
/* Generic functions
É uma estratégia para quando o tipo de retorno é relacionado ao tipo do argumento;
Por exemplo: um item de um array, pode ser string, boolean ou number;
Normalmente são utilizados letras como T ou U para definir os generics, é uma convençao;*/
console.log('===== GENERIC FUNCTION =====');
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([0, 1, 2]));
console.log(firstElement(['itemLista1', 'itemLista2']));
//Limitou a execução para aceitar apenas 'listas' más aceita diversos tipos.
function mergeObjects(obj1, obj2, obj3) {
    return __assign(__assign(__assign({}, obj1), obj2), obj3);
}
var newObject = mergeObjects({ name: 'Nelson' }, { age: 27 }, { Job: 'Programmer' });
console.log(newObject);
/* 4 - Constraints nas Generic Functions
As Generic Functions podem ter seu escopo reduzido por constraints;
Basicamente limitamos os tipos que podem ser utilizados no Generic;
Isso faz com que nosso escopo seja menos abrangente;*/
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
//console.log(biggestNumber(true, false))
