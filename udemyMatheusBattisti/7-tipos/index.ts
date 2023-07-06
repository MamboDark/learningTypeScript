/*Sobre a criação de novos tipos
Há a possibilidade de gerar novos tipos em TypeScipt, já vimos isso com Generics (vamos nos aprofundar neste recurso também);
Porém existem outros operadores que visam facilitar nossa vida neste assunto;
A ideia deste recurso é deixar a manutenção do projeto mais simples;
Ou seja, gastar mais tempo na estruturação dos tipos e menos na busca de possíveis bugs depois;*/


/*1 - Generics
Utilizamos Generics quando uma função pode aceitar mais de um tipo;
É uma prática mais interessante do que o any, que teria um efeito semelhante;
Porém com Generics*/

function showData<T>(arg: T): string {
     return `O dado é : ${arg}`
}
console.log(showData(5))
console.log(showData('Testando Generic'))
console.log(showData(true))
console.log(showData(['teste']))

/* 2 - Constraint em Generics
As constraints nos ajudama limitar os tipos aceitos;
Como em Generic podemos ter tipos livres, elas vão filtrar os tipos aceitos;
Adicionando orgnização quando queremos aproveitar a liberdade dos Generics;*/

function showProductName<T extends {name: string}>(obj: T) {
     return `O nome do produto é: ${obj.name}`
}

const myObj = {name: 'Porta', cor: 'Branca'}
const otherProduct = {name: 'Carro', wheels: 4, engine: 1.0}
//const thirdObj = {price: 19.99, category: 'Roupa'}
console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
//console.log(showProductName(thirdObj))

/* 3 -  Interfaces com Generics
Com interfaces podemos criar tipos complexos para objetos;
Adicionando Generics podemos deixá-los mais brandos;
Aceitando tipos diferentes em ocasiões diferentes;*/

interface MyObject<T, U, Q> {
     name: string
     wheels: T
     engine: U
     color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: 'Ferrari', wheels: 4, engine: 8.0, color: 'Vermelho Corrida'}
const myPen: Pen = {name: 'Caneta BIC', wheels: false, engine: false, color: 'azul'}

console.log(myCar)
console.log(myPen)

/* 4 - Type parameters 
Type parameters é um recurso de generics;
Utilizado para dizer que algum parâmetro de uma função, por exemplo, é a chave de um objeto, que tabém é parâmetro;
Desta maneira conseguimos criar uma ligação entre o tipo genérico e sua chave;*/

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
     return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
     hd: '2TB',
     ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
//console.log(getSomeKey(server, 'teste'))

/* 5 - Keyof type operator
Com o keyof type operator podemos criar um novo tipo;
Ele aceita dados do tipo objeto, como object literals e arrays;
E pode criar o tipo baseado nas chaves objeto passando como parâmetro;*/

type Character = {name: string, age: number, hasDriveLicese: boolean}

// Neste exemplo estamos representand todas chaves do objeto principal
type C = keyof Character

function showCharName(obj: Character, key: C) {
     return `${obj[key]}`
}

const myChar: Character = {
     name: 'Nelson',
     age: 30,
     hasDriveLicese: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
//showCharName('teste', 'asd')

/* 6 - Typeof type operator
Com o typeof type operator podemos criar um novo tipo;
Este tipo será baseado no tipo de algum dado;
Ou seja, é interessante para quando queremos criar uma variável com o mesmo tipo da outra, por exemplo;*/

const userName: string = 'Nelson'

const userName2: typeof userName = 'Carvalho'

//const userName3: typeof userName = 7

type x = typeof userName

const userName4: x = 'Nelson2'

/* 7 - Indexed acess types
A abordagem indexed  access types pode criar um tipo baseado em uma chave de objeto;
Ou seja, conseguimos reaproveiar o tipo da chave para outros locais como funções;*/

type Truck = {km: number, kg: number, description: string}

// Neste exemplo utilizamos uma chave específica acessando o tipo
type km = Truck['km']

const newTruck: Truck = {
     km: 10000,
     kg: 5000,
     description: 'Caminhão peso leve'
}

function showKm(km: km) {
     console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
     km: 5000,
     kg: 1000
}
showKm(newCar.km)

/* 8 - Conditional Expressions Type
O tipo por condição permite criar um novo tipo com base em um if/else;
Mas não são aceitas expressões tão amplas;
Utilizamos a sitaxe de if ternário;*/

interface A {}

interface B extends A {}

interface Teste {
     showName(): string
}

// Validando
type myType = B extends A ? number : string

const someVar:myType = 5
//const someVar2:myType = 'teste'

type myTypeB = Teste extends {showNumber(): number} ? string : boolean

/* 9 - Template literals type
Podemos criar tipos com template literals;
É uma forma de customizar tipos de maneiras infinitas;
Pois o texto que formamos pode depender de variáveis;*/

type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'
//const testing2: CustomType = 'some text2'

type a1 = 'testando'
type a2 = 'Union'
type a3 = `${a1}` | `${a2}`
