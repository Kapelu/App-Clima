// Scope de una variable

// Alcance global
var nombre = 'Daniel'
function saludo() {
   console.log(`Hola, mi nombre es ${nombre}`)
}
saludo()

// Alcance de función
function saludo1() {
  var nombre1 = 'Daniel'
  console.log(`Hola, mi nombre es ${nombre1}`)
}
saludo1()

/* Para entenderlo mejor observaremos que si llamamos a traves de un console.log a las variables nombre y nombre1, nos daremos cuenta que nombre1 al estar declarada dentro de una funcion con 'var' no es posible llamarla desde afuera dela función.
*/
console.log(`${nombre}`)
console.log(`${nombre1}`)
