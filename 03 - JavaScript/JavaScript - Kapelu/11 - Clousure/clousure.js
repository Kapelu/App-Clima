/*
Retorna una funcion saludar
*/
function saludar(saludo) {
	return (nombre) => saludo + ' ' + nombre + ' !'
}

saludarHola = saludar('Hola')
console.log(saludarHola('Kapelu'))

function intro(nombre) {
	var saluda = `Soy ${nombre}`
	return function () {
		console.log(saluda)
	}
}

let saludoKapelu = intro('Kapelu')

console.log(saludoKapelu())

//$ ********************************************************************/
/*
Retorna una funcion que cuando sea invocada retorne un valor creciente. El primer valor deberia ser 1. Vas a tener que usar closures.
ejemplo: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
*/
function counter(contador = 0) {
	return () => (contador = contador + 1)
}

const contador = counter()
console.log(contador())
console.log(contador())

//$ ********************************************************************/
/*
Crear la tabla dede multiplicar
*/

function multiplicador(a) {
	return (b) => a * b
}
let tablas = multiplicador(3)
console.log(tablas(5))

//$ ********************************************************************/
/*
function tablaDeMultiplicar(num, hasta){
    for (let i = 0; i <=hasta; i++){
        let resultado = num * i 
        console.table(`${num} x ${i} = ${resultado}`)
    }
}
tablaDeMultiplicar(7,10)
*/

/*
function multiplicador(num=0){
    function end(){
        let hasta=0
        for (let i = 0; i <=hasta; i++){
            let resultado = num * i 
            console.table(`${num} x ${i} = ${resultado}`)
            return resultado
    }
    return end
}
let tabla = multiplicador(2)
console.log(tabla())
*/

const miFuncion = () => {
	let miValor = 2
	console.log(miValor)

	const funcionHija = () => {
		console.log((miValor += 1))
	}

	return funcionHija
}

const resultado = miFuncion()
console.log(resultado)
resultado()
resultado()
resultado()
