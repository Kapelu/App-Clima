const persona = {
	nombre: 'Daniel',
	apellido: 'Calderon',
	edad: 42,
	email: 'danielcalderon@gmail.com',
	user: 'kapelusz',
	password: '159753',
	hobby: ['correr', 'cocinar', 'leer', 'manejar'],
	saludar: function () {
		return (
			'Hola, Soy ' + persona.nombre + ' y tengo ' + persona.edad + ' años'
		)
	},
	estado: {
		fisico: {peso: '70', estatura: '1,69'},
		salud: {presion: '70/120', pulsaciones: '170'},
	},
}
console.log(persona)

//***************   OBJECT DESTRUCTURING (Algo asi como estraer del objeto)   ***************//
/*
'Destructuring' permite extraer una propiedad y crear una variable, todo en un solo paso. Básicamente seria acceder a las propiedades de un objeto y asignarlos a una variable.  tiene una sintaxis una sintaxis muy particular que seria algo asi ==> let {salud} = perosona  ==> let {'propiedad' ó 'propiedades'} = 'nombre del objeto'. 

Veamos un ejemplo: teniendo en cuenta el objeto persona que habiamos creado.

let {nombre, edad} = persona  // Si creamos esta variable

console.log(nombre)    // Daniel
console.log(apellido)  // apellido in not defined
console.log(edad)      // 42


console.log(nombre)    // Daniel
console.log(apellido)  // Calderon
console.log(edad)      // 42
*/

//***************   OBJECT DESTRUCTURING DE OBJETOS ANIDADOS   ***************//
/*
vamos a crear tres variables para ver como desestructurar objetos, dentro de un objeto. 
la primera es 'fisico'
la segunda es 'peso'
la tercera es 'presion'
observen la forma en la que se van creando las diferentes estructuras de llaves.
*/

let {
	nombre,
	apellido,
	estado: {fisico},
	estado: {
		fisico: {peso},
	},
	estado: {
		salud: {presion},
	},
} = persona

console.log(nombre)
console.log(apellido)
console.log(fisico)
console.log(peso)
console.log(presion)
