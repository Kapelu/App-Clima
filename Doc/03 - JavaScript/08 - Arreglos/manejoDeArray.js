// Crear un array
const nombre = ['Martina', 'Thomas', 'Lucia', 'Dario', 'Nilda', 'Octavio']
console.log(nombre)
console.log(Object.values(nombre))  // Object.values => Indica los valores dentro del array
console.log(Object.keys(nombre))  // Object.keys => Indica el indice que ocupan esos valores

// Acceder mediante su indice
const primero = nombre[0]
const segundo = nombre[2]
const ultimo = nombre[nombre.length - 1]
console.log(primero)
console.log(segundo)
console.log(ultimo)

// Recorrer un array
/* Usando for */
for (let i = 0; i < nombre.length; i++) {
	console.log(nombre[i])
}
/* Usando forEach */
nombre.forEach((nombre, index) => {
	console.log(`${index} : ${nombre}`)
})

// Añadir elemento al final (.push)
const añadirUltimo = nombre.push('Natalia')
console.log(nombre)

// Eliminar ultimo elemento (.pop)
const eliminarUltimo = nombre.pop('Natalia')
console.log(nombre)

// Ingresar primer elemento (.unshift)
const ingresarPrimero = nombre.unshift('Natalia')
console.log(nombre)

//Eliminar primer elemento (.shift)
const eliminarPrimero = nombre.shift('Natalia')
console.log(nombre)

// Encontrar el indice de un elemento
const encontrarElemento = nombre.indexOf('Thomas')
console.log(encontrarElemento)

// Eliminar un elemento mediante la posicion
const sacarElemento = nombre.splice(3,5)
console.log(sacarElemento);
console.log(nombre)

