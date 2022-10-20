/*
* nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
* Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la * posición 7 de la secuencia.
* Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
* Como ejercicio adicional y completamente opcional, al terminar de resolver * este problema pueden intentar definir funciones que logren los mismos     * resultados pero de manera iterativa.
*/

function nFibonacci(n) {
    return n === 0 || n === 1 ? n : (n - 1) + (n - 2)
}
console.log(nFibonacci(8));



// sin recursion

function fibonacci (num){
    let fibo=[0,1]
    for (let i=2; i <= num; i++){
        fibo[i]=fibo[i - 1] + fibo[i - 2]
    }
    return fibo
}

console.log(fibonacci(13))

