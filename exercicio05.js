/*
    5. Escreva um programa que imprima os números de 1 a 10 no console usando um loop.
    Os número devem ser separados com um traço, ex.: 1 – 2 – 3 - ... – 10. Observação:
    após o número 10 não pode ter um traço.
*/

let string = ""

for(let x = 1; x <= 10; x++){
    string += x + " "
    if(x < 10){
        string += "- "
    }
}

console.log(string)