/*
    10. Escreva uma função que verifique se uma determinada string é um palíndromo (ou
    seja, pode ser lida da mesma forma tanto da esquerda para a direita quanto da direita
    para a esquerda).
    Exemplo: arara
*/

function verificaString(string) {
    let stringInvertida = ""

    for(let x = string.length - 1; x >= 0; x--){
        stringInvertida += string[x]
    }

    console.log('String passada para a função: "' + string + '"')
    console.log('String invertida: ' + stringInvertida)

    if(string.toUpperCase() === stringInvertida.toUpperCase()){
        console.log("A String é um palíndromo!\n")
    }else{
        console.log("A String não é um palíndromo!\n")
    }
}

verificaString("Arara")
verificaString("Batata")
verificaString("Radar")