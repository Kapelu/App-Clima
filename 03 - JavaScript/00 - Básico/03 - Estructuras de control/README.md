```javascript
const Kapelu = {
    name : 'Daniel Calderon',
     code: ['Javascript', 'HTML', 'CSS', 'NodeJS'],
    tools: ['Visual Studio Code','GitBash', 'GitHub'],
   github: 'https://github.com/Kapelu'
}
```
<h1  align="center">ESTRUCTURAS DE CONTROL </h1>

Las estructuras de control en javascript y en la mayoría de los lenguajes de programación se utilizan en los programas para definir el flujo de instrucciones que se van ejecutando. Si no fuera por las estructuras de control lo único que podríamos hacer es ejecutar una instrucción tras otra y no tendriamos forma de aplicar unas funciones u otras en según las condiciones que nosotros queramos establecer.

Un _ejemplo práctico muy típico_ para comprender la importancia de las estructuras de control es el siguiente: Cuando nosotros pedimos a un usuario que introduzca su usaurio y contraseña pueden ocurrir dos cosas. En primer lugar que los datos sean correctos y por consiguiente debemos dejarle logear o por el contrario que la pareja usuario/clave sea errónea y por tanto debemos denegarle la entrada y volver a pedir los credenciales. Como véis; en base a si los credenciales son correctos o no debemos realizar unas acciones u otras. Esto es justamente lo que nos permiten las estructuras de control.

## *Tipos de estructuras de control en javascript*

En javascript disponemos de 3 tipos de estructuras de control:

*  **Estructuras condicionales**. Este tipo de estructura de control tiene como objetivo realizar una bifurcación del flujo de instrucciones. Cuando el programa llega a un punto, nosotros establecemos una condición en en función de la misma el programa seguirá ejecutando unas instrucciones u otras; tal y como hemos visto en el anterior ejemplo cuando veíamos un caso de control de acceso sencillo.
  
* **Estructuras de repetición**. Este tipo de estructuras de control también conocidas como **bucles** se utilizan para realizar de forma repetida varias acciones. Con un bucle podemos por ejemplo mostrar en pantalla todos los números del 1 al 100 sin tener que escribir 100 veces la instrucción alert. 
Otro ejemplo muy fácil de comprender relaccionado con la seguridad informática se da cuando en formularios html de control de acceso se piden una y otra vez los credenciales de acceso hasta que el usuario proporciona una pareja usuario/clave válida y accede al sistema. Tu como programador no sabes cúantas veces vas a tener que pedir la clave al usuario, puede que la introduzca bien a la primera, a la segunda, a la tercer o quizá nunca. Para estos casos los bucles son la solución. Con un bucle puedes pedir de forma reiterada los credenciales de acceso hasta que o bien proporciona unos válidos y accede o bien llega a un número máximo de intentos y se le deniega incluso el derecho a seguir probando contraseñas por un tiempo.

* **Estructuras de control de errores**. Estas estructuras son clave en el mundo de la seguridad informática. Son aquellas que permiten controlar los errores que el usuario final comete de forma fortuita o intencionada y poder seguir trabando de forma normal. Los errores más típicos a tener en cuenta se producen cuando pedimos al usuario que introduzca un número pero el usuario nos introduce una letra. Esto producirá un error en nuestro programá y hará que se comporte de forma inadecuada si no hemos controlado mediante una estructura de control de errores este caso.

<h1  align="center"></h1>
<h1  align="center">ESTRUCTURAS DE CONTROL CONDICIONALES</h1>

>### *CONDICIONAL if...else*

Las estructuras condicionales en javascript nos sirven para tomar decisiones en función de una condición que nosotros establecemos. Su sintáxis es así:
```javascript
if (condicion1) {
  statement1
} else if (condicion2) {
  statement2
} else if (condicion3) {
  statement3
} else if (condicion4) {
  statement4
} else {
  statement default
}
```
«If» es una sentencia que significa “si condicional”. La idea es que si sucede tal cosa, (si la condición es verdadera) se debe ejecutar la sentencia que le sigue, es decir la misma sólo se ejecutaría en caso de que la expresión de tipo Boolean sea verdadera. Si es falsa, el interprete pasará a la parte «else» que signfica «sino»; y ejecutará las instrucciones que existen dicha parte. La parte «else» no es obligatoria, pero aquí la muestro para que quede en claro que podemos ejecutar mas  instrucciones en caso de que se cumpla la condición u otras en caso contrario. Veamos un ejemplo práctico en el de acuerdo a la linea de juego del jugador va a determinar la posición en la cancha:
```javascript
let jugador = 18
if (jugador === 1) {
  console.log(`El ${jugador} es arquero`)
} else if (jugador === 2) {
  console.log(`El ${jugador} es defensa`)
} else if (jugador ===3) {
  console.log(`El ${jugador} es centrocampista`)
} else if (jugador === 4){
    console.log(`El ${jugador} es delantero`)
} else {
  console.log(`El ${jugador} es suplente`)
}
```

>### *CONDICIONAL switch*

