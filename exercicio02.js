/* 
    2. Faça um programa que mostre os números impares em um intervalo de 0 a 100.
*/
console.log("Números impares entre 0 e 100:")
for(let x = 1; x <= 100; x++){
    if(x % 2 == 1){
        console.log(x);
    }
}