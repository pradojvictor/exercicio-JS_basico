// Exemplo 35 | Descrição |
// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function MaiorIdade(anonascimento, anoatual) {
    var idade = (anonascimento - anoatual ) *-1
    if (idade < 18) {
        return `${idade} anos, menor de idade`
    } else {
        return `${idade} anos, maior de idade`
    }
}
console.log(MaiorIdade(2010,2022));
