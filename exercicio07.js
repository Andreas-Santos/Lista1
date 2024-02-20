/*
    7. Escreva uma função que receba uma string como argumento e retorne a string
    invertida.
*/

function inverterString(string) {
    stringInvertida = ""

    for(let x = string.length - 1; x >= 0; x--) {
        stringInvertida += string[x]
    }

    console.log(stringInvertida)
}

console.log("String passada para a função:")
console.log('"Quero inverter essa frase!"\n')

inverterString("Quero inverter essa frase!")