let persona = {
	nombre: 'Daniel',
	apellido: 'Calderon',
	edad: 42,
	direccion: 'Uspallata 1424',
	email: 'ddaniel_calderon@hotmail.com',
}
// Lo realizamos de la siguiente manera de
persona.telefono = '5118532'
// comprobamos
console.log(persona)

// eliminamos de la siguiente manera de
delete persona.email
delete persona.telefono

console.log(persona)
