function creaFunc() {
	let nombre = 'Kapelu'
	function muestraNombre() {
		console.log(nombre)
	}
	return muestraNombre
}

var miFunc = creaFunc()
miFunc()