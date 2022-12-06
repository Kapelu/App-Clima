let cuentaAtras = (numero) => {
	if (numero === 0) return
	console.log(numero)
	return cuentaAtras(numero - 1)
}
console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1
