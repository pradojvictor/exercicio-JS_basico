// Exemplo 08 | Descrição |
// `Semaforo, sinal ou sinaleira?` | Utilizando os conceitos que estudamos, vamos criar um programa 
//  que funcionará como um sinal de transito. |



let sinal = 'vermelho'
if (sinal === 'vermelho') {
    console.log('PARE')
} else if (sinal === 'amarelo'){
    console.log('ATENÇÃO')
} else if (sinal === 'verde'){
    console.log('PASSE')
} else {
    console.log(`${sinal} não está funcionando.`)
}
