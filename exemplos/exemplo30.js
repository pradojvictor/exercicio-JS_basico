// Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do 
// garçom (10%) e o valor total a ser pago.


function preco(valor) {
   var taxa = (valor * (10/100))
   var valorFinal = (valor + taxa)
   return `taxa do garçom é ${taxa} reais e o valor final ${valorFinal} reais`
}
console.log(preco(100));