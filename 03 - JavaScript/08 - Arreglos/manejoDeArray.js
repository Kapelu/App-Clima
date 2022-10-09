// Crear un array
const autos = ['BMW', 'Volvo', 'Fiat', 'Ferrari', 'Ford']
const nombre = ['Martina', 'Thomás', 'Lucia', 'Belen', 'Agustin', 'Tatiana']
const numeros = [1, 2, 3, 6, 5, 4]
const comidas = ['Desayunar', 'Almorzar', 'Comer', 'Merendar', 'Cenar']

// Acceder mediante su indice
let primero = autos[0]
let segundo = autos[2]
let ultimo = autos[autos.length - 1]
console.log(primero)
console.log(segundo)
console.log(ultimo)

// Recorrer un array
/* Usando for */
for (let i = 0; i < numeros.length; i++) {
	console.log(numeros[i])
}
/* Usando forEach */
comidas.forEach((comida, index) => {
	console.log(`${index} : ${comida}`)
})

// Añadir elemento al final (.push)
let añadirUltimo = autos.push('Scania')
console.log(autos);

// Eliminar ultimo elemento (.pop)
let eliminarUltimo = autos.pop('Scania')
console.log(autos);



