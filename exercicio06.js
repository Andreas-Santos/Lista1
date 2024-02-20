/*
    6. Faça uma função que mostre o dobro do número passado. Caso o número seja menor
    ou igual a zero deve mostrar a mensagem “Só é aceito números positivos maiores que
    zero”.
*/

function dobrarNumero(a) {
    if(a > 0){
        console.log(a*2)
    }else{
        console.log("Só é aceito números positivos maiores que zero")
    }
}

console.log("Número passado para a função: 25")
dobrarNumero(25)

console.log("\nNúmero passado para a função: -4")
dobrarNumero(-4)

console.log("\nNúmero passado para a função: 0")
dobrarNumero(0)