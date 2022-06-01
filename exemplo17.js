// | Exemplo 17 | Descrição |
// `Multiplica` | Crie uma função que recebe 2 parâmetros e retorna a multiplicação entre else. |

function somaMedia(nota1,nota2) {
    var media = (nota1 + nota2)/2
    if (media%2 === 0){
        return "foda-se"
    } else {
        return "vai te lasca"
    }
} console.log(somaMedia(2,3));