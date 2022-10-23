function parImpar(num){
    let numero = num % 2 === 0 ? `${num} es PAR`:`${num} es IMPAR`
    return numero
}

console.log(parImpar(4))
