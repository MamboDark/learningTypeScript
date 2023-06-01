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
/* 3 - any / serve para todos os tipos
O any transmite ao TS que qualquer tipo satizfaz a variáve;
Devemos evitar ao máximo este tipo, pois vai contra os princípios do JavaScript;
Dois casos de uso: o tio do dado realmente não importa e arrays com dados de múltiplos tipos;*/
console.log('|===== ANY =====|');
var arr1 = [1, 'teste', true, [], { nome: 'Nelson' }]; // array aceitando diversos tipos pois o typescript para de verificar ao usar o any.
arr1.push('Push');
console.log(arr1);
console.log(typeof arr1);
/* 4 - Tipo de parâmetros de funções
Podemos definr o tipo de cada parâmetro de uma função;
Assim condicionamos o seu uso correto;
A sintaxe é: function minhaFuncao(nome: string){}
Agora podemos passar o parâmetro nome, apenas como texto;*/
console.log('|===== PARAMETROS TIPADOS =====|');
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
/* 5 - Tipo de retorno de função
Os retornos também podem ser definidos por nós;
Para isso utilizamos a sintaxe: function myFunction(): number{}
Esta função retorna um número;*/
console.log('|===== TIPO DO RETORNO DA FUNC =====|');
function greeting(name /*Tipo do parametro*/) {
    //return 5
    return "Hi, ".concat(name, "!");
}
console.log(greeting('Nelson'));
//console.log(greeting(1)) // tipamos o retorno assim bloqueando o tipo number.
/* 6 - função anonima em TS
O typescript consegue nos ajudar também em funções anônimas;
Fazendo uma validação do código digitado, os fornecendo dicas de possíveis problemas;
Exemplo: métodos não existen;*/
console.log('|===== FUNÇÃO ANONIMA =====|');
var timerId = setTimeout(function () {
    var sallary = 1000;
    //console.log(parseFloat(sallary))//TS em ação recusando por ser um método de string.
    //console.log(sallary)
}, 1);
/*  7 - tipos de objetos
Podemos determinar tipos para objetos tamém;
A sintaxe é: {prop: tipo, pro2: tipo2}
Ou seja, estamos determinando quais tipos as propriedades de um objeto possuem;*/
console.log('|===== TIPO DE OBJETOS =====|');
function passCoordinates(coord) {
    console.log("X coordinates: ".concat(coord.x));
    console.log("Y coordinates: ".concat(coord.y));
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
//passCoordinates({x: 10, y: 10})
var pessoaObj = { nome: 'Nelson', surname: 'Carvalho' };
console.log(pessoaObj);
/* 8 - propriedades opcionais
Nem sempre os objetos possuem todas as propriedades que poderiam possuir;
Por isso temos as propriedades opcionais;
Para ter esse resultado devemos colocar uma interrogação: {nome: string, sobrenome?:string}*/
console.log('|===== PROPRIEDADES OPCIONAIS =====|');
function showNumbers(a, b, c) {
    console.log("A: ".concat(a));
    console.log("B: ".concat(b));
    if (c) /*Se tiver 'c' imprime.Evitando aparecer undefined.*/ {
        console.log("C(Opcional): ".concat(c));
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(1)
/* 9 - validação de pripriedades opcionais
Quando a propriedade é opcional, precisamos criar uma validação;
Isso acontece por que TypeScript não nos ajuda mais, já que ele deixa de controlar o valor que recebemos;
Para isto utilizamos uma condicional if, e conseguimos resolver a siuação;
O primeiro argumento nunca irá ser opcional teremos que trabalhar com os ultimos;*/
console.log('|===== VALIDANDO PROPRIEDADES OPCIONAIS =====|');
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) /*validando a prop opcional*/ {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem ?");
    }
    return "Ol\u00E1 ".concat(firstName, ", tudo bem ?");
}
console.log(advancedGreeting('Nelson', 'Carvalho'));
console.log(advancedGreeting('Junior'));
/*  10 - union type
O union type é uma alternativa melhor do que o any;
Onde podemos determinar dois tipos para um dado;
A sintaxe: number | string
Assim podemos utilizar diversos tipos*/
console.log('|===== UNION TYPE =====|');
function showBalance(balance) {
    console.log("o saldo da conta \u00E9 R$ ".concat(balance));
}
showBalance(100);
showBalance('400');
// showBalance(true)
// É possivel também aplicar em arrays que possuam multiplos valores como ex a seguir utilizando a sintaxe aniga:
var arr2 = [1, 'teste', true];
/* 11 - union types avançado
Podemos utilizar condicionais para validação do tpo de union types;
Com isso é possível trilhar rumos diferentes, baseado no tipo de dado;
Para checar o tipo utilizamos typeof;*/
console.log('|===== UNION TYPE 2 =====|');
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
/*  12 - type alias
Type alias é um recurso que permite criar um tipo e determinar o que ele verifica;
Desta maneira temos uma maneira mais fácil de chamá-lo em vez de criar expressões complexas com union types, por exemplo;*/
console.log('|===== TYPE ALIAS =====|');
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId('200');
//showId(123)
/* 13 - interface
Uma outra maneira de nomear um tipo de objeto;
Podemos determinar um nome para o tipo;
E também escolher quais as propriedades e seus tipos;*/
console.log('|===== INTERFACE =====|');
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " ZZ: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
/* 14 - Diferença entre type alias e interfaces
Na maioria das vezes podemos optar entre qualquer um dos recursos sem problemas;
A única diferença é que a interface pode ser alterada ao longo do código, já o alias não;
Ou seja, se pretendemos mudar como o tipo se conforma, devemos escolher a interface;*/
console.log('|===== DIFERENÇA ENTRE TYPE ALIAS E INTERFACE =====|');
var somePerson = { name: 'Nelson', age: 27 };
console.log(somePerson);
var persoType = { name: 'Junior' };
console.log(persoType);
/*type personType = {
    age: number
}*/
/* 15 - Literal types
Literal types é um recurso que permite colocar valores como tipos;
Isso restringe o uso a não só tipos, como também os próprios valores;
Este recurso é muito utilizado com Union Types;*/
console.log('|===== LITERAL TYPES =====|');
var test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection('center');
showDirection('right');
showDirection('left');
//showDirection('top') Nesse caso ele não aceita pois difere dos parametro da function literal types em ação.
/* 16 - Non-null Assertion Operators
Às vezes o TypeScript pode evidenciar um erro, baseado em um valor que no momento do código ainda não está disponível;
Porém se sabemos que este valor será preenchido, podemos evitar o erro;
Utilizamos o caractere !;*/
console.log('|===== NON-NULL SSERTION OPERATORS =====|');
var p = document.getElementById('some-p');
console.log(p.innerText);
/*  17 - Bigint
Com o tipo bigint podemos declarar números com valores muito altos;
Podemos utilizar a notação literal, exemplo: 100n;
Para este recurso precisamos mudar a configuração do TS, para ersão mínima de ES2020;*/
console.log('|===== BIGINT =====|');
var n;
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
/* 18 - Symbol
De forma resumida, o symbol cria uma referência única para um valor;
Ou seja, mesmo que ele possua o mesmo valor de outra variável, teremos valores sendo considerados diferentes;*/
console.log('|===== BIGINT =====|');
var symbolA = Symbol('a');
var symbolB = Symbol('A');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
