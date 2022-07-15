function tablaDeMultiplicar(num, hasta){
    for (let i = 0; i <=hasta; i++){
        let resultado = num * i 
        console.table(`${num} x ${i} = ${resultado}`)
    }
}
tablaDeMultiplicar(7,10)