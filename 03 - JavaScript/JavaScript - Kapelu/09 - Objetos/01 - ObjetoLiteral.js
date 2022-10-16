// Vamos a crear un objeto literal llamado 'persona', sobre el cual vamos a ir trabajando. Este objeto va a contar con valores por defecto y vamos a ir agregandole propiedades e ir trabajando sobre ellas.

const persona = {
	nombre: 'Daniel',
	apellido: 'Calderon',
	edad: 42,
	email: 'danielcalderon@gmail.com',
}
// vemos en consola el objeto
/* accedemos a los valores del objeto con notacion de punto*/
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.email)
console.log(persona)

/* accedemos a los valores del objeto con notacion de punto*/
console.log(persona['nombre'])
console.log(persona['apellido'])
console.log(persona['edad'] + ' años')
console.log(persona['email'])

// agregaremos una propiedad y su respectivo valor (key:value) de ususario y password
persona.user = 'kapelusz'
persona.password = '159753'
console.log(persona)

// Ahora agregaremos una propiedad hobby, pero que sus valores sean un array
persona.hobby = ['correr', 'cocinar']
console.log(persona)

// Agregaremos un elemento mas al array de hobby
persona.hobby.push('leer', 'manejar')
console.log(persona.hobby)

// Ahora crearemos una propiedad saludar con volar de una función que sea saludar y que diga su nombre, edad.
persona.saludar = function () {
	return 'Hola, Soy ' + persona.nombre + ' y tengo ' + persona.edad + ' años'
}
console.log(persona.saludar())

// Ahora crearemos una propiedad salud con valor de un objeto - (o sea un objeto dentro de un objeto)
persona.salud = {peso: '70', estatura: '1,69'}
console.log(persona.salud)
