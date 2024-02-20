/*
    8. Escreva uma função que recebe uma string como argumento e retorna o número de
    vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).
*/

function contarVogais(string) {
    let qtdVogais = 0;
    
    for(let x = 0; x < string.length; x++){
        if(string[x] === 'a' || string[x] === 'e' || string[x] === 'i'
            || string[x] === 'o' || string[x] === 'u'){
            qtdVogais++;
        }
    }

    if(qtdVogais !== 0){
        console.log('A string: "' + string + '" contém ' + qtdVogais + " vogais minúsculas")
    }else{
        console.log('A string: "' + string + '" não contém vogais minúsculas')
    }
}

console.log('String passada para a função: "Frase teste"')
contarVogais("Frase teste")
console.log();

console.log('String passada para a função: "fdrtgr"')
contarVogais("fdrtgr")