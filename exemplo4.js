// Exemplo 04 | Descrição |
// `Quero lucrar` | Crie um programa que me diga como lucrar nesta situação: quero vender
// uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?



function queroLucra() {
    return ((300/0.6)*1.25)
}
console.log( 'venda a' + ' ' + queroLucra() + ' ' + 'para lucrar 25%');