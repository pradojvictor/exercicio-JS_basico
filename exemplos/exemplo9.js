// Exemplo 09 | Descrição |
// `FizzBuzz` | Utilizando os conceitos que estudamos, vamos criar um programa que irá imprimir 'FizzBuzz'
// para números divisiveis por 3 e 5, para números divisíveis por 3 irá impirmir 'Fizz' e 
// para números divisíveis por 5 irá imprimir 'Buzz' e por fim, se não cumprir nenhum dos casos 
// acima imprime o próprio número. |

function numeroFizzbuzz(numero) {
    if (numero % 5 ===0 && numero % 3 ===0) {
        return "FizzBuzz"
    } if (numero % 5 ===0) {
        return "Buzz"
    } if (numero % 3 ===0) {
        return "Fizz"
    } if (typeof numero !== Number){
        return "não é um numero"
    } return "numero"  
}
console.log(numeroFizzbuzz());