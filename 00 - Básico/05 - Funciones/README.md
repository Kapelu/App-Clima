<h1 align="center">FUNCIONES</h1>

Las funciones nos permiten agrupar líneas de código en tareas con un nombre, para que, posteriormente, podamos hacer referencia a ese nombre para realizar todo lo que se agrupe en dicha tarea. Para usar funciones hay que hacer 2 cosas:

* Declarar la función: Preparar la función, darle un nombre y decirle las tareas que realizará.
* Ejecutar la función: «Llamar» a la función para que realice las tareas de su contenido.

>***¿Como declaramos una función?*** La forma más común de definir una función es usando la palabra reservada `function` seguido de un único nombre de función, y de los parámetros deseados de la función, entre paréntesis y separados por comas, y un bloque de instrucciones dentro de llaves. Lo hacemos de la siguiente manera:
```javascript
// Declaración de la función "saludar"
function saludar() {
  // Contenido de la función
  console.log("Hola, soy una función")
}
```
>***¿Como ejecutamos una funcion?*** Para invocar una función desde cualquier parte de nuestro programa, solo es necesario escribir el nombre de la función creada seguido de paréntesis( en caso de tener parámetros indicarlos dentro, separados por comas). Para ello vamos a utilizar el ejemplo anterios donde declaramos la función saludar():
```javascript
// Declaración de la función "saludar"
function saludar() {
  // Contenido de la función
  console.log("Hola, soy una función")
}
// Ejecución de la función
saludar()
```
En este ejemplo hemos declarado la función y además, hemos ejecutado la función (en la última línea) llamándola por su nombre y seguida de ambos paréntesis, que nos indican que es una función. En este ejemplo, si se nos mostraría en la consola Javascript el mensaje de saludo.

Ahora bien, ya sabemos que es una función y como inicializarla. En el siguiente ejemplo vamos a ver de que manera podemos usar una funcion para multiples tareas dentro de nuestro codigo.

Vamos a crear una funcion que nos permita realizar las tablas de multiplicar.
```javascript
function tablaDeMultiplicar(num){
    for (let i = 0; i <=10; i++){
        let resultado = num * i 
        console.table(`${num} x ${i} = ${resultado}`)
    }
}
tablaDeMultiplicar(2)
/* Esto nos mostrara por consola
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
*/
```
Como vemos en este ejemplo le estamos dando el parametro de 2, lo que significa que realizaria la tabla del 2, en cuyo caso quisieramos hacer la tabla del 5, 7, 9 u 8, solo tendriamos que cambiar el parametro de 2 por el valor que deseemos.

**Parametro Argumento**

Ahora veremos que tambien podemos agregar mas de un parametro como argumento a las funciones y hacer cosas mucho mas interesante, usando el ejemplo anterior vamos a crear tablas de multiplicar hasta el 15 en este caso, pero el mismo codigo podemos crear las tablas hasta el 100 si deseamos, pero nosotros solo llegaremos hasta 15.
```javascript
function tablaDeMultiplicar(num, hasta){
    for (let i = 0; i <=hasta; i++){
        let resultado = num * i 
        console.table(`${num} x ${i} = ${resultado}`)
    }
}
tablaDeMultiplicar(2,15)    // el 2, es la tabla la cual vamos a crear y el 15 hasta donde va a llegar nuestra tabla.

/* Esto nos mostrara por consola
2 x 0 = 0
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
2 x 11 = 22
2 x 12 = 24
2 x 13 = 26
2 x 14 = 28
2 x 15 = 30
*/
```
<h1 align="center">Creación de funciones</h1>

Hasta ahora vimos como se declaran y como se ejecutan las funciones. Ahora veremos como crearlas.

>***Por DECLARACION:*** La forma más popular de todas, esta forma permite declarar una función que existirá a lo largo de todo el código. De hecho, podríamos ejecutar la función saludar() incluso antes de haberla creado y funcionaría correctamente, ya que Javascript primero busca las declaraciones de funciones y luego procesa el resto del código.

Tiene una sintaxis muy sencilla
```javascript
function nombreDeLaFuncion() {
  // Statment
}
nombreDeLaFuncion()
```
Veamos como funcionaria:

```javascript
function saludar() {
  return "Hola"
}
saludar() // 'Hola'
typeof saludar // 'function'. El operador 'typeof' nos estaria indicando que saludar es una función.
```
>***Por EXPRESIÓN:*** Es otra forma de crear una variable, que consiste en crear una funcion dentro de una variable para ejecutarlas posteriormente, fundamentalmente hacen lo mismo con algunas diferencias. 

Estas pueden ser de anonimas (sin nombre), mas adelante hablaremos mas de ellas, o se le puede proporcionar un nombre. Al proporcionarle un nombre permite que la función se refiera a sí misma y también facilita la identificación de la función en el seguimiento de la pila de un depurador. 

Veamos algunos ejemplos
```javascript
// función anonima (sin nombre)
const suma = function(a,b) {return a + b}
console.log(suma(15,10))
```
```javascript
// función con nombre
const suma = function sumar(a,b) {return a + b}
console.log(suma(15,10))   // 25
console.log(sumar(15,10))  //sumar is not defined
```
Con este nuevo enfoque, estamos creando una función en el interior de una variable, lo que nos permitirá posteriormente ejecutar la variable (como si fuera una función). Observa que el nombre de la función (en este ejemplo: sumar) pasa a ser inútil, ya que si intentamos ejecutar sumar() nos dirá que no esta definida y si ejecutamos suma() funciona correctamente.

