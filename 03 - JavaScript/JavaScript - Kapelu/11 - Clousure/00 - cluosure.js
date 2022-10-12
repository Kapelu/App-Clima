function iniciar() {
	var nombre = 'Kapelu'  // La variable nombre es una variable local creada por iniciar.
	function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
		console.log(nombre)  // Usa una variable declarada en la función externa.
	}
	mostrarNombre()
}
iniciar()
