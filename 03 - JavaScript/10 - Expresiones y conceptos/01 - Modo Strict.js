/*
MODO STRICT ==> Cuando empzamos a utilizar una variable en javascript sin haberla declarado no nos va a indicar error, sin embargo existe el modo strict para evitar ese tipo de problemas, sobre todo en proyectos grandes
*/

'use strict'

//x = 10  // x is not defined
//console.log(x)

miFuncion() // y is not defined

function miFuncion() {
	'use strict'
	y = 15
	console.log(y)
}
