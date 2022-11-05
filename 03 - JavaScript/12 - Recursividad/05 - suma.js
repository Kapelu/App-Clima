/*
Escribí una función llamada recursiveRange que reciba como único argumento un número, y retorne la suma de todos los números enteros desde 0 hasta dicho número.
Ejemplos: 
recursiveRange(6) debería retornar 21
recursiveRange(10) debería retornar 55
*/
function recursiveRange(num) {
    return num === 0 ? num :  num + recursiveRange (--num)
}
console.log(recursiveRange(6))  // 21
console.log(recursiveRange(10))  // 55
console.log(recursiveRange(645))  // 208335
