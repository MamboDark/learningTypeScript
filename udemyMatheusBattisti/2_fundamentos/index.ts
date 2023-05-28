/* 1 - number
O tipo number garante que o dado seja um número;
Logo, podemos inserir apenas números na variável;
E também mudar o valor para outo número;
O TypeScript possibilita também a inserção de métodos numéricos apenas;*/
console.log('|===== NUMBER =====|')
let x: number = 10
console.log(x)
x = 16
console.log(typeof x)
const y: number = 17.11111111
console.log(typeof y)
console.log(y.toPrecision(3))

/*  2  - string
O tipo string garante que o dado seja um texto;
Logo, podemos inserir apenas texto na variável;
E também mudar o valor para outro texto;
O TypeScript possibilita também a inserção de métodos de texto apenas;*/
console.log('|===== STRING =====|')
const firstName: string = 'Nelson'
console.log(firstName.toUpperCase())
const lastName: string = 'Carvalho'
console.log(lastName.toUpperCase())
let fullName: string
fullName = firstName + ' ' + lastName
console.log(fullName)
console.log(typeof fullName)

/* 3 -  boolean
O tipo boolean garante que o dado seja um booleano (true ou false);
Logo, podemos inserir apenas booleans na variável;
E também mudar o valor para outro boolean;*/
console.log('|===== BOOLEAN =====|')
let a: boolean = false
console.log(a)
console.log(typeof a)
a = true
console.log(a)

/* 4 - inference e annotation
Estes dois conceitos vão nos acompanhar em todo o processo do desenvolvimento de aplicações;
Annotation é quando definimos o tipo de um dado manualmente ex: 'let a: string';
Inference é quando o TS identifica e define o tipo de dados para nós;*/
console.log('|===== INFERENCE E ANNOTATION =====|')
// annotation
const ann: string = 'String através de annotation :'
console.log(ann)
console.log('Typeof'typeof ann)
// inference
let inf = 'String através de Inference' 
console.log(inf)
console.log('Typeof'typeof inf)
// inf = 10

let nome: string = 'Nelson'
console.log(nome)

