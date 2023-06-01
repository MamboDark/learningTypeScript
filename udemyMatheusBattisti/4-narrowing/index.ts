/* 1 - typeof type guard
O tpe guard é basicamente uma validação do tipo utilizando o typeof;
Desta maneira podemos comparar o retorno do operador com um possível tipo;
Todos os dados vem como string, exemplo: 'string', 'number', 'boolean';
E a partir disso realizamos as bifurcações;*/
console.log('|===== typeof type guard =====|')
function sum(a: number | string, b: number | string){
    if( typeof a === 'string' && typeof b === 'string'){
        console.log(parseFloat(a) + parseFloat(b))
    }else if (typeof a === 'number' && typeof b === 'number'){
        console.log(a + b)
    } else {
        console.log('Impossível realizar a soma!')
    }
}
sum('4', '59')
sum(12, 42.3)
sum('5', 6)

/* 2 - checando se valor existe
Em JavaScript podemos colocar uma variável em um if, se houver algum valor recebemos um true;
Quando não há valor em um false;
Desta maneira conseguimos realizar o narrowing também, é uma outra estratégia bem utilziada;*/
console.log('|===== CHECANDO SE VALOR EXISTE =====|')
const operations = (arr: number[], operation: string | undefined) => {
    if(operation){
        if(operation === 'sum'){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if(operation === 'multiply'){
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log('Por favor, defina uma operação!')
    }
}
console.log('Undefined: ')// array passado más prpositalmente não foi passado a operação assim chamando o else.
operations([1,3,3])
console.log('Multiplicando: ')
operations([1, ,3], 'multiply')
console.log('Somando: ')
operations([1,2,3], 'sum')

/* 3 - operador instanceof
Para além dos tipos primitivos, podemos trabalhar com instanceof;
Checando se um dado pertence a uma determinada classe;
E ele vai servir até para as nossas próprias classes;*/
console.log('|===== OPERADOR INSTANCEOF =====|')
class User {
    name
    constructor(name: string){
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name:string){
        super(name)
    }
}
const nelson = new User('Nelson')
const paul = new SuperUser('Paul')

console.log(nelson)
console.log(paul)

function userGreeting(user: object){
    if(user instanceof SuperUser){
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User){
        console.log(`Olá ${user.name}`)
    }
}
userGreeting(nelson)
userGreeting(paul)

class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      console.log("Um novo objeto Person foi criado.");
    }
  }
  
  // Criando uma nova instância da classe Person
  const person = new Person("João", 25);
console.log(person)
  

/* 4 - operador in
O operador in é utilizado para checar se existe uma propriedade no objeto;
Outro recurso interessante para o narrowing;
Pois proprieades também podem ser opcionais;*/
console.log('|===== OPERADOR IN =====|')
class Dog {
    name
    breed

    constructor(name: string, breed?: string){
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}
function showDogDetails(dog: Dog){
    if('breed' in dog) {
        console.log(`O cachorro é a raça ${dog.breed}`)
    } else {
        console.log('O chachorro é um SRD')
    }
}
// Parametros
const turca = new Dog('Turca')
const bob = new Dog('Bob', 'Pastor Alemão')
// Rodando função
showDogDetails(turca)
showDogDetails(bob)

// 5 - Desafio 3
function processReview(review: boolean | number): string {
    if (typeof review === 'boolean') {
      return "O usuário não deixou uma revisão.";
    } else if (typeof review === 'number') {
      if (review >= 1 && review <= 5) {
        switch (review) {
          case 1:
            return "Avaliação de 1 estrela: Muito insatisfeito.";
          case 2:
            return "Avaliação de 2 estrelas: Insatisfeito.";
          case 3:
            return "Avaliação de 3 estrelas: Neutro.";
          case 4:
            return "Avaliação de 4 estrelas: Satisfeito.";
          case 5:
            return "Avaliação de 5 estrelas: Muito satisfeito.";
        }
      } else {
        return "Avaliação inválida. Por favor, forneça um número entre 1 e 5.";
      }
    } else {
      return "Tipo de revisão inválido. Por favor, forneça um booleano ou um número.";
    }
  }
  
  // Exemplos de uso:
  console.log(processReview(4)); // Avaliação de 4 estrelas: Satisfeito.
  console.log(processReview(2)); // Avaliação de 2 estrelas: Insatisfeito.
  console.log(processReview(true)); // O usuário não deixou uma revisão.
  console.log(processReview(false)); // O usuário não deixou uma revisão.
  console.log(processReview(6)); // Avaliação inválida. Por favor, forneça um número entre 1 e 5.
  console.log(processReview("review")); // Tipo de revisão inválido. Por favor, forneça um booleano ou um número.

  // resposta:

  type Review = number | boolean
  
  function showUserReview(review: Review) {
    if(!review){
        console.log('Você não avaliou o produto!')
        return
    }
    console.log(`A nota que você deu foi: ${review}, obrigado!`)
  }
  showUserReview(false)
  showUserReview(5)
  showUserReview(2)
  