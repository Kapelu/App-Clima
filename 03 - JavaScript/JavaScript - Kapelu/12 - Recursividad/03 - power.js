/* 
Escribí una función llamada power que reciba dos parámetros: base y exponente. La función deberá retornar la potenciación correspondiente - es decir, la base elevada al exponente.
Nota: recuerden contemplar el caso de las potenciaciones con exponente 0
Ejemplos:
power(2,0) debería retornar 1
power(2,2) debería retornar 4
power(2,4) debería retornar 16
*/
function power(base, exponent) {
    return exponent === 0 ? 1 :  base * power(base, exponent - 1)
}
console.log(power(2, 0))  // 1 
console.log(power(2, 2))  // 4 
console.log(power(2, 4))  // 16
console.log(power(2, 3))  // 8 
