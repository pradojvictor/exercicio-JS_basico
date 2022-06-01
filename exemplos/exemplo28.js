// Solicite o preço de uma mercadoria e o percentual 
// de desconto. Exiba no console o valor do desconto e o preço a pagar.


function preco(valor, porcentagem) {
    var porcentage = (valor * (porcentagem/100))
    var valorFinal = (valor - porcentage)
    return `desconto de ${porcentage}% e valor final ${valorFinal} reais`
}
console.log(preco(100,10));