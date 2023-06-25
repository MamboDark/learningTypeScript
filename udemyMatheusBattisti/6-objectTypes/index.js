/* O que são  Object Types?
São os dados que tem como o tipo objeto, por exemplo: object literals e arrays;
Temos diversos recursos para explorar sobre estes tipos;
Como: interfaces, readonly, tupla e outros;
Isso nos dá possibilidades a mais para o JavaScript;
Nesta seção focaremos nestes detalhes que são super importantes para o TypeScript;*/
function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvailable) {
        console.log('O produto está disponível');
    }
    var shirt = {
        name: 'Camisa',
        price: 20.00,
        isAvailable: true
    };
    showProductDetails(shirt);
    showProductDetails({ name: 'Calça', price: 100.00, isAvailable: false });
}
