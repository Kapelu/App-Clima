- **CLOSURES**
    
    Un ***Closure*** es una función que retorna otra función.
    
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