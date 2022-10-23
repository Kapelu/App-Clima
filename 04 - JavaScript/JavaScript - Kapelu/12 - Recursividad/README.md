# Recursion

*Recursión es cuando una función sigue llamándose a sí misma, hasta que ya no tiene que hacerlo.*

*La función sigue llamándose a sí misma, cada vez con una entrada menor hasta que eventualmente se detiene.*

*Pero, la función no decide por sí misma cuando parar. Nosotros le decimos cuando. Nosotros le damos a la función una condición conocida como caso base.*

*El caso base es la condición que le dice a la función cuando dejar de llamarse a sí misma. Es como decirle a la función cuál será la última vuelta de la carrera para que se detenga después de la última vuelta.*

```js
let cuentaAtras = (numero) => {
	if (numero === 0) return
	console.log(numero)
	return cuentaAtras(numero - 1)
}
console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1
```
