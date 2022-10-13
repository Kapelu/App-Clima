# LISTAS ENLAZADAS

*Una lista enlazada es una estructura de datos lineal que se compone de elementos que están autorreferenciados entre sí, es decir, cada elemento de la lista tendrá una referencia o puntero al siguiente elemento. Destacando que estos elementos se almacenan en ubicaciones no contiguas en memoria.*

Esta estructura permite la inserción o eliminación de elementos desde cualquier posición en la secuencia durante la iteración. Las variantes más complejas agregan enlaces adicionales, permitiendo una eficiente inserción o eliminación desde referencias arbitrarias del elemento. Una desventaja de las listas lazadas es que el tiempo de acceso es lineal (y difícil de canalizar). Un acceso más rápido, como un acceso aleatorio, no es factible. Los arreglos tienen una mejor locazion en caché comparados con las listas lazadas.

![](https://github.com/Kapelu/Apuntes-Personales/blob/main/03%20-%20JavaScript/imagenes/Lista-enlazada.png)

Las listas enlazadas están compuestas por los siguientes elementos:

 * **LinkedList**: Estructura gestora de elementos
     * **head**: Nodo inicial de la lista
    * **length**: Es la cntidad de elementos o largo de la lista <p>
 * **Nodo**: Elemento de almacenamiento y conexión que contiene al menos un dato de interés de cualquier tipo y un puntero al siguiente nodo.
    * **Dato**: Es el elemento del nodo. 
    * **Next**: Es el gancho o enlace al siguiente elemento
<p>
<br>

### **Tipos de listas enlazadas**
<br>

Actualmente existen múltiples istas enlazadas, su diferencia radica en la referencia al que estas apuntan al siguiente nodo, ya que algunas implementaciones contienen una referencia de forma circular, mientras que otras pueden tener una referencia a los nodos sucesores o antecesores.

Aquí algunos tipos de listas enlazadas:

***Lista enlazada simple***: Lista enlazada en la que cada nodo contiene un único campo de enlace al elemento sucesor.
<br>

![](https://github.com/Kapelu/Apuntes-Personales/blob/main/03%20-%20JavaScript/imagenes/Lista-enlazada_simple.png)

***Lista doblemente enlazadas***: Lista enlazada en la que cada nodo contiene doble vía de enlace, los nodos apuntan tanto al elemento sucesor como el antecesor.
<br>

![](https://github.com/Kapelu/Apuntes-Personales/blob/main/03%20-%20JavaScript/imagenes/Lista-enlazada_doble.png)

***Lista enlazada circular***: Semejante a la lista enlazada simple, con la distinción que el último nodo apunta hacía el primer nodo de la lista.
<br>

![](https://github.com/Kapelu/Apuntes-Personales/blob/main/03%20-%20JavaScript/imagenes/Lista-enlazada_circular.png)
<p>
<br>

### **Implementación de listas enlazadas**
<br>

A continuacion mostrare en forma básica como seria la implementacion de una lista enlazada. Para ello empezaremos creando:

**LinkedList**: Clase o funcion constructora que representa una lista enlazada, esta clase tendrá la propiedad:
* **head**: Representará el nodo inicial. Al comenzar, la cabecera se establecerá con el valor **null**,ya que este no tendrá ningún nodo asociado al principio.
* **length**: Representá el largo o cantidad de elementos de la lista.

```javascript
function Lista() {
	this.head = null
	this.length = 0
}
```
***Clase Node***: Clase o función que representa un nodo, esta tendrá dos propiedades, la propiedad **value** que representará el dato de interés que se almacenará, y la propiedad **next** representará un puntero al siguiente elemento de la lista.

```javascript
function Nodo(value) {
	this.dato = value
	this.next = null
}
```
Los siguientes pasos serán agregar a la clase **LinkedList** métodos que nos ayudarán a realizar la manipulación de nodos en nuestra lista, como por ejemplo, la inserción, búsqueda y eliminación de elementos. Para ello usaremos **prototype** para acceder al **this.** de las propiedades de los objeto. También usaremos el operador **new** que nos permitira crear una instancia del objeto definido en **NODO**.
<p>
<br>

***Insertar elementos a la LinkedList***

```javascript

Lista.prototype.agregar = function (value) {
    // Si el head es null entonces head sera el nuevo NODO 
	if (this.head == null) this.head = new Nodo(value)
	else { // Sino
         // creamos un puntero a head
		let refAgregar = this.head
        // mientras el next del siguiente nodo no sea igual a null
		while (refAgregar.next != null) {
            //el next del nodo pasa al siguiente next
			refAgregar = refAgregar.next
		}

		refAgregar.next = new Nodo(value)
	}
}

const lista = new Lista()
console.log(lista)

lista.agregar("Primero")
lista.agregar("Segundo")
lista.agregar("Tercero")
lista.agregar("Cuarto")
lista.agregar("Quinto")
console.log(lista)
```



