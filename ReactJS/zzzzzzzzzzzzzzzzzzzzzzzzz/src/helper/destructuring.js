/* 
* La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables. 
*/
//* Con Arrays

const numeros = [1,2,3]

// Sin destructuring
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2]
console.log(uno, dos, tres)  // 1 2 3

// Con destructuring
const [one, two, three] = numeros
console.log(numeros)  // [1, 2, 3]

//* Con Objetos
const persona = {
    nombre:'Daniel',
    apellido:'Calderon',
    edad:43
}

const {nombre, apellido, edad} = persona
console.log(nombre, apellido, edad)
