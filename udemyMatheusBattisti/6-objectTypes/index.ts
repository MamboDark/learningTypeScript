/* O que são  Object Types?
São os dados que tem como o tipo objeto, por exemplo: object literals e arrays;
Temos diversos recursos para explorar sobre estes tipos;
Como: interfaces, readonly, tupla e outros;
Isso nos dá possibilidades a mais para o JavaScript;
Nesta seção focaremos nestes detalhes que são super importantes para o TypeScript;*/

/* De tipo para Interface
Um caso de uso para interfaces é siplificar os parâmetros de objeto de funções;
Ou seja, em vez de passar parâmetros de um objeto longo para n funções, passamos apenas a interface*/

// 1 - tipo de objeto para função com interface
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product:Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailable){
        console.log('O produto está disponível')
    }
}
const shirt:Product = {
    name:'Camisa',
    price: 19.99,
    isAvailable: true
}
//showProductDetails(shirt)
//showProductDetails({name: 'Calça', price: 100.00, isAvailable: false})

/* 2- Propriedades opcionais em interfaces
As interfaces podem conter propriedades de objeto opcionais;
Basta adicionar a interrogação no nome da propriedade;
Exemplo: nome?;string*/
interface User {
    email:string,
    role?:string
}
function showUserDetails(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)
    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}
const u1:User = {email: 'nelson@email.com', role: 'Admin'}
const u2:User = {email: 'carvalho@email'}

showUserDetails(u1)
showUserDetails(u2)

/* 3 - Propriedades readonly
As propriedades readonly podem ser alteradas apenas uma vez, na criação do novo dado;
É uma forma de criar um valor constante em um objeto;
Podemos adicionar as interfaces;*/
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca:Car = {
    brand: 'VW',
    wheels: 4
}
console.log(fusca)
//fusca.wheels = 5

/* 4- Index signature
Utilizamos o index Signature quando não sabemos o nome das chaves, mas já sabemos quais os tipos de um objeto ou array;
Isso restringe a tipos que não devem ser utilizados;
Uma barreira de segurança a mais na nossa variável;*/

interface CoordObject {
    [index: string]: number,

}
let coords: CoordObject = {
    x: 10,

}
coords.y = 15
console.log(coords)

/* 5 - Extending Types
Utlizamos Extending types como uma herança para criar tipos mais complexos por meio de uma interface;
Ou seja, uma interface pode herdar as propriedades e tipos já definidos de outra;
Isso acontece por meio da instrução extends;*/

interface Human {
    name: string,
    age: number,

}
interface SuperHuman extends Human {
    superpowers: string[],

}
const Nelson: Human = {
    name: 'Nelson',
    age: 27
}
console.log(Nelson)

const supergirl: SuperHuman = {
    name: 'Wonder Woman',
    age: 35,
    superpowers: ['Super strenght']
}
console.log(supergirl)
//Acessado index
console.log(supergirl.superpowers[0])

/* 6 - Intersection Types
Intersection Types são utilizados para criar tipos mais complexos a partir de duas interfaces, por exemplo;
Podemos concatenar os tipos com &;*/
interface Character {
    name: string
}
interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name:'Arnold',
    type:'Shotgun',
    caliber: 12
}
console.log(arnold)
console.log(arnold.caliber)

/* 7 - Readonly array 
O ReadOnlyArray é um tipo para arrays, que deixa os itens como readonly;
Podemos aplicar um tipo para os itens do array, além desta propriedade especial;
A modificação de itens pode ser feita através de método, mas não podemos aumentar o array, por exemplo;*/
let myArray: ReadonlyArray<string> = ['Maça', 'Laranja', 'Banana']

//myArray[3] = 'Mamão'
console.log(myArray)

myArray.forEach((item) => {
    console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})
console.log(myArray)
