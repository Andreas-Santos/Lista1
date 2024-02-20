/* 
    4. Faça um programa que recebe o nome de uma variável e mostre o
    <<primeiro>>.<<último nome>>@facens.br
*/

let nome = "Edson Martin Feitosa"
let partes = nome.split(" ") //cria uma array com todos os nomes
let primeiroNome = partes[0] //salva nessa variável o primeiro nome
let ultimoNome = partes[partes.length - 1] //salva nessa variável o último nome

console.log("E-mail para: "+ nome)
console.log(primeiroNome.toLowerCase() + "." + ultimoNome.toLowerCase() + "@facens.br") //coloca os nomes em minúsculo