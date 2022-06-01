// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles,
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".


function maior(numero1, numero2) {
   if (numero1 > numero2) {
      return "numero 1 é o maior"
   } if  (numero1 == numero2) {
      return "os numeros são iguas"
   } else {
      return "numero 2 é o maior"
   } 
}
console.log(maior(2,2));


