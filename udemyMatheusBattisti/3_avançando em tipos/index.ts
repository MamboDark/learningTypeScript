// 1 - numbers
let x: number = 10

console.log(x)

x = 16
console.log(typeof x)

const y: number = 17.11111111
console.log(typeof y)
console.log(y.toPrecision(3))

//  2  - string
const firstName: string = 'Nelson'
console.log(firstName.toUpperCase())

const lastName: string = 'Carvalho'
console.log(lastName.toUpperCase())

fullName = firstName + ' ' + lastName
console.log(fullName)

console.log(typeof fullName)

// 3 -  boolean
let a: boolean = false
console.log(a)
console.log(typeof a)

a = true
console.log(a)

//  4 - inference e annotation

const ann: string = 'String através de annotation :'
let inf = 'String através de Inference' 

// inf = 10

let nome: string = 'Nelson'
console.log(nome)

