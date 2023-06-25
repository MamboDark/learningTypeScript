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
console.log('===== CONSTRAINTS GENERIC FUNCTION =====');
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
/* 5 - Defiindo tipo de parâmetros/Especificar tipo de argumento
Em generic functions temos que utilizar parâmetros de tipos semelhantes, se não recebemos um erro;
Porém há a posibilidade de determinar o tipo também dos parâmetros aceitos, com uma sintaxe especial;
Isso faz com que a validação do TS aceite os tipos escolhidos;*/
console.log('===== DEFININDO TIPO DE PARÂMETROS =====');
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log([mergeArrays([1, 2, 3], ['teste', 'testando'])]);
/* 6 - Parâmetros opcionais
Nem sempre utilizamos todos os parâmeros de uma função;
Mas se ele for opcional, precisamos decarar isso pra o TS;
E ainda deixar ele o fim da lista de parâmetros;*/
console.log('===== PARÂMETROS OPCIONAIS =====');
var modernGreeting = function (name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name, ", tudo bem?");
};
console.log(modernGreeting('Nelson'));
console.log(modernGreeting('Nelson', 'Dr.'));
/* 7 - Parâmetros default
O parâmetros default são os que já possuem um valor definido;
Se não passarmos para a função, é utilizado esse valor;
Para este recurso, a aplicação e TS é igual JS;*/
console.log('===== PARÂMETROS DEFAULT =====');
var somaDeFault = function (n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
};
console.log(somaDeFault(10));
console.log(somaDeFault(10, 10));
/*  8 - O tipo unknown
O tio unknown é utilizado de forma semelhante ao any, ele aceita qualquer tipo de dado;
Porém a diferença é que ele não deix ago ser executado se não houver validação de tipo;
Ou seja, adiciona uma trava de segurança;*/
console.log('===== TIPO UNKNOWN =====');
var doSomething = function (x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
};
doSomething([1, 2, 3]);
doSomething(5);
/* 9 - Tipo Never
O never é um tipo de retorno semelhante ao void;
Porém é utilizado quando a função não retorna nada;
Um exemplo: retorno de erros;*/
console.log('===== TIPO NEVER =====');
var showErrorMessage = function (msg) {
    throw new Error(msg);
};
//showErrorMessage('Erro!')
/* 10 - Rest operator
Em JavaScript ES6 podemos utilizar o Rest Operator;
Para aplicá-lo em parâmetros em TS é fáil, basta definir o tpo de dado com a sintaxe de Rest (...);*/
console.log('===== REST OPERATOR =====');
var sumAll = function () {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
};
console.log(sumAll(6, 7, 8, 9, 10));
console.log(sumAll(10, 300, 2000));
//console.log(sumAll('Olá'))
/* 11 - Destructuring em parametros
O destructuring, outro recurso de ES6, também pode ser aplicado com TS;
Precisamos apenas determinar o tipo de cada dado que será desestruturado;
Desta maneira o TS valida o Destructuring;*/
console.log('===== DESTRUCTURING EM PARÂMETROS =====');
var showProductDetails = function (_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9: ".concat(name, " e ele custa R$").concat(price);
};
var shirt = { name: 'camisa', price: 49.99 };
console.log(showProductDetails(shirt));
