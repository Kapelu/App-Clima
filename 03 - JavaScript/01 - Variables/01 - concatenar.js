// Concatenar variables : Concatenar es unir 2 o más variables

var primerNombre = 'Daniel'
var segundoNombre = 'Dario'
var apellido = 'Calderon'

console.log(primerNombre + ' ' + segundoNombre + ' ' + apellido)
// Otra forma de mandar a llamar una variables es a traves de los simbolos ${}.
console.log(`${primerNombre} ${segundoNombre} ${apellido}`)

var x = primerNombre + 2 + 4
console.log(x)

x = primerNombre + (2 + 4)
console.log(x)

x = 2 + 4 + primerNombre
console.log(x)