Las expresiones function son convenientes cuando se pasa una función como argumento a otra función. El siguiente ejemplo muestra una función map que debería recibir una función como primer argumento y un arreglo como segundo argumento.
```javascript
function map(f, a) {
    let result = [] // Crea un nuevo arreglo
    let i // Declara una variable
    for (i = 0; i != a.length; i++) // se recorre i tantas posiciones como tenga a
      result[i] = f(a[i]) // el resultado se almacena en result que va a ser igual a la funcion f de con valores de i
    return result
}
const f = function(x) {return x * x * x}  // es el valor del primer argumento
let numbers = [0, 1, 2, 5, 10]    // es el valor del segundo argumento
let cube = map(f,numbers)  // map queda almacenada dentro de la variable cube "exprecion de funcion"
console.log(cube)   // [10,11,12,15,20]
```
>***Por COMO OBJETOS:*** También se pueden declarar funciones como objetos. Sin embargo, es un enfoque que no se suele utilizar. Simplemente es interesante saberlo para darse cuenta que en Javascript todo pueden ser objetos. por ejemplo:
```javascript
const saludar = new Function("return 'Hola';")
saludar() // 'Hola'
```

>***FUNCIONES ANONIMAS:*** Las funciones anónimas son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable y haciendo referencia a ella cada vez que queramos utilizarla
```javascript
// Función anónima "saludo"
const saludo = function () {
  return "Hola"
}
saludo // ƒ () { return 'Hola'; }
saludo() // 'Hola'
```
Notemos que en la última línea del ejemplo anterior, estamos ejecutando la variable, es decir, ejecutando la función que contiene la variable. Sin embargo, en la línea anterior hacemos referencia a la variable (sin ejecutarla, no hay paréntesis) y nos devuelve la función en sí.

La diferencia fundamental entre las funciones por declaración y las funciones por expresión es que estas últimas sólo están disponibles a partir de la inicialización de la variable. Si «ejecutamos la variable» antes de declararla, nos dará un error.

>***FUNCIONES ANONIMAS:*** Pueden existir casos en los que necesites crear una función y ejecutarla sobre la marcha. En Javascript es muy sencillo crear funciones autoejecutables. Básicamente, sólo tenemos que envolver entre paréntesis la función anónima en cuestión (no necesitamos que tenga nombre, puesto que no la vamos a guardar) y luego, ejecutarla.

```javascript
// Función anónima "saludo"
const saludo = function () {
  return "Hola"
};

saludo  // ƒ () { return 'Hola'; }
saludo()  // 'Hola'
```
Observa que en la última línea del ejemplo anterior, estamos ejecutando la variable, es decir, ejecutando la función que contiene la variable. Sin embargo, en la línea anterior hacemos referencia a la variable (sin ejecutarla, no hay paréntesis) y nos devuelve la función en sí.

La diferencia fundamental entre las funciones por declaración y las funciones por expresión es que estas últimas sólo están disponibles a partir de la inicialización de la variable. Si «ejecutamos la variable» antes de declararla, nos dará un error.

>***FUNCIONES AUTOEJECUTABLE:*** Para analizar el funcionamiento de la función paso a paso, tenemos que comenzar por su estructura más básica 
```javascript 
( ... )()
```
Los paréntesis exteriores, como en una operación matématica, ‘encierran’ el contenido. El segundo juego de paréntesis asume que el interior de los anteriores es una función y la ejecuta inmediatamente. En el caso anterior, para invocar myFunction nada más declararla, pordríamos utilizar:
```javascript
(myFunction)()
```
Sin embargo, para flexibilizar la estructura, en lugar de hacer referencia a una función existente, construímos una anónima:
```javascript
(function(){})();
```
Con el código anterior, conseguimos crear una función, ejecutarla y luego desecharla: realmente lo interesante es que enlazamos el objeto devuelto al contexto global, no la función en sí misma. Con esto, sus propiedades y métodos tienen acceso al resto de variables globales dándole una gran flexibilidad y alcance al esquema.

```javascript
// Función autoejecutable
(function () {
  console.log("Hola!!")
})()

// Función autoejecutable con parámetros
(function (name) {
  console.log(`¡Hola, ${name}!`)
})("Daniel")
```
>***FUNCION FLECHA:*** Las funciones flecha hacen que el código sea mucho más legible y claro de escribir, mejorando la productividad y la claridad a la hora de escribir código. son una forma corta de escribir funciones que aparece en Javascript a partir de ECMAScript 6. Básicamente, se trata de reemplazar o eliminar la palabra function y añadir => antes de abrir las llaves
```javascript
const func = function () {
  return "Función tradicional."
}

const func = () => {
  return "Función flecha."
}
```
Sin embargo, las funciones flechas tienen algunas ventajas a la hora de simplificar código bastante interesantes:

* Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
* Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return.
* En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>.
* En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
* En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
* Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Daniel'}).

Por lo tanto, el ejemplo anterior se puede simplificar aún más:
```javascript
const func = () => "Función flecha." // 0 parámetros: Devuelve "Función flecha"
const func = (e) => e + 1 // 1 parámetro: Devuelve el valor de e + 1
const func = (a, b) => a + b // 2 parámetros: Devuelve el valor de a + b
```
<br/>
<br/>
<br/>
<h1 align="center"></h1>
<h3 align="left">by Kapelu
<h1 align="center"></h1>