/* 
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
*/

var numero = [1, 5, 10, 15]
var conMap = numero.map(function(x){return x * 2})

numero
conMap

/*************************************************/

var numeros = [1, 4, 9]
var cuadrado = numeros.map(function(num){return Math.sqrt(num)})

 numeros
cuadrado

/*************************************************/

let prefijos = ["super", "spider", "ant", "iron"]
let sufijo = "man"

let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo)

nombresCompletos

/*************************************************/

let prefijos1 = ["wonder", "spider", "ant", "iron"]
let hombre = "man"
let mujer = "woman"

let nombresCompletos1 = prefijos1.map(function(prefijo, indice){return (indice == 0) ? prefijo + mujer : prefijo + hombre})

nombresCompletos1