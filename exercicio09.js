/*
    9. Escreva uma função que recebe um endereço de e-mail como argumento e retorna
    true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um
    único símbolo '@' e pelo menos um ponto '.' após o '@'.
*/

function validarEmail(email) {

    //váriavel que guarda em qual caractere da string está o arroba
    const indexArroba = email.indexOf('@')
    
    //verifica se a string não possuí arroba, ou se possuí mais de 1 arroba
    if(indexArroba === -1 || email.indexOf('@', indexArroba + 1) !== -1) {
        return false
    }

    //váriavel que guarda em qual caractere está o ponto, a partir da localização do arroba
    const indexPonto = email.indexOf('.', indexArroba)

    //verifica se a string não possuí ponto
    if(indexPonto === -1) {
        return false
    }

    return true
}

console.log("andreas.teste@facens")
console.log(validarEmail("andreas.teste@facens") + "\n")

console.log("email.teste@facens.br")
console.log(validarEmail("email.teste@facens.br") + "\n")

console.log("andreas@@facens.br")
console.log(validarEmail("andreas@@facens.br") + "\n")

console.log("teste@facens.br")
console.log(validarEmail("teste@facens.br") + "\n")