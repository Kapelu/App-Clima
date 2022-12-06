<h2><b><i>Que es el DOM?</i></b></h2>
<br>

El nombre `DOM` proviene de sus siglas en ingles de 'Document Object Model'. Cuando un navegador carga una página web, toma todo el contenido HTML y nos da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. El DOM es un árbol donde cada nodo es un objeto con todas sus propiedades y métodos que nos permiten modificarlo.Utilizando código Javascript podemos acceder y manipular ese modelo ya sea agregando o quitando elementos, cambiando sus atributos y también modificando sus estilos. Estas son algunas funciones que nos permiten acceder y modificar los elmentos del DOM:

<h2><b><i>Acceder a elementos del DOM</i></b></h2>
<br>

## _*.getElementBy*_

Para poder acceder a lo elementos del DOM podemos utilizar estos selectores a los cuales debemos brindarle como parámetro un string con el nombre de la clase que deseamos buscar.

```js
// Obtiene un elemento por id
document.getElementById('someid')

// Obtinee una lista con los elementos que tienen esa clase. 
document.getElementsByClassName('someclass')

// Obtiene una HTMLCollection con los todos los elementos 'li'
document.getElementsByTagName('LI')
```
## _*.querySelector*_

Es un método que busca los elementos basándose en uno o más selectores CSS. Recordemos que es posible hacer referencia a clases utilizando un ., a ids con # y a elementos usando el nombre de su etiqueta directamente. Es recomendable utilizar sólo ids con querySelector ya que sólo retornará el primer elemento que coincida con el selector indicado.

```js
// Devuelve el primer elemento del documento que cumpla la selección (la notación es como en CSS)
document.querySelector('.someclass')

// Devuelve una lista de elementos que cumplen con la selección (notación como en CSS)
document.querySelectorAll('div.note, div.alert')
```

<h2><b><i>Crear elementos en el DOM</i></b></h2>
<br>

## _*.createElement*_
En el caso de que queramos crear un elemento para agregarlo al DOM podemos utilizar document.createElement. Este método recibe como parámetro un string indicando el tipo de elemento que deseamos crear y devuelve un elemento vacío de dicho tipo.

```js
 // Para crear elementos llamamos a createElement con el nombre del elemento
var nuevoH1 = document.createElement('h1');
var nuevoParrafo = document.createElement('p');

// Crear nodos de texto para un elemento
var textoH1 = document.createTextNode('Hola mundo!');
var textoParrafo = document.createTextNode('lorem ipsum...');

// Añadir el texto a los elementos
nuevoH1.appendChild(textoH1);
nuevoParrafo.appendChild(textoParrafo);

// también podemos asignar directamente el valor a la propiedad innerHTML
nuevoH1.innerHTML = textoH1
nuevoParrafo.innerHTML = textoParrafo

// los elementos estarían listos para añadirlos al DOM, ahora mismo solo existen en memoria, pero no serán visibles hasta que no los añadamos a un elemento del DOM
```


<h2><b><i>Añadir elementos al DOM</i></b></h2>
<br>

```js
// seleccionamos un elemento
var cabecera = document.getElementById('cabecera');

// Añadir elementos hijos a un elemento
cabecera.appendChild(nuevoH1);
cabecera.appendChild(nuevoParrafo);

// También podemos añadir elementos ANTES del elemento seleccionado

// Tomamos el padre
var padre = cabecera.parentNode;

// Insertamos el h1 antes de la cabecera
padre.insertBefore(nuevoH1, cabecera);
```

También podemos añadir directamente un trozo de HTML antes o después de un elemento del DOM, supongamos que tenemos estos elementos en la página:

```js
<div id='box1'>
  <p>aquí algo de texto</p>
</div>
<div id='box2'>
  <p>otro parrafo bla bla bla</p>
</div>

// Podemos hacer:

var box2 = document.getElementById('box2');
box2.insertAdjacentHTML('beforebegin', '<div><p>un parrafo nuevo.</p></div>');

// beforebegin - El nuevo HTML es insertado justo antes del elemento, a la misma altura (hermano).
// afterbegin - El nuevo HTML se inserta dentro del elemento, antes del primer hijo.
// beforeend - El nuevo HTML se inserta dentro del elemento, después del último hijo.
// afterend - El nuevo HTML es insertado justo después del elemento, a la misma altura (hermano).
```

<h2><b><i>Añadir/eliminar/modificar Clases</i></b></h2>
<br>

```js
// Tomamos un elemento
var cabecera = document.getElementById('cabecera');

// elimina una clase del elemento
cabecera.classList.remove('foo');

// Añade una clase si no existe
cabecera.classList.add('otra');

// añade o elimina varias clases a la vez
cabecera.classList.add('foo', 'bar');
cabecera.classList.remove('foo', 'bar');

// Si la clase existe la elimina, si no existe, la crea
cabecera.classList.toggle('visible');

// Devuelve true si el elemento contiene esa clase
cabecera.classList.contains('foo');
```

