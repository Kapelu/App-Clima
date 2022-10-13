# ESTRUCTURAS DE DATOS

*En ciencias de la computación, una estructura de datos​ es una forma particular de organizar datos en una computadora para que puedan ser utilizados de manera eficiente. Son un medio para manejar grandes cantidades de datos de manera eficiente para usos tales como grandes bases de datos y servicios de indización de Internet.*

*Primero, debemos diferenciar entre estructura de dato estática y estructura de dato dinámica*

* ****Las estructuras de datos estáticas**: Son aquellas en las que el tamaño ocupado en memoria se define antes de que el programa se ejecute y no puede modificarse dicho tamaño durante la ejecución del programa.*

* ***Las estructura de datos dinámica***: Es aquella en la que el tamaño ocupado en memoria puede modificarse durante la ejecución del programa.

Cada tipo de estructura dependerá del tipo de aplicación que se requiera. Una típica dentro de las estructuras de datos estáticas son los arrays:

Arrays
¿Qué es un array en programación? Un array es un tipo de dato estructurado que permite almacenar un conjunto de datos homogéneo y ordenado, es decir, todos ellos del mismo tipo y relacionados. Su condición de homogéneo, indica que sus elementos están compuestos por el mismo tipo de dato, y su condición de ordenado hace que se pueda identificar del primer al último elemento que lo compone.

Estructura de datos dinámicas
Por otro lado, vimos que en programación existen estructuras de datos dinámicas, es decir, una colección de elementos -nodos- que normalmente se utilizan para dejar asentados registros. A diferencia de un array que contiene espacio para almacenar un número fijo de elementos, una estructura dinámica de datos se amplía y contrae durante la ejecución del programa. Veamos algunos casos:

Estructura de datos lineales
Las estructuras de datos lineales son aquellas en las que los elementos ocupan lugares sucesivos en la estructura y cada uno de ellos tiene un único sucesor y un único predecesor, es decir, sus elementos están ubicados uno al lado del otro relacionados en forma lineal.

Hay tres tipos de estructuras de datos lineales:

Listas enlazadas
Pilas
Colas


* *Las `Listas enlazadas` son colecciones de elementos llamados nodos, el orden entre estos se establece por medio de un tipo de datos denominado punteros, apuntadores, direcciones o referencias a otros nodos. Por tanto, siempre es importante distinguir entre un dato de tipo apuntador y el dato contenido en la celda al cual este apunta. Las operaciones mas importantes que se realizan en las estructuras de datos son las de busqueda, insercion y eliminacion.* 

  *Se utilizan tambien para comparar la eficiencia de las estructuras de datos y de esta forma observar cual es la estructura que mejor se adpta al tipo de problema que se quiere resolver. La busqueda por ejemplo, es una operación que no se puede realizar en forma eficiente en las listas. Por otra parte, las operaciones de insercion y eliminacion se efectuan de manera eficiente en este tipo de estructura de datos. Este capitulo se dedicara a las estructuras dinamicas lineales llamadas listas; entre se distinguen tres tipos: `Listas enlzadas simples`, `Listas doblemente enlazadas` y `listas Circulares`.* 

* *Las `Tabla Hash` es una estructura de datos que implementa el tipo de dato abstracto llamado Diccionario. Esta asocia llaves o claves con valores (`key : Value`).*

  *Son una estructura de datos que permite crear una lista de valores emparejados, por lo tal, se puede recuperar un determinado valor usando la llave de ese valor para el índice, que se pone en la tabla de antemano. Transforma una llave en un índice entero, usando una función hash, el índice decidirá dónde almacenar el par llave/valor en la memoria:*

* *Los `Árboles Binarios` son una estructura no lineal formada por un conjunto de nodos y un conjunto de ramas. En un árbol existe un nodo especial denominado raíz. Así mismo, un nodo del que sale alguna rama, recibe el nombre de nodo de bifurcación o nodo rama y un nodo que no tiene ramas recibe el nombre de nodo hoja.*

*Sin más preámbulo vayamos a estudiar cada uno de ellos:*

[:memo: Listas Enlazadas](https://github.com/Kapelu/Apuntes-Personales/tree/main/03%20-%20JavaScript/JavaScript%20-%20Kapelu/13%20-%20Estructuras%20de%20Datos/01%20-%20Listas%20Enlazadas)

[:memo: Tabla Hash](www.google.com.ar)

[:memo: Árboles Binarios](www.google.com.ar)