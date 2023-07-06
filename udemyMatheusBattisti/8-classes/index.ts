/*1 - Campos em classes
Em TS podemos adicionar novos campos a uma classe, ou seja, iniciar a classe com campos para os futuros dados dos objetos;
Que serão a propriedades dos objetos instanciados;
Estes campos podem ser tipados também;
Note que um campo sem valor inicial, deve ser declarado com !;*/

class User {
    name!: string
    age!: number
}

const nelson = new User()

console.log(nelson)

nelson.name = 'Nelson'
//nelson.job = 'Programmer'
nelson.age = 27

console.log(nelson)

/* 2 - Constructor
Constructor é uma função que nos dá a possibilidade de iniciar um objeto com valores nos seus campos;
Isso faz com que não precisemos mais da !;
Provavelmente todos os campos serão preenchidos na hora de instanciar um objeto;*/

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const nelson = new NewUser('Nelson', 27)
console.log(nelson)
//const nelson = new NewUser('Nelson')
// const nelson = NewUser(17, 17)

/* 3 - Campos readonly
Podemos iniciar o campo com valor e torná-lo readonly;
Ou seja, será um valor só para consulta;
Não poderemos alterar este valor ao longo do programa;*/

class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}
const fusca = new Car('Fusca')
console.log(fusca)
console.log(fusca.wheels)

fusca.name = 'Fusca Turbo'

//Fusca.wheels = 5 (valor que não pode ser alterado)


/*4 - Herança e super
Para gerar uma herança utilizamos a palavra reservada extends;
Depois vamos precisar passar as propriedades da classe pai para ela, quando instanciamos um objeto;
Isso será feito com a função super;*/

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trato = new Machine('Trator')

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine('Destroyer', 4)

console.log(destroyer)

/*4 - Métodos
São como funções da classe;
Podemos criá-los junto das classes e os objetos podemos utilizálos;
É uma maneira de adicionar funcionalidades as classes;*/

class Dwarf {
    name

    constructor(name:string){
        this.name = name
    }


    greeting(){
        console.log('Hey Stranger!')
    }
}
const jimmy = new Dwarf('Jimmy')

console.log(jimmy.name)

jimmy.greeting()

console.log(jimmy)

/*5 - O this
A palavra reservada this serve para nos referirmos ao objeto em si;
Ou seja, conseguimos acessar as suas propriedades;
Esta funcionalidade funciona da mesma forma que em JavaScript;*/

class Truck {
    model
    hp

    constructor(model:string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model} , que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck('Volvo', 400)
const scania = new Truck('Volvo', 500)

volvo.showDetails()
scania.showDetails()

/*6 - Utilizando getters
Os getters são uma forma de retornar propriedades do objeto;
Porém podemos modificá-las neste retorno, isso é muito interessante;
Ou seja, é um método para ler propriedades;*/

class Person {
    name
    surname

    constructor (name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + ' ' + this.surname
    }
}

const nelsonCarvalho = new Person('Nelson','Carvalho')
console.log(nelsonCarvalho.name)
console.log(nelsonCarvalho.surname)
console.log(nelsonCarvalho.fullName)


/* 7 - Setters
Os getters leem propriedades, os setters as modificam/atribuem;
Logo, podemos fazer validações antes de inserir uma propriedade;
Os setters também funcionam como métodos;*/

class Coords {
    x!: number
    y!: number
    set fillx(x: number) {
        if (x === 0) {
            return
        }

        this.x = x
        console.log('X inserido com sucesso')

    }

    set filly(y: number) {
        if (y === 0) {
            return
        }

        this.y = y
        console.log('Y inserido com sucesso')

    }

    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()
myCoords.fillx = 15
myCoords.filly = 0

console.log(myCoords)
console.log(myCoords.getCoords)

/*8 - Herança de interfaces
Podemos herdar de interfaces também com a instrção implements;
A ideia é bem parecida de extends;
Porém esta forma é mais utilizada para criar os métodos que várias classes terão em comum;*/

interface showTittle {
    itemTittle(): string
}

class blogPost implements showTittle {

    tittle

    constructor(tittle: string) {
        this.tittle = tittle
    }
    itemTittle() {
        console.log(this.tittle)
    }
}

/**/

