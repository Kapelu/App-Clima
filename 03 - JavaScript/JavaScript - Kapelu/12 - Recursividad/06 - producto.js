/* 
Escribí una función llamada `productOfArray` que reciba un arreglo de números y retorne el producto de todos ellos.
Ejemplos:
productOfArray([1,2,3]) debería retornar 6
productOfArray([1,2,3,10]) debería retornar 60
*/

function productOfArray(arr) {
	var multiplicar = 1
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
		multiplicar = multiplicar * arr[i]
	}
	return multiplicar
}

console.log(productOfArray([1, 2, 3]))  // 6
console.log(productOfArray([1, 2, 3,10]))  // 60
console.log(productOfArray([1, 5, 3,8]))  // 120
