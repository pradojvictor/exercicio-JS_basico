// Exemplo 20 | Descrição |
// `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console  
//  conforme instruções: 
//    a) números de 1 a 50  
//    b) quando chegar no número 25 interrompa a instrução e pare o loop 
//    c) quando chegar no número 10 pule a instrução|




for (var i = 1; i <= 50; i++) {
     console.log(`conte até ${i}`);
}

for (var i = 1; i <= 50; i++) {
    if ( i === 26) {break}
    console.log(`pare em ${i}`);
}

for (var i = 1; i <= 50; i++) {
    if ( i === 10) {continue}
    console.log(`continue em ${i}`);
}








