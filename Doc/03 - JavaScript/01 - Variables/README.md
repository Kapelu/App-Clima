```javascript
const Kapelu = {
     name: 'Daniel Calderon',
     code: ['Javascript', 'HTML', 'CSS', 'NodeJS'],
    tools: ['Visual Studio Code','GitBash', 'GitHub'],
   github: 'https://github.com/Kapelu'
}
```
<h1 align="center">VARIABLES</h1>

[HOME](../README.md)

Las variables son la manera como los programadores le dan nombre a un valor para poder reusarlo, actualizarlo o simplemente registrarlo. Las variables se pueden usar para guardar cualquier tipo de dato en JavaScript.

>*NOTA: Decimos que las variables contienen valores. Ésta es una importante distinción que debemos reconocer. Las variables no son los valores en sí mismos; son contenedores de valores.*

## Declarar una variable

Para usar una variable, primero debes crearla. Precisamente, a esto lo llamamos declarar la variable. Para hacerlo, escribimos la palabra clave `var`, `let` o `const` seguida del nombre con el que deseas llamar a tu variable.

## Inicializar una variable

Una vez que hayas declarado una variable, la puedes iniciar con un valor. Para ello, escribe el nombre de la variable, seguido de un signo igual (`=`), seguido del valor que deseas darle. 

Teniendo en cuenta esto "declarar e inicializar" una variable nos quedaria asi:

```javascript
var nombre = 'Daniel'
var edad = 42
var estudiante= true

console.log(nombre)   //Daniel
console.log(edad)   //42
console.log(estudiante)   //true
```

>Tengamos en cuanta que tanto `var`, `let` y `const` tienen diferentes ambitos de aplicación.

* `var` : Es una variable que SI puede cambiar su valor y su scope es local.
* `let` : Es una variable que también podra cambiar su valor, pero solo vivira en el bloque donde fue declarada.
* `const` : Es una constante la cual NO cambiara su valor en ningún momento en el futuro.

## Que es Scope (ámbito) de una variable ?

Scope se refiere a los lugares dentro de nuestro código en donde las variables están disponibles para su uso. Cuando una variable tiene un ámbito global, significa que está disponible en cualquier lugar de tu programa o sea que puede ser mandada a llamar desde cualquier parte del programa y las veces que sea necesaria. Veamos un ejemplo.

```javascript
var nombre = 'Daniel'
function saludo() {
   console.log(`Hola, mi nombre es ${nombre}`)   // Hola, mi nombre es Daniel
}
saludo()
```
Debido a que nuestra variable fue creada por fuera de la función, tiene alcance global. Esto significa que está disponible en cualquier parte del código, incluyendo dentro de cualquier función. Es por eso que la función, saludo, tiene acceso a la variable nombre.

Ahora crearemos una variable que tenga alcance de función. Esto significa que la variable solo se puede acceder dentro de la función en la que fue creada. Veamos un ejemplo usando el código anterior, pero con un posicionamiento diferente de la variable.

```javascript
function saludo1() {
  var nombre1 = 'Daniel'
  console.log(`Hola, mi nombre es ${nombre1}`)   // Hola, mi nombre es Daniel
}
saludo1()
```
Esto es porque la variable nombre1 tiene alcance de función. Es decir, solo esta disponible dentro de la función de la cuál fue creada. Al ejecutar `console.log()`dentro de las funcion si nos va a devolver lo que contiene nombre1, pero si lo hacemos desde fuera de la funcion nos va a decir que nombre1 no esta definido y nos devolvera un error.

>NOTA: Las variables con alcance de función son útiles a los programadores porque frecuentemente queremos crear variables que sólo sirvan o sean necesarias dentro de cierta función. Crear variables globales también nos puede generar errores o fallos.

Ahora que tenemos un entendimiento básico de lo que es el alcance, podemos entender la diferencia entre `var`, `let`.

`const` funciona similar a `var`, pero con unas cuantas diferencias grandes. Primero, `const` tiene alcance de bloque, mientras que `var` tiene alcance de función.

## ¿Qué es un bloque? 

Un bloque se refiere a cualquier espacio que esté entre llaves de apertura y cierre

```javascript
function años() {
    var edad = 42
    console.log(`${edad}`)
}
años()   
console.log(`${edad}`)   // edad is not defined (edad no esta definida)
```
#### TAREA : INVESTIGAR 
* Las diferencias entre  `var`, `const` y en como es el uso correcto al declarar  `var`, `let` y `const` en JavaScript.
* Reglas al declarar nombres de variables en JavaScript
* Cuales son los tipos de datos que se le pueden asignar a las variables
* Tareita de investigar como se usar `${}` al llamar una variable y en que caso se puede usar. 

<br>
<br>

[HOME](../README.md)