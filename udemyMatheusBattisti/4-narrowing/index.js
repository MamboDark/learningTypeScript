var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1 - type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossível realizar a soma!');
    }
}
sum('4', '59');
sum(12, 42.3);
sum('5', 6);
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation == 'sum') {
            var sum_1 = arr.reduce(function (i, total) { return i + total; });
            console.log(sum_1);
        }
        else if (operation === 'multiply') {
            var multiply = arr.reduce(function (i, total) { return i * total; });
            console.log(multiply);
        }
    }
    else {
        console.log('por favor, defina uma operação');
    }
}
operations([1, 3, 3], 'multiply');
operations([1, 2, 3], 'sum');
// 3 - instanceof
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name) {
        return _super.call(this, name) || this;
    }
    return SuperUser;
}(User));
var nelson = new User('Nelson');
var paul = new SuperUser('Paul');
console.log(nelson);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log("Ol\u00E1 ".concat(user.name, ", deseja ver os dados do sistema?"));
    }
    else if (user instanceof User) {
        console.log("Ol\u00E1 ".concat(user.name));
    }
}
userGreeting(nelson);
userGreeting(paul);
// 4 - operador in
var Dog = /** @class */ (function () {
    function Dog(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
    return Dog;
}());
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log("O cachorro \u00E9 a ra\u00E7a ".concat(dog.breed));
    }
    else {
        console.log('O chachorro é um SRD');
    }
}
// Parametros
var turca = new Dog('Turca');
var bob = new Dog('Bob', 'Pastor Alemão');
// Rodando função
showDogDetails(turca);
showDogDetails(bob);
// 5 - Desafio 3
function processReview(review) {
    if (typeof review === 'boolean') {
        return "O usuário não deixou uma revisão.";
    }
    else if (typeof review === 'number') {
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
        }
        else {
            return "Avaliação inválida. Por favor, forneça um número entre 1 e 5.";
        }
    }
    else {
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
function showUserReview(review) {
    if (!review) {
        console.log('Você não avaliou o produto!');
        return;
    }
    console.log("A nota que voc\u00EA deu foi: ".concat(review, ", obrigado!"));
}
showUserReview(false);
showUserReview(5);
showUserReview(2);
