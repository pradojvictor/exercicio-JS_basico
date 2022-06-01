// Exemplo 13 | Descrição |
// `Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. |

function tabuada(n) {

    for ( var i=1; i<=10; i++){
    console.log(`${n} x ${i} = ${i*n}`);
    }
}
tabuada(2);