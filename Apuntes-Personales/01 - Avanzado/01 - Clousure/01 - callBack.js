/*
? CallBack
Una función de callback es una función que se pasa a otra función como un argumento, y se ejecuta despues que se haya completado alguna rutina o acción. CallBack es una forma de asegurarnos de que un determinado codigo no se ejecuta hasta que otro codigo haya terminado de ejecutarse.
https://www.youtube.com/watch?v=zQVnDW8SaA0
*/

function callback(){
	console.log("Soy un CallBack")
}
function mensaje(funcion){
	funcion()
}
mensaje(callback)


// ************************************************************************

function cache(callBack) {
	setTimeout(function () {
		console.log('Se ejecuta Primero') //Se ejecuta Primero (despues de 3 segundo)
		callBack()
	}, 3000)
}
function callBack() {
	console.log('Se ejecuta Segundo') //Se ejecuta Segundo (Justamente despues deprimero)
}
cache(callBack)