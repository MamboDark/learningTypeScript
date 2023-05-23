// 1 - type guard
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

// 2 - checando se valor existe
function operations(arr: number[], operation: string | undefined){
    if(operation){
        if(operation == 'sum'){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if(operation === 'multiply'){
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log('por favor, defina uma operação')
    }
}
operations([1,3,3]'multiply')
operations([1,2,3]'sum')

// 3 - instanceof
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

// 4 - operador in
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
  