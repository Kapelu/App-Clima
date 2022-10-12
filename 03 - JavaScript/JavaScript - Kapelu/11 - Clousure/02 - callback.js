function saludar(nombre) {
	alert('Hola ' + nombre)
}

function procesarEntradaUsuario(saludar) {
	var nombre = prompt('Por favor ingresa tu nombre.')
	saludar(nombre)
}

procesarEntradaUsuario(saludar)
