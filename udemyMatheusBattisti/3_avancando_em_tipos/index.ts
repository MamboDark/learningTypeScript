// 1 arrays
let numbers:number[] = [1,2,3]

numbers.push(5)
console.log(numbers)
console.log('Imprimindo apenas um indice do array: ' + numbers[2])
const nomes:string[] = ['Nelson', 'Carvalho']
console.log(nomes)


// Nessa aula pode se reparar como o ts se comporta em relação a fidelidade do código sinalizando as listas string[] ou numbers[] utilizando os colchetes.

// 2- sintaxe antiga de arrays
const nums: Array<number> = [100,200]
nums.push(300)
console.log(nums)

// 3 - any
const arr1: any = [1,'teste', true,[],{nome:'Nelson'}]
console.log(arr1)
arr1.push([1,2,3])

// 4 - parametros tipados
function soma(a: number, b: number){
    console.log(a + b)
}
soma(4,5)

// 5 - retorno defunção
function greeting(name: string): string{
    return `Ola ${name}`
}
console.log(greeting('Nelson'))

// 6 - função anonima
setTimeout(function(){
    const sallary: number = 1000
    // console.log(parseFloat(sallary))
    console.log(sallary)
}, 500)

//  7 - tipos de objetos
function passCoordinates(coord: {x: number, y: number}){
    console.log(`X coordinates: ${coord.x}`)
    console.log(`Y coordinates: ${coord.y}`)
}
const objCoord = {x: 329, y: 84.2}
passCoordinates(objCoord)

const pessoaObj: {nome: string, surname: string} = {nome: 'Nelson', surname: 'Carvalho'}
console.log(pessoaObj)

// 8 - props opcionais
function showNumbers(a: number, b: number,c?: number){
    console.log(`a: ${a}`)
    console.log(`a: ${b}`)
    if(c){
    console.log(`a: ${c}`)
    }
}
// showNumbers(1,2,3)
// showNumbers(4,5)
showNumbers(1)


// 9 - validação de parâmentros opcionais

function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem ?`
    }
    return `Olá ${firstName}, tudo bem ?`
}
console.log(advancedGreeting('Nelson', 'Carvalho'))
console.log(advancedGreeting('NNelson'))

//  10 - union type

function showBalance(balance: string | number){
    console.log(`o saldo da conta é R$ ${balance}`)
}
showBalance(100)
showBalance('400')
showBalance(true)

const arr2: Array<number | string | boolean |> = [1, 'teste', true]

//  11 - union types avançado

function showUserRole(role: boolean | string) {
    if(typeof role === 'boolean'){
    return 'Usuário não aprovado!'
    }
    return `A função do usuário é: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole('Admin'))

//  12 - type alias
type ID = string | number

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}
showId(1)
showId('200')
showId(123)

// 13 - interface
interface Point{
    x: number
    y: number
    z: number
}
function showCoords(obj: Point){
    console.log(`X: ${obj.x} Y: ${obj.y} ZZ: ${obj.z}`)
}
const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}
showCoords(coordObj)

// 14 - type alias e interfaces
interface Person {
    name: string
}
interface Person {
    age: number
}
const somePerson = {name: 'Nelson', age: 27}
console.log(somePerson)

type personType = {
    name: string
}

//  15 - Literal types
let test: 'testando'
test = 'testando'
console.log(test)

function showDirection(direction: 'left' | 'right' | 'center'){
    console.log(`A direção é: ${direction}`)
}
showDirection('center')

// 16 - Non-null Assertion Operators

const p = document.querySelector('#some-p')
console.log(p!.innerText)
