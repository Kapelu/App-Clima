function calculate(num1, num2, callbackFunction) {
	return callbackFunction(num1, num2)
}

function suma(num1, num2) {
	return num1 + num2
}
function resta(num1, num2) {
	return num1 - num2
}
function multiplicacion(num1, num2) {
	return num1 * num2
}
function division(num1, num2) {
	return num1 / num2
}

console.log(calculate(15, 5, suma))

console.log(calculate(15, 5, resta))

console.log(calculate(15, 5, multiplicacion))

console.log(calculate(15, 5, division))
