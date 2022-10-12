# Closures

*Una clausura o closure permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.*

### ***Ámbito léxico***
*Consideremos el siguiente ejemplo:*

```js
function iniciar() {
  let nombre = "Kapelu";  // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
    console.log(nombre)  // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();
```

*La `función iniciar()` crea una variable local llamada `nombre` y una función interna llamada `mostrarNombre()`. Por ser una función interna, esta última solo está disponible dentro del cuerpo de `iniciar()`. Notemos a su vez que `mostrarNombre()` no tiene ninguna variable propia; pero, dado que las funciones internas tienen acceso a las variables de las funciones externas, `mostrarNombre()` puede acceder a la variable nombre declarada en la función `iniciar()`.*

*Este es un ejemplo de `ámbito léxico`, el cual describe cómo un analizador sintáctico resuelve los nombres de las variables cuando hay funciones anidadas. La palabra `léxico` hace referencia al hecho de que el ámbito léxico se basa en el lugar donde una variable fue declarada para determinar dónde esta variable estará disponible. Las funciones anidadas tienen acceso a las variables declaradas en su ámbito exterior.*

### ***Clausuras***

Considera el siguiente ejemplo:

```js
function creaFunc() {
  let nombre = "Kapelu"
  function muestraNombre() {
    console.log(nombre)
  }
  return muestraNombre
}

const miFunc = creaFunc()
miFunc()
```

*Si se ejecuta este código tendrá exactamente el mismo efecto que el ejemplo anterior: se mostrará el texto "`Kapelu`" en un console.log. Lo que lo hace diferente (e interesante) es que la función externa nos ha devuelto la función interna muestraNombre()antes de ejecutarla.*

*Puede parecer poco intuitivo que este código funcione. Normalmente, las variables locales dentro de una función sólo existen mientras dura la ejecución de dicha función. Una vez que `creaFunc()` haya terminado de ejecutarse, es razonable suponer que no se pueda ya acceder a la variable nombre. Dado que el código funciona como se esperaba, esto obviamente no es el caso.*

*La solución a este rompecabezas es que `miFunc` se ha convertido en un closure. Un closure es un tipo especial de objeto que combina dos cosas: una función, y el entorno en que se creó esa función. El entorno está formado por las variables locales que estaban dentro del alcance en el momento que se creó el closure. En este caso, `miFunc` es un closure que incorpora tanto la función `muestraNombre` como el string "`Kapelu`" que existían cuando se creó el closure.*

*Este es un ejemplo un poco más interesante: una función `creaSumador`:*
```js
function creaSumador(x) {
  return function(y) {
    return x + y
  }
}

const suma5 = creaSumador(5)
const suma10 = creaSumador(10)

console.log(suma5(2))  // muestra 7
console.log(suma10(2)) // muestra 12
```
*En este ejemplo, hemos definido una función creaSumador(x) que toma un argumento único x y devuelve una nueva función. Esa nueva función toma un único argumento y, devolviendo la suma de x + y.*

*En esencia, creaSumador es una fábrica de función: crea funciones que pueden sumar un valor específico a su argumento. En el ejemplo anterior utilizamos nuestra fábrica de función para crear dos nuevas funciones: una que agrega 5 a su argumento y otra que agrega 10.*

*suma5 y suma10 son ambos closures. Comparten la misma definición de cuerpo de función, pero almacenan diferentes entornos. En el entorno suma5, x es 5. En lo que respecta a suma10, x es 10.*

fuente : [:memo:](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

# CallBack

*Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.*

*veamos un ejemplo:*
```js
function saludar(nombre) {
  alert('Hola ' + nombre);
}

function usuario(saludar) {
  let nombre = prompt('Por favor ingresa tu nombre.');
  saludar(nombre);
}
usuario(saludar);
```
*Como vemos aqui invocamos la `funcion usuario` y le entregamos como parametro la `funcion saludar`. Por lo tanto al ejecutar usuario se crea una variable y se le asignar un nombre a traves de un prompt, este nombre pasa a como argumento a la `funcion saludar`.*


*veamos otro ejemplo:*
```js
function counter(contador = 0) {
	return () => (contador = contador + 1)
}

const contador = counter()
console.log(contador())
console.log(contador())
```

call back  mirar ==>  https://www.youtube.com/watch?v=zQVnDW8SaA0
