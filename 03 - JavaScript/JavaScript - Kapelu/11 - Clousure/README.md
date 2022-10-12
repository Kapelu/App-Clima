# Closures

*Una clausura o closure permite acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada.*

### ***Ámbito léxico***
*Consideremos el siguiente ejemplo:*

```js
function iniciar() {
  var nombre = "Kapelu";  // La variable nombre es una variable local creada por iniciar.
  function mostrarNombre() {  // La función mostrarNombre es una función interna, una clausura.
    console.log(nombre)  // Usa una variable declarada en la función externa.
  }
  mostrarNombre();
}
iniciar();
```

*La `función iniciar()` crea una variable local llamada `nombre` y una función interna llamada `mostrarNombre()`. Por ser una función interna, esta última solo está disponible dentro del cuerpo de `iniciar()`. Notemos a su vez que `mostrarNombre()` no tiene ninguna variable propia; pero, dado que las funciones internas tienen acceso a las variables de las funciones externas, `mostrarNombre()` puede acceder a la variable nombre declarada en la función `iniciar()`.*

*Este es un ejemplo de `ámbito léxico`, el cual describe cómo un analizador sintáctico resuelve los nombres de las variables cuando hay funciones anidadas. La palabra `léxico` hace referencia al hecho de que el ámbito léxico se basa en el lugar donde una variable fue declarada para determinar dónde esta variable estará disponible. Las funciones anidadas tienen acceso a las variables declaradas en su ámbito exterior.*


https://developer.mozilla.org/es/docs/Web/JavaScript/Closures


Clausuras
Considera el siguiente ejemplo:

function creaFunc() {
  var nombre = "Mozilla";
  function muestraNombre() {
    alert(nombre);
  }
  return muestraNombre;
}

var miFunc = creaFunc();
miFunc();
Copy to Clipboard
Si se ejecuta este código tendrá exactamente el mismo efecto que el ejemplo anterior: se mostrará el texto "Mozilla" en un cuadro de alerta de Javascript. Lo que lo hace diferente (e interesante) es que la función externa nos ha devuelto la función interna muestraNombre()antes de ejecutarla.

Puede parecer poco intuitivo que este código funcione. Normalmente, las variables locales dentro de una función sólo existen mientras dura la ejecución de dicha función. Una vez que creaFunc() haya terminado de ejecutarse, es razonable suponer que no se pueda ya acceder a la variable nombre. Dado que el código funciona como se esperaba, esto obviamente no es el caso.

La solución a este rompecabezas es que miFunc se ha convertido en un closure. Un closure es un tipo especial de objeto que combina dos cosas: una función, y el entorno en que se creó esa función. El entorno está formado por las variables locales que estaban dentro del alcance en el momento que se creó el closure. En este caso, miFunc es un closure que incorpora tanto la función muestraNombre como el string "Mozilla" que existían cuando se creó el closure.

Este es un ejemplo un poco más interesante: una función creaSumador:

function creaSumador(x) {
  return function(y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12
Copy to Clipboard
En este ejemplo, hemos definido una función creaSumador(x) que toma un argumento único x y devuelve una nueva función. Esa nueva función toma un único argumento y, devolviendo la suma de x + y.

En esencia, creaSumador es una fábrica de función: crea funciones que pueden sumar un valor específico a su argumento. En el ejemplo anterior utilizamos nuestra fábrica de función para crear dos nuevas funciones: una que agrega 5 a su argumento y otra que agrega 10.

suma5 y suma10 son ambos closures. Comparten la misma definición de cuerpo de función, pero almacenan diferentes entornos. En el entorno suma5, x es 5. En lo que respecta a suma10, x es 10.

Closures prácticos
Hasta aquí hemos visto teoría, pero ¿son los closures realmente útiles? Vamos a considerar sus implicaciones prácticas. Un closure permite asociar algunos datos (el entorno) con una función que opera sobre esos datos. Esto tiene evidentes paralelismos con la programación orientada a objetos, en la que los objetos nos permiten asociar algunos datos (las propiedades del objeto) con uno o más métodos.

En consecuencia, puede utilizar un closure en cualquier lugar en el que normalmente pondría un objeto con un solo método.

En la web hay situaciones habituales en las que aplicarlos. Gran parte del código JavaScript para web está basado en eventos: definimos un comportamiento y lo conectamos a un evento que es activado por el usuario (como un click o pulsación de una tecla). Nuestro código generalmente se adjunta como una devolución de llamada (callback): que es una función que se ejecuta en respuesta al evento.

Aquí está un ejemplo práctico: Supongamos que queremos añadir algunos botones a una página para ajustar el tamaño del texto. Una manera de hacer esto es especificar el tamaño de fuente del elemento body en píxeles y, a continuación, ajustar el tamaño de los demás elementos de la página (como los encabezados) utilizando la unidad relativa em:

body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}

h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
Copy to Clipboard
Nuestros botones interactivos de tamaño de texto pueden cambiar la propiedad font-size del elemento body, y los ajustes serán aplicados por los otros elementos de la página gracias a las unidades relativas.

Aquí está el código JavaScript:

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
Copy to Clipboard
size12, size14 y size16 ahora son funciones que cambian el tamaño del texto de body a 12, 14 y 16 pixels, respectivamente. Podemos conectarlos a botones (en este caso enlaces) de la siguiente forma:

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
Copy to Clipboard
<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a>