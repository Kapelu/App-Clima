/*
* nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un    * número natural, su factorial (representado como n!) es el producto de n   * por todos los números naturales menores que él y mayores a 0. Ejemplo:    * 5! = 5 * 4 * 3 * 2 * 1 = 120
*/

function nFactorial(n) {
    let factorial = n <= 1 ? 1 : n * nFactorial(n - 1);
    return factorial;
}
console.log(nFactorial(5));