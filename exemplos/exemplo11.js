// Exemplo 11 | Descrição |
// `IMC` | Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg. |



function seuImc(altura, peso) {
   let imc = (peso /( altura * altura))

   if (imc < 18.5) {
       return imc + ' peso baixo'
   } if (imc >= 18.5 && imc < 24.9) {
       return imc + ' peso normal ou adequado'
   } if (imc >= 25 && imc < 29.9) {
       return imc + ' sobrepeso'
   } if (imc >= 30.0 && imc < 34.9) {
       return imc + ' obesidade grau I'
   } if (imc >= 35 && imc < 39.9) {
       return imc + ' obesidade grau II'
   } if (imc >= 40) {
       return imc + ' obesidade grau III ou mobidade'
   }

}
console.log('Seu imc é :' + ' ' + seuImc(1.84,85));