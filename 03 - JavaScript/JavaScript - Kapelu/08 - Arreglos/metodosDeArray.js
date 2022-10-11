const nombre = ['Martina', 'Thomas', 'Lucia', 'Dario', 'Nilda', 'Octavio']
const nombre1 = ['Martina', 'Thomas', 'Lucia']
const nombre2 = ['Dario', 'Nilda', 'Octavio']

/* Método .at()
 * Recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.
 */
let index = 2
console.log(
	`Usando un indice de ${index} el elemento de retorno es ${nombre.at(index)}`
)

index = -2
console.log(
	`Usando un indice de ${index} el elemento de retorno es ${nombre.at(index)}`
)

/* Método .concat()
 * Se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
 */
const nuevoNombre = nombre1.concat(nombre2)
console.log(nuevoNombre)

// USANDO spread operator
console.log([...nombre1, ...nombre2])

let numeros = [10, 20, 30, 40]
console.log([...numeros, 50, 60, 70])
