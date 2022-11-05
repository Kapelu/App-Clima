function numeroPar(num){
    let numero = ( num % 2 == 0) ? `${num} es un número PAR` : `${num} es un número IMPAR`
    return numero
}
numeroPar(4)    // 4 es un número PAR
numeroPar(9)    // 9 es un número IMPAR