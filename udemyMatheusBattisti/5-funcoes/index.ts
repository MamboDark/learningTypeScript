/*
Funções que não retornam nada - 1 - void
Podemos ter funções que não retornam valores;
Qual seria o tipo de dado indicado para essa situação?
Neste caso utililizamos o void!
Ele vai dizer ao TS que não temos um valor de retorno;*/
console.log('===== VOID =====')
function withoutReturn():void {
    console.log('Esta função não tem retorno!')
}
withoutReturn()

/*
Callback como argumento - 2 - callback
Podemos inserir uma função de callback como argumento de uma função;
Nela conseguimos definir o tio de argumento aceito pela callback;
E também o tipo de retorno a mesma; */
console.log('===== CALLBACK =====')
function greeting(name: string):string {
    return `Olá ${name}`
}
function preGreeting(f: (name:string) => string, userName:string) {
    console.log('Preparando a função!')
    const greet = f(userName)
    console.log(greet)
}
preGreeting(greeting, 'Nelson')
preGreeting(greeting, 'Junior')

/* Generic functions
É uma estratégia para quando o tipo de retorno é relacionado ao tipo do argumento;
Por exemplo: um item de um array, pode ser string, boolean ou number;
Normalmente são utilizados letras como T ou U para definir os generics, é uma convençao;*/
console.log('===== GENERIC FUNCTION =====')
function firstElement<T>(arr: T[]): T{
    return arr[0]
}
console.log(firstElement([0, 1, 2]))
console.log(firstElement(['itemLista1','itemLista2']))
//Limitou a execução para aceitar apenas 'listas' más aceita diversos tipos.

function mergeObjects<N, A, J>(obj1: N, obj2: A, obj3: J) {
    return {
        ...obj1,
        ...obj2,
        ...obj3
    }
}
const newObject = mergeObjects({name: 'Nelson'}, {age: 27}, {Job: 'Programmer'})
console.log(newObject)
/* 4 - Constraints nas Generic Functions
As Generic Functions podem ter seu escopo reduzido por constraints;
Basicamente limitamos os tipos que podem ser utilizados no Generic;
Isso faz com que nosso escopo seja menos abrangente;*/
console.log('===== CONSTRAINTS GENERIC FUNCTION =====')
function biggestNumber<B extends Number | String>(a: B, b: B): B {
    let biggest: B

    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest

}
console.log(biggestNumber(5, 3))
console.log(biggestNumber('12','5'))
//console.log(biggestNumber(true, false))

/* 5 - Defiindo tipo de parâmetros/Especificar tipo de argumento
Em generic functions temos que utilizar parâmetros de tipos semelhantes, se não recebemos um erro;
Porém há a posibilidade de determinar o tipo também dos parâmetros aceitos, com uma sintaxe especial;
Isso faz com que a validação do TS aceite os tipos escolhidos;*/
console.log('===== DEFININDO TIPO DE PARÂMETROS =====')
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}
console.log(mergeArrays([1,2,3], [5, 6]))
console.log([mergeArrays<Number | String>([1,2,3], ['teste', 'testando'])])

/* 6 - Parâmetros opcionais
Nem sempre utilizamos todos os parâmeros de uma função;
Mas se ele for opcional, precisamos decarar isso pra o TS;
E ainda deixar ele o fim da lista de parâmetros;*/
console.log('===== PARÂMETROS OPCIONAIS =====')
const modernGreeting = (name: string, greet?: string) => {

    if(greet){
    return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}, tudo bem?`
}
console.log(modernGreeting('Nelson'))
console.log(modernGreeting('Nelson', 'Dr.'))

/* 7 - Parâmetros default
O parâmetros default são os que já possuem um valor definido;
Se não passarmos para a função, é utilizado esse valor;
Para este recurso, a aplicação e TS é igual JS;*/
console.log('===== PARÂMETROS DEFAULT =====')

const somaDeFault = (n: number, m = 10): number => {
    return n+ m
}
console.log(somaDeFault(10))
console.log(somaDeFault(10, 10))

/*  8 - O tipo unknown
O tipo unknown é utilizado de forma semelhante ao any, ele aceita qualquer tipo de dado;
Porém a diferença é que ele não deix ago ser executado se não houver validação de tipo;
Ou seja, adiciona uma trava de segurança;*/
console.log('===== TIPO UNKNOWN =====')

const doSomething = (x: unknown) => {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === 'number') {
        console.log('X é um número')
    }
}
doSomething([1, 2, 3])
doSomething(5)

/* 9 - Tipo Never
O never é um tipo de retorno semelhante ao void;
Porém é utilizado quando a função não retorna nada;
Um exemplo: retorno de erros;*/
console.log('===== TIPO NEVER =====')
const showErrorMessage = (msg: string): never => {
    throw new Error(msg)
}
//showErrorMessage('Erro!')

/* 10 - Rest operator
Em JavaScript ES6 podemos utilizar o Rest Operator;
Para aplicá-lo em parâmetros em TS é fáil, basta definir o tpo de dado com a sintaxe de Rest (...);*/
console.log('===== REST OPERATOR =====')
const sumAll = (...n: number[]) => {
    return n.reduce((number, sum) => sum + number)

}
console.log(sumAll(6, 7, 8, 9, 10))
console.log(sumAll(10, 300, 2000))
//console.log(sumAll('Olá'))

/* 11 - Destructuring em parametros
O destructuring, outro recurso de ES6, também pode ser aplicado com TS;
Precisamos apenas determinar o tipo de cada dado que será desestruturado;
Desta maneira o TS valida o Destructuring;*/
console.log('===== DESTRUCTURING EM PARÂMETROS =====')

const showProductDetails = ({name, price}: {name: string, price: number}):string => {
    return `O nome do produto é: ${name} e ele custa R$${price}`
}
const shirt = {name: 'camisa', price: 49.99}
console.log(showProductDetails(shirt))
