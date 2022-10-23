# TABLA HASH

*Las tablas hash son una estructura de datos que permite crear una lista de valores emparejados, por lo tal, se puede recuperar un determinado valor usando la llave de ese valor para el índice, que se pone en la tabla de antemano.*

*Una tabla hash transforma una llave en un índice entero, usando una función hash, el índice decidirá dónde almacenar el par llave/valor en la memoria.*

*Normalmente se utiliza una tabla hash por su rapidez en las operaciones de búsqueda, inserción y eliminación*
*para poder entenderlo mejor vamos a ver un ejemplo:*

*Supongamos que tenemos una sencilla agenda de telefonos, donde solamente podemos agregar 10 contactos. Para ello diremos que tenemos un objeto con el nombre y el nro. de telefono. Donde el `nombre : key` y `telefono : value`*

```js
const nombre = {
    Marcos : 15975364
    // key : value
}
```
*En este caso tendremos solamente 10 lugares disponibles. ¿Que pasaria si tuvieramos que agregar 1000 contactos?. utilizando una `tabla Hash` en ambos casos seria lo mismo ya que se simplificaria el proceso al crear una "funcion hash" que nos transformaria una `key` en un index donde a este index obtendremos un residuo que sera el valor del numero de casilla donde podriamos almacenar nuestro `objeto`. *

![](/JavaScript%20-%20Kapelu/scr/tablaHash01.png)
<br>

*Una funcion hash puede ser determinada de cualquier forma, veremos cual es la mas recomendada.*
<br>

![](/JavaScript%20-%20Kapelu/scr/tablaHash02.png)

<br>

*Imaginemos que queremos mapear el string de "marcos", para luego encontrarle una casilla para almacenarlo, para ello crearemos un algoritmo sencillo donde nos diga el valor ascci de cada una de la letras que componen el nombre de "marcos", luego las sumariamos y nos daria un resultado de `645`.Obviamente no vamos a crear 645 casillas para almacenar el `value` de "marcos" para ello creariamos una pequeña funcion que nos de el modulo de 10 que serian el numero de casilla que nesecitamos en nuestra agenda, y eso nos daria un indice que seria la posicion `5`, pues a partir de ahi sabriamos que el objeto "marcos" ocuparia la casilla numero `5`*

<br>

![](/JavaScript%20-%20Kapelu/scr/tablaHash03.png)

*Ahora bien,* **¿Que pasaria si queremos agregar a lena?**. *aqui hariamos el mismo procedimiento, con la diferencia que lo tendriamos que guardar en la casilla `7`.*

<br>

![](/JavaScript%20-%20Kapelu/scr/tablaHash04.png)

<br>

**¿Que pasaria si al agregar un tercer objeto nos da el mismo indice que "marcos"?** *Pues aqui se produce lo que se llama colisión*

<br>

![](/JavaScript%20-%20Kapelu/scr/tablaHash05.png)

<br>

*Para resolver este problema, la forma mas recomendad es mediante listas enlazadas*

