/* 
Escribí una función llamada `productOfArray` que reciba un arreglo de números y retorne el producto de todos ellos.
Ejemplos:
productOfArray([1,2,3]) debería retornar 6
productOfArray([1,2,3,10]) debería retornar 60
*/
// ¿multiplicar array?
var a = [1, 2, 3].map(function(x) { return x * 5; });

a

//var a = [1, 2, 3].map(function(x) x * 5);


function productOfArray(arr) {
	return arr.map(()=>arr * arr -1)
	//return arr === 1 ? arr :  arr * productOfArray(arr) -1
}

const arr = [1, 2, 3, 10]
console.log(arr)
console.log(productOfArray(arr))
