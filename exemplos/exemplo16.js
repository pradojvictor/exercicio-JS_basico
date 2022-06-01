// | Exemplo 16 | Descrição |
// `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. 
// por exemplo:  3! = 3 * 2 * 1 // 6 |



var fatorial = 4;
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado);


function factorial(numero) {
    if (numero > 1) {
        return numero * factorial(numero - 1);
    }
    return 1;
}
console.log(factorial(4));