Dicha estructura la utilizamos casi siempre que queremos realizar un menú con sus diferentes opciones. Es una especie de optimización de la repetición de los bucles else if que vimos antes y que funciona mucho mejor y sin ser redundante. Lo utilizamos para aquellas veces que queremos hacer comprobaciones múltiples de una misma variables, es decir, para elegir una característica sobre una variable que la excluye de poseer otra. Su sintaxis es la siguiente:
```javascript
switch(opcion)
{
	case opcion1:
		statement1
		break
	case opcion2:
		statement2
		break
	case opcion3:
		statement3
		break
	case opcion4:
		statement4
		break
	default:
		statement default
		break
}
```
Al bucle anterior se le pasa una variable, en este caso letra. Comprueba dicha variable y dependiendo de cuál sea entra y realiza unas u otras instrucciones y después se sale del bucle. Para entrar a cada una de las opciones disponibles de nuestra variable letra se usa la palabra reservada case. La salida del bucle se realiza mediante la palabra reservada break, que se trata de una instrucción de salto, la cual interrumpe o modifica el flujo del programa, forzando en este caso la salida del bucle antes de tiempo. Sin embargo no es obligatorio introducir esta palabra.
 

De esta manera no cortaríamos el flujo del programa y comprobaría el resto de opciones (que sabemos que no serán ciertas) por lo que será menos óptimo. Es muy importante tener en cuenta que las comprobaciones se hacen en orden, por lo tanto si sabemos qué opción o opciones se van a usar más es mejor que las coloquemos en primer lugar.
El valor default que vemos en el código es el que se utiliza si el valor introducido no coincide con ningún case. En ese caso salta al default automáticamente. Sin embargo tampoco es obligatorio incluir default en nuestro código. Veamos un ejemplo, en el que consultamos el precio de las siguientes frutas.
```javascript
let fruta = 'manzana'
switch (fruta) {
  case 'naranjas':
    console.log('Las naranjas cuestan $ 30,00 el Kg.')
    break
  case 'manzanas':
    console.log('Las manzanas cuestan $ 28,00 el Kg')
    break
  case 'bananas':
    console.log('Los plátanos cuestan $ 80,00 el Kg.')
    break
  case 'cerezas':
    console.log('Las cerezas cuestan $ 95,00 el Kg.')
    break
  default:
   console.log(`Lo sentimos, no tenemos ${fruta}.`)
}
console.log("¿Hay algo más que quieras?");
```
<h1  align="center"></h1>
<h1  align="center">ESTRUCTURAS DE CONTROL DE REPETICION</h1>

>### *CONDICIONAL while*

Esta estructura es la que se conoce como mientras (que es la traducción literal del inglés) en algoritmia. Y como dice su propio significado es un bucle que ejecuta las instrucciones mientras la condición o condiciones sigan siendo ciertas, mientras siga devolviendo “true” como valor. Su sintaxis es muy simple
```javascript
while(condicion){
    statement
}
```
Veamos un sencillo ejemplo donde ingresaremos un valor que se repetira hasta cumplir la condicion que deseamos, en este caso imprimira por consola los numero del 0 al 9.
```javascript
var i = 0
while (i<9) { 
console.log(i)
i++
}
console.log('»Salimos» del while porque i vale:' +i)
```
Esto es tan sencillo como ir sumando uno cada vez a nuestra variable numero hasta que llegue a 10.

*¿Qué pasa si antes de entrar al bucle no se cumple la condición?*
Para ello veremos a continuacion un tipo especial de while llamado *do while*

>### *CONDICIONAL do while*

 Dicha estructura se utiliza si queremos que el programa entre al bucle una vez al menos. La traducción literal es haz ... mientras de ahí que al menos una vez haga, entre al bucle.

*¿Por qué siempre entra al menos una vez en nuestro bucle?*

Porque como veremos a continuación la condición para ejecutar el bucle se realiza después de hacerlo. Puede sonar complicado pero veremos que es muy simple:

La sintaxis es la siguiente:
```javascript
do { 
   	//sentencias del bucle 
} while (condición)

```
Veamos un ejemplo exactamente igual que el anterior pero con la diferencia de que la condición se comprueba al final. Este tipo de bucles son muy utilizados cuando creamos un menú de opciones; mientras el usuario no elija la opción de salir del programa seguiremos trabajando con el. Por ello necesitamos comprobar la opción que el usuario a elegido al final del programa, ya que al principio aún no sabemos la opción que ha escogido
```javascript
var resultado = 1
var numero = 10
do {
    resultado = resultado * numero
    console.log(numero)
    numero --
    console.log(numero)
    } while(numero > 5){
        console.log(numero)
    }
```
>### *BUCLE for*

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle. Este bucle es muy utilizado para recorrer listas de objetos. Si nosotros tenemos una lista de 10 variables y queremos hacer algo sobre cada una de las variables podemos hacer un bucle for que hará las 10 iteraciones que necestiamos. Su sintaxis es la siguiente:
```javascript
for (inicio; condición; incremento) {
  statement
}
```
* **_INICIO:_** La declaración de variable, típicamente se utiliza para usarse como variable contador. Esta expresión puede opcionalmente declarar nuevas variables con la palabra clave var. Estas variables no son locales del bucle, es decir, están en el mismo alcance en el que está el bucle for. El resultado de esta expresión es descartado.
* **_CONDICIÓN:_** Una expresión para ser evaluada antes de cada iteración del bucle. Si esta expresión se evalúa como verdadera, se ejecuta sentencia. Esta comprobación condicional es opcional. Si se omite, la condición siempre se evalúa como verdadera. Si la expresión se evalúa como falsa, la ejecución salta a la primera expresión que sigue al constructor de for.
* **_INCREMENTO:_** Una expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente evaluación de la condicion. Generalmente se usa para actualizar o incrementar la variable contador.
* **_SENTENCIA:_** Una sentencia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro del bucle, utilice una sentencia block ({ ... }) para agrupar aquellas sentecias.

Vamos a utilizar el ejemplo anterior para entenderlo mejor, donde mostraba los 10 primeros números con un blucle WHILE pero esta vez con un bucle FOR:
```javascript
for (let i=0; i<10; i++){
  console.log(i)
}
```
¿Por qué hemos reescrito el mismo ejemplo? Por una sencilla razón. No hay bucles mejores ni bucle peores, cada uno tiene sus características y se adaptan mejor o peor en cada caso en base a nuestras necesidades. Es muy fácil convertir un bucle en otro y que el programa siga manteniendo intacto su comportamiento. Un buen programador sabrá en cada caso qué bucle utilizar. Sabrá si necesita comprobar la condición al inicio o al final, si sabe el número de iteraciones que debe realizar es fijo o depende de una condición… etc.

Ahora bien, no todo es facil, puede que existan algunas complicaciones como veremos. 

Cualquiera de estas tres expresiones o la sentencia del cuerpo del bucle pueden ser omitidas. Los bucles For son comúnmente utilizados para contar un cierto número de iteraciones para repetir una sentencia. Puedes utilizar una sentencia break para salir del bucle antes que la expresión de condición devuelva false.
```javascript
for (var elefante = 1; elefante < 10; elefante+=2) {
    if (elefante === 7) {
        break
    }
    console.log(`elefante es ${elefante}`)
}
// Resultado
elefante es 1
elefante es 3
elefante es 5
```
Cuando recorremos un array utilizando los índices es fácil exceder los límites (ej. intentar referenciar el 4º elemento de un array de 3 elementos).

```javascript
// Los límites del array serán excedidos.
var arr = [ 1, 2, 3 ];
for (var i = 0; i <= arr.length; i++) {
  console.log(arr[i])
}
// Resultado:
1
2
3
undefined
```
Hay dos maneras de arreglar este código. Que la condición sea `i < arr.length` ó `i <= arr.length - 1`.

>### *BUCLE for...in*

La declaración for...in itera sobre las propiedades enumerables de un objeto, en orden arbitrario. Para cada propiedad distinta, se pueden ejecutar sentencias.
Su sintaxis es:
```javascript
for (variable in objeto) {
  statement
}
```
* **_VARIABLE:_** Un nombre distinto es asignado a la variable en cada iteración.
* **_OBJETO:_** Objeto cuyas propiedades enumerables (no de tipo symbol) son iteradas.
Veamos un ejemplo:
```javascript
let array = ['perro','gato', 'canario', 'loro']
var s = ''
for (let value in array) {
    s += value + ':' + array[value] + ', '
}
console.log(s)
```
Forma eficiente de obtener los índices (keys) de un objeto usando la expresión dentro de las condiciones del bucle for-in

```javascript
let objeto = {a: 1, b: 2, c:3}
let indice = []
let i=0
for (indice[i++] in objeto){}
console.log(indice)    // ['a', 'b', 'c']
```
>### *BUCLE for...of*

La declaración for...of crea un bucle que itera a través de objetos iterables (incluyendo Array, Map, Set, el objeto Argumentos y así sucesivamente), invocando un hook (función) de iteración con sentencias a ejecutar para el valor de cada propiedad distinta.
Su sintaxis es:
```javascript
for (variable of objeto) {
  statement
}
```
* **_VARIABLE:_** En cada iteración se asigna un valor de una propiedad distinta a la variable.
* **_OBJETO:_** Objeto cuyas propiedades son iteradas.

Veamos algunos ejemplos:

>> *ARRAY*
```javascript
let arr = ['Martina', 'Lucia', 'Thomas']
for (let i of arr) {
  console.log(i)   // Martina, Lucia, Thomas 
}
```
>> *MAP*
```javascript
var m = new Map()
m.set(1, 'negro')
m.set(2, 'rojo')
for (var n of m) {
  console.log(n)   // [1, 'negro'], [2, 'rojo']
}
```
>> *SET*
```javascript
var s = new Set()
s.add(1)
s.add("rojo")
for (var n of s) {
  console.log(n)   // 1, rojo
}
```

>> *ARGUMENTS OBJECT*
```javascript
function mostrarObjetoArguments() {
  for (let n of arguments) {
    console.log(n)   // 1, rojo
  }
}
mostrarObjetoArguments(1, 'rojo')
```
<br/>

<br/>

<h1 align="center"></h1>
<h3 align="left">by Kapelu
<h1 align="center"></h1>