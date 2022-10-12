function saludar(nombre) {
	alert('Hola ' + nombre)
}

function usuario() {
	let nombre = prompt('Por favor ingresa tu nombre.')
	saludar(nombre)
}
usuario(saludar)
