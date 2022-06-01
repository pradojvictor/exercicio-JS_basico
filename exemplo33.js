// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.



function numero(valor) {
   if (valor%2 === 0) {
      return "O numero é par"
   } else {
      return " O numero é impar"
   }
}
console.log(numero(3));