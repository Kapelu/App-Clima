- **CLOSURES**

En JavaScript, la gente a menudo confunde las cláusulas con el ámbito léxico.

El ámbito léxico es una parte importante de las cláusulas, pero no es una cláusula en sí mismo.

Las cláusulas son un concepto avanzado y un tema frecuente en entrevistas técnicas.

Debes tener un conocimiento básico de las funciones antes de intentar entender las cláusulas.

Después de leer este artículo, espero haberte ayudado a aprender lo siguiente:

* La diferencia entre ámbito léxico y cláusulas.
* Por qué las cláusulas requieren un ámbito léxico.
* Cómo dar un ejemplo de cláusulas durante una entrevista de trabajo.
<p>
<br>


***¿Qué es el ámbito léxico en JavaScript?***

El ámbito léxico describe cómo las funciones anidadas (también conocidas como "secundarias") tienen acceso a las variables definidas en los ámbitos de sus padres.

```javascript
const miFuncion = () => {
     let miValor = 2;
     console.log(miValor);

     const funcionHija = () => {
          console.log(miValor += 1);
     }

     funcionHija();
}

miFuncion();
```
En este ejemplo, funcionHija tiene acceso a la variable miValor que está definida en el ámbito de la función padre  miFuncion.

El ámbito léxico de funcionHija permite el acceso al ámbito del padre (función madre).

<p>
<br>

***¿Qué es una cláusula en JavaScript?***

Una cláusula es una función que tiene acceso al ambito de su función padre, incluso después de que la función padre haya terminado de ejecutar.

Observemos la primera parte de la oración, antes de la coma:

>...una función que tiene acceso al ambito de su padre
¡Eso describe el ámbito léxico!

Pero necesitamos la segunda parte de la definición para tener un ejemplo de una cláusula...

>...incluso después de que la función padre haya terminado de ejecutar

Veamos un ejemplo de una cláusula:

```javascript
const miFuncion = () => {
     let miValor = 2;
     console.log(miValor);

     const funcionHija = () => {
          console.log(miValor += 1);
     }

     return funcionHija;
}

const resultado = miFuncion();
console.log(resultado);
resultado();
resultado();
resultado();
```
En esta versión, miFuncion devuelve funcionHija en lugar de llamarla.

Por tanto, cuando a resultado  se le asigna miFuncion(), la instrucción en la consola dentro de miFuncion es registrada, pero no la instrucción dentro de  funcionHija.

funcionHija no es ejecutada.

En lugar de eso, es devuelta y guardada en resultado.

Además, debemos darnos cuenta de que miFuncion ha terminado de ejecutarse.

La línea con console.log(resultado) debe mostrar en la consola que resultado ahora contiene el valor de la función anónima que esfuncionHija.

Ahora, cuando ejecutamos resultado(), estamos llamando a la función anónima que es funcionHija.

Como hija de miFuncion, esta función anónima tiene acceso a la variable miValor dentro de miFuncion ¡incluso después de que haya terminado su ejecución!

La cláusula que creamos, ahora nos permite continuar aumentando el valor de la variable miValor  cada vez que ejecutamos resultado().

***Tómate tu tiempo con cláusulas***

Las cláusulas se consideran un concepto avanzado con motivo.

Incluso con un desglose paso a paso de lo que es una cláusula, entender este concepto puede llevar tiempo.

No te apresures para entenderlo y no seas duro contigo mismo si no tiene sentido al principio.

Cuando entiendas completamente las cláusulas, es posible que sientas lo que sintió Neo cuando vio la Matriz. *¡Verás nuevas posibilidades de código y te darás cuenta de que estuvieron ahí todo el tiempo!*

<p>
<br>

***Analicemos unos ejemplos más!!!***


```javascript
    function saludar( saludo ){
    	return function( nombre ){
    		console.log(saludo + ' ' + nombre);
    	}
    }
    var saludarHola = saludar('Hola'); // Esto devuelve una función
    saludarHola('Toni'); // 'Hola Toni'
```

En este ejemplo podemos ver que hay una función “*padre*” y una función “*hija*”. El parámetro de la función padre la definimos en una variable que ejecuta a la función padre.

Luego de terminar de ejecutar y retornar una función (la que estamos guardando en `saludarHola`), ese contexto es destruido. ¿Pero qué pasa con la variable **saludo**?. Bueno, el interprete saca el contexto del stack, pero deja en algún lugar de memoria las variables que se usaron adentro (hay un proceso dentro de JavaScript que se llama `garbage collection` que eventualmente las va limpiando si no las usamos. ). Por lo tanto, esa variable todavía va a estar en la memoria.

```javascript
var creaFuncion = function(){
	var arreglo = [];
	for ( var i = 0; i < 3; i++){
		arreglo.push(function(){console.log(i);})
	}
	return arreglo;
}

var arr = creaFuncion();
arr[0]() // 3
arr[1]() // 3
```

En este ejemplo, se crea una función **creaFuncion** en la cual se declara un *arreglo* vacío y un *bucle for*. En cada iteración del bucle se pushea una nueva función al arreglo que consologea el índice **i** de esa iteración. Finalmente retorna el arreglo. Luego se crea una variable **arr** que ejecuta la función padre.

Entonces, cuando imprimimos **arr[0]()** se ejecutará la primera función del arreglo, lo que debería mostrar el índice **0**. En este caso no lo hace porque la variable **i** en el *bucle for* fue definida con **var**.

```javascript
var creaFuncion = function(){
	var arreglo = [];
	for ( let i=0; i < 3; i++){
		arreglo.push(function(){console.log(i);})
	}
	return arreglo;
}

var arr = creaFuncion();
arr[0]() // 0
arr[1]() // 1
```

En este caso si se imprimen los índices correspondientes porque declaramos la variable **i** con **let**.

A continuación veremos otra forma de hacer lo mismo.

```javascript
var creaFuncion = function(){
	var arreglo = [];
	for ( var i=0; i < 3; i++){
		// IIFE
		arreglo.push((function(j){return function() {console.log(j);}}(i)))
	}
	return arreglo;
}

var arr = creaFuncion();
arr[0]() // 0
arr[1]() // 1
arr[2]() // 2
```

Si queremos que cada función guardase el valor de `i`, deberíamos crear un *execution content* donde se cree una variable nueva en cada iteración. Para eso vamos a usar una IIFE a la cuál le vamos a pasar como parámetro `i`. Como estamos ejecutando la función, se va a a crear un contexto nuevo por cada ejecución, y por ende van a existir tres variables `j` (cada una en un contexto distinto) que contendrán los valores recibidos por parámetro.

```javascript
function hacerSaludo( lenguaje ){
	if ( lenguaje === 'en'){
		return function(){console.log('Hi!');}
	}

	if ( lenguaje === 'es'){
		return function(){console.log('Hola!');}
	}
}

var saludoIngles = hacerSaludo('en');
var saludoEspaniol = hacerSaludo('es');

saludoIngles()
saludoEspaniol()
```

Este caso es igual al anterior, solo que se agrega un condicional dentro de la función padre. Por lo que ahora puede ejecutar, la misma función, una u otra función hija, dependiendo del parámetro.

- **CALLBACK**

Antes que nada debemos entender que las funciones pueden ser recibidas como parametros. Es por ello que una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback. Es la combinación de estas dos la que nos permite ampliar nuestra funcionalidad.

```javascript
const operation=(numerol,numero2,op) =>{
 return op(numerol,numero2)
}
operation(1,3,(a,b)⇒a+b)
operation(1,3,(a,b)⇒a*b)
operation(1,3,(a,b)⇒a-b)
```
↑