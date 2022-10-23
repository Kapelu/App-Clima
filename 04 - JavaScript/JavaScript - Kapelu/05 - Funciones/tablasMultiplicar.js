function tablaDeMultiplicar(num){
    for (let i = 0; i <=10; i++){
        let resultado = num * i 
        console.table(`${num} x ${i} = ${resultado}`)
    }
}
tablaDeMultiplicar(5)