### .innerHTML

Con el método `innerHTML` podemos acceder a la información que se encuentra entre las etiquetas de apertura y cierre de un elemento HTML tanto para simplemente lectura o para su modificación. Ejemplo:

```javascript
    const p = document.querySelector('#pId');
    console.log(p.innerHtml) // Va a imprimir el texto dentro del párrafo con el id 'pID'

    p.innerHTML = 'Nuevo texto'; // Acá estamos modificando el texto del párrafo mencionado anteriormente

    console.log(p.innerHTML); // Va a imprimir el nuevo texto que le seteamos, es decir: "Nuevo texto"
```

### .[attribute] y .setAttribute

Podemos llamar al método `.setAttribute` para agregar un atributo a un elemento o sobreescribirlo en el caso de que ya se encuentre definido. Otra forma equivalente de realizarlo pero más corta sería llamando a `.[nombre del atributo] = [nuevo valor]`. Ejemplo:

```javascript
    const a = document.querySelector('#linkHenry'); // Obtengo el elemento a cuyo id es 'linkHenry'

    a.setAttribute('href', 'https://www.soyhenry.com/'); // Seteo el atributo href del elemento a para que redireccione a la página principal de Henry

    a.href = 'https://www.soyhenry.com/'; // Equivalente al anterior pero más corto
```

### .style

Podemos modificar el estilo de un elemento utilizando `.style`. Cabe mencionar que con esto no estamos accediendo al estilo CSS sino que lo que estamos haciendo es agregarle la propiedad `style` dentro de la etiqueta HTML. Ejemplo:

```javascript
    const div = document.querySelector('#divId');

    div.style.height = '300px'; // Le damos una altura de 300 pixeles al div cuyo id es 'divId'
    div.style.background = 'red'; // Le seteamos el color de fondo en rojo a dicho div
```

### .className y .id

Podemos utilizar `.className` y `.id` para acceder y modificar las clases o ids de los elementos. Esto es útil cuando ya tenemos definido en los estilos CSS un estilo en particular asociado a una clase o id y queremos simplemente modificando la clase o id del elemento cambiar su estilo sin tener que modificar propiedad por propiedad. Ejemplo:

```javascript
    const div = document.querySelector('#divId');

    console.log(div.id); // Utilizando ',id' accedemos al nombre de su id, en este caso 'divId'
    div.className = 'nuevaClase'; // Le seteamos la clase 'nuevaClase'
    div.id = 'nuevoId'; // Le seteamos el id 'nuevoId'
```

### .appendChild

Es posible agregar elementos directamente al `DOM` utilizando `.appendChild` sobre el elemento que queremos que sea su padre. Ejemplo:

```javascript
    const body = document.querySelector('body');
    const newDiv = document.createElement('div'); // Creamos un nuevo elemento div

    body.appendChild(newDiv); // Agregarmos el div recién creado dentro del body de la paǵina

```

## Event Listeners

Un `Event Listener` es una función que se ejecuta luego de que ocurra un determinado evento. Existen diferentes tipos de eventos, entre ellos se encuentran: un click, un desplazamiento del mouse por encima del elemento, el apretado de una tecla, etc. Para ver la lista completa pueden consultar el siguiente [link](https://developer.mozilla.org/es/docs/Web/Events)

### Click

El evento más común es el de 'click' y en particular es el único que posee la propiedad `.onclick` para asignarle una función que será ejecutada al clickear el componente indicado. Ejemplo:

```javascript
    const div = document.querySelector('#divId');
    div.onclick = function() {
        console.log('clickeado');
    };
```

*En este ejemplo lo que estamos haciendo es indicarle que cuando se clickee el div cuyo id es 'divId' se ejecute la función ahí definida que lo único que hará en este caso es escribir por consola "clickeado"*

### addEventListener y otros eventos

`.addEventListener` es un método que recibe como primer parámetro el tipo de evento que va a estar esperando y como segundo parámetro una función callback que es la que va a ejecutarse cuando ocurra dicho evento. Nota: es mejor utilizar addEventListener en todos los casos incluyendo los clicks. Ejemplo:

```javascript
    const div = document.querySelector('#divId');
    div.addEventListener('mouseenter', function() {
        console.log('El mouse entró!');
    });
```

*En este ejemplo lo que estamos haciendo es indicarle que cuando el mouse ingrese al div cuyo id es 'divId' se ejecute la función ahí definida que lo único que hará en este caso es escribir por consola "El mouse entró!"*