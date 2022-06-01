// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso,
// se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.


function divisao(valor1, valor2) {
    var resultado = valor1/valor2
    if (resultado%2 === 0) {
        return ` resultado foi: ${resultado} par`
    } else {
        return `resultado foi: ${resultado}`
    }
}
console.log(divisao(2,1));



