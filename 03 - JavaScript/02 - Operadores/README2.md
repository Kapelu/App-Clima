```javascript
const Kapelu = {
     name: 'Daniel Calderon',
     code: ['Javascript', 'HTML', 'CSS', 'NodeJS'],
    tools: ['Visual Studio Code','GitBash', 'GitHub'],
   github: 'https://github.com/Kapelu'
}
```
<h1 align="center">OPERADORES</h1>

### *OPERADOR DE ASIGNACIÓN*

Basicamente este operador asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. Hay dos tipos de operadores de asignación.

* OPERADORES DE ASIGNACIÓN SIMPLE: Es el signo ( = ), este le asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = y asigna el valor de `x` a `y`.

* OPERADORES COMPUESTOS: Son el resultado de combinar expresiones matemáticas con un operador de asignación simple, para ello lo podemos ver en la sigiente tabla


| **_Nombre_**                                        | **_Operador Abreviado_** | **_Significado_** |
|-----------------------------------------------------|:------------------------:|-------------------|
| Asignación                                          |           x = y          |       x = y       |
| Asignación de adición                               |          x += y          |     x = x + y     |
| Asignación de resta                                 |          x -= y          |     x = x - y     |
| Asignación de multiplicación                        |          x *= y          |     x = x * y     |
| Asignación de división                              |          x /= y          |     x = x / y     |
| Asignación de residuo                               |          x %= y          |     x = x % y     |
| Asignación de exponenciación                        |          x **= y         |     x = x ** Y    |
| Asignación de desplazamiento a la izquierda         |          x <<= y         |     x = x << y    |
| Asignación de desplazamiento a la derecha           |          x >>= y         |     x = x >> y    |
| Asignación de desplazamiento a la derecha sin signo |         x >>>= y         |    x = x >>> y    |
| Asignación AND bit a bit                            |          x &= y          |     x = x & y     |
| Asignación XOR bit a bit                            |          x ^= y          |     x = x ^ y     |
| Asignación OR bit a bit                             |          x \|= y         |     x = x \| y    |
| Asignación AND lógico                               |          x &&= y         |    x && (x = y)   |
| Asignación OR lógico                                |         x \|\|= y        |   x \|\| (x = y)  |
| Asignación de anulación lógica                      |          x ??= y         |    x ?? (x = y)   |

**Valor de retorno**

La mayoria de las expresiones tienen un valor de retorno. Por ejemplo:  `x` = `y`, esto significa que en `x` = `y`
el valor de retorno va a ser el de `y`, por que el valor de retorno coincide con la expresión a la derecha del signo.

```javascript
var x = 10 
var y = 5
retorno = x = y
console.log(retorno)   // 5
```
En el caso de asignaciones lógicas, (`x` &&= `y`), (`x` || = `y`) y (`x` ??= `y`), el valor de retorno es el de la operación lógica sin la asignación, entonces `x` && `y`, `x` || `y` e  `x` ?? `y`, respectivamente.

Teniendo en cuenta que los valores de retorno siempre se basan en los valores de los operandos antes de la operación.

### *OPERADORES DE COMPARACIÓN*

Estos comparan sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Las cadenas se comparan según el orden , utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente. Las únicas excepciones a la conversión de tipos dentro de las comparaciones involucran a los operadores === y !==, que realizan comparaciones estrictas de igualdad y desigualdad. Estos operadores no intentan convertir los operandos a tipos compatibles antes de verificar la igualdad. 

La siguiente tabla teniendo en cuenta las variables var1 y var2, describiremos como funcionan los operadores de comparación en términos de este código de ejemplo:

```javascript
var var1 = 3
var var2 = 4
```
| Operador                   | Descripción                                                                                                | Ejemplos que devuelven true          |
|----------------------------|------------------------------------------------------------------------------------------------------------|--------------------------------------|
| Igual (==)                 | Devuelve true si los operandos son iguales.                                                                | 3 == var1<br>"3" == var1<br>3 == '3' |
| No es igual (!=)           | Devuelve true si los operandos no son iguales.                                                             | var1 != 4<br>var2 != "3"             |
| Estrictamente igual (===)  | Devuelve true si los operandos son iguales y del mismo tipo. Consulta también Object.is y similitud en JS. | 3 === var1                           |
| Desigualdad estricta (!==) | Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.                | var1 !== "3"<br>3 !== '3'            |
| Mayor que (>)              | Devuelve true si el operando izquierdo es mayor que el operando derecho.                                   | var2 > var1<br>"12" > 2              |
| Mayor o igual que (>=)     | Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.                           | var2 >= var1<br>var1 >= 3            |
| Menor que (<)              | Devuelve true si el operando izquierdo es menor que el operando derecho.                                   | var1 < var2<br>"2" < 12              |
| Menor o igual (<=)         | Devuelve true si el operando izquierdo es menor o igual que el operando derecho.                           | var1 <= var2<br>var2 <= 5            |

### *OPERADORES ARITMÉTICOS*

Realizar operaciones matemáticas y cálculo es algo muy común que se hace con cualquier lenguaje de programación.

JavaScript ofrece varios operadores para ayudarnos a trabajar con números. Además de las operaciones aritméticas estándar (+, -, *, /), JavaScript proporciona los operadores aritméticos enumerados en la siguiente tabla:

| perador                         | Descripción                                                                                                                                                                                                                             | Ejemplo                                                                                                                |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Residuo (%)                     | Operador binario. Devuelve el resto entero de dividir los dos operandos.                                                                                                                                                                | 12 % 5 devuelve 2.                                                                                                     |
| Incremento (++)                 | Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno. | Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y , solo entonces, establece x en 4.         |
| Decremento (--)                 | Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.                                                                                                                                | Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y, solo entonces, establece x en 2. |
| Negación unaria (-)             | Operador unario. Devuelve la negación de su operando.                                                                                                                                                                                   | Si x es 3, entonces -x devuelve -3.                                                                                    |
| Positivo unario (+)             | Operador unario. Intenta convertir el operando en un número, si aún no lo es.                                                                                                                                                           | +"3" devuelve 3.<br>+true devuelve 1.                                                                                  |
| Operador de exponenciación (**) | Calcula la base a la potencia de exponente, es decir, baseexponente                                                                                                                                                                     | 2 ** 3 returns 8.<br>10 ** -1 returns 0.1.                                                                             |

### *OPERADORES LÓGICOS*

Los operadores lógicos se utilizan con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano `true` = `false`. Sin embargo, los operadores && y || en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano. 

En la siguiente tabla, veremos como funcionan:


| Operador                         | Descripción                                                                                                                                                                                                                             | Ejemplo                                                                                                                |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Residuo (%)                     | Operador binario. Devuelve el resto entero de dividir los dos operandos.                                                                                                                                                                | 12 % 5 devuelve 2.                                                                                                     |
| Incremento (++)                 | Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno. | Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y , solo entonces, establece x en 4.         |
| Decremento (--)                 | Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.                                                                                                                                | Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y, solo entonces, establece x en 2. |
| Negación unaria (-)             | Operador unario. Devuelve la negación de su operando.                                                                                                                                                                                   | Si x es 3, entonces -x devuelve -3.                                                                                    |
| Positivo unario (+)             | Operador unario. Intenta convertir el operando en un número, si aún no lo es.                                                                                                                                                           | +"3" devuelve 3.<br>+true devuelve 1.                                                                                  |
| Operador de exponenciación (**) | Calcula la base a la potencia de exponente, es decir, baseexponente                                                                                                                                                                     | 2 ** 3 returns 8.<br>10 ** -1 returns 0.1.                                                                             |

>El siguiente código muestra ejemplos del operador && (AND lógico).

```javascript
var a1 =  true && true;     // t && t devuelve true
var a2 =  true && false;    // t && f devuelve false
var a3 = false && true;     // f && t devuelve false
var a4 = false && (3 == 4); // f && f devuelve false
var a5 = 'Cat' && 'Dog';    // t && t devuelve Dog
var a6 = false && 'Cat';    // f && t devuelve false
var a7 = 'Cat' && false;    // t && f devuelve false
```
>El siguiente código muestra ejemplos del operador || (OR lógico).

```javascript
var o1 =  true || true;     // t || t devuelve true
var o2 = false || true;     // f || t devuelve true
var o3 =  true || false;    // t || f devuelve true
var o4 = false || (3 == 4); // f || f devuelve false
var o5 = 'Cat' || 'Dog';    // t || t devuelve Cat
var o6 = false || 'Cat';    // f || t devuelve Cat
var o7 = 'Cat' || false;    // t || f devuelve Cat
```
>El siguiente código muestra ejemplos de el operador ! (NOT lógico).

```javascript
var n1 = !true;  // !t devuelve false
var n2 = !false; // !f devuelve true
var n3 = !'Cat'; // !t devuelve false
```

### *OPERADOR CONDICIONAL ( tenario )*

Este es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de dos valores según una condición. La sintaxis es:

```javascript
condicion ? valor1 : valor2
```
**Este se lee asi:** si condition es true, el operador tiene el valor de valor1. De lo contrario, tiene el valor de valor2. Puedes utilizar el operador condicional en cualquier lugar donde normalmente utilizas un operador estándar. Veamos un ejemplo para ver como funciona:

```javascript
var estado = 1

var conexion = (estado === 1) ? 'Esta OnLine' : 'Esta OffLine'

console.log(conexion)
```
Esta declaración asigna el valor "Esta OnLine" a la variable conexion si estado es 1. De lo contrario, asigna el valor "Esta OffLine" a conexion.

### *OPERADOR DE COMA*

Este simplemente evalúa ambos operandos y devuelve el valor del último operando. Este operador se utiliza principalmente dentro de un bucle `for`, para permitir que se actualicen múltiples variables cada vez a través del bucle. Se considera de mal estilo usarlo en otros lugares, cuando no es necesario. A menudo, en su lugar pueden y se deben utilizar dos declaraciones independientes.

```javascript
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x]

for (var i = 0, j = 9; i <= j; i++, j--)
console.log(`a [${i}][${j}] = ${i,j}`)
```
si `a` es un arreglo bidimensional con 10 elementos en un lado, el siguiente código usa el operador coma para actualizar dos variables a la vez. El código imprime los valores de los elementos diagonales en el arreglo.

<h3 align="center">OPERADORES UNARIOS </h3>

Es una operación que solo necesita un valor para operar. Esto quiere decir que un operador unario más un valor nos va a devolver otro valor. Ellos son:

* Operador delete
* Operador void
* Operador typeof
* Operadores relacionales
  
> ***Operador delete:*** Elimina la propiedad de un objeto.

* Es importante saber que el operador delete no libera memoria directamente (solo elimina la referencia), puede liberar memoria de manera indirecta siempre y cuando la referencia a la propiedad ha desaparecido.
* Si el operador delete funciona correctamente, eliminará la propiedad del objeto completo, pero si existe otra propiedad con el mismo nombre dentro del prototype, este heredera la propiedad del prototype.
* El operador delete no funciona en variables o nombres de funciones, por lo que solo es funcional en las propiedades de objetos.
* El operador delete no puede eliminar algunas propiedades de los objetos predefinidos como Object, Array, Math, etc.
Veamos algunos ejemplos:

```javascript
x = 42 // implícitamente crea window.x
var y = 43
var myobj = {h: 4} // crea un objeto con la propiedad h

delete x        // devuelve true (se puede eliminar si se crea implícitamente)
delete y        // devuelve false (no se puede borrar si se declara con var)
delete Math.PI  // devuelve false (no se pueden eliminar propiedades no configurables)
delete myobj.h  // devuelve true (puede eliminar propiedades definidas por el usuario)
```
Podemos eliminar un elemento dentro de un array, pero es muy importante tomar en cuenta que la longitud del array no se ve afectada (incluso si borrar el último elemento), por lo que la referencia en memoria va a permanecer como empty.

```javascript
let foo = ['apple', 'banana', 'pineapple', 'watermelon'];

delete foo[2]; // Nos devuelve true

console.log(foo); //Nos devuelve (4) ["apple", "banana", empty, "watermelon"]. 
```
En el ejemplo anterior vemos que borra el valor de la posicion 2 de foo, pero no borra la posición en si. Es por eso que es recomendable usar  `.pop` o `.shift` para borrar elementos de foo. delete prooca que se borre el valor de memoria, pero no su ubicación.

> ***Operador void:*** Especifica una expresión que se evaluará sin devolver un valor.

se utiliza de cualquiera de las siguientes formas:

```javascript
void (expression)
void expression
```
expression es una expresión de JavaScript para evaluar. Los paréntesis que rodean la expresión son opcionales, pero es un buen estilo usarlos.

> ***Operador typeof:*** Este devuelve una cadena (string) que nos indica el tipo de operando, pero sin evaluarlo.

A continuacion veammos unos ejemplos para entenderlo:

```javascript
var myFun = new Function('5 + 2')
var shape = 'round'
var size = 1
var foo = ['Apple', 'Mango', 'Orange']
var today = new Date()

typeof myFun       // devuelve "function"
typeof shape       // devuelve "string"
typeof size        // devuelve "number"
typeof foo         // devuelve "object"
typeof today       // devuelve "object"
typeof doesntExist // devuelve "undefined"

typeof true // devuelve "boolean"
typeof null // devuelve "object"

typeof 62            // devuelve "number"
typeof 'Hola mundo'  // devuelve "string"
```

### *OPERADORES RELACIONALES*

 Un operador relacional compara sus operandos y devuelve un valor Boolean basado en si la comparación es verdadera.

> **`in`:** Devuelve true si la propiedad especificada está en el objeto especificado. La sintaxis es:
```javascript
propNameOrNumber in objectName
```
donde propNameOrNumber es una expresión de cadena, numérica o de símbolo que representa un nombre de propiedad o índice de arreglo, y objectName es el nombre de un objeto.

Veamos algunos ejemplos:
```javascript
// Arreglos
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // devuelve true
3 in trees;        // devuelve true
6 in trees;        // devuelve false
'bay' in trees;    // devuelve false (debes especificar el número del índice,
                   // no el valor en ese índice)
'length' en trees; // devuelve true (la longitud es una propiedad de Array)

// objetos integrados
'PI' in Math;          // devuelve true
var myString = new String('coral');
'length' in myString;  // devuelve true

// Objetos personalizados
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // devuelve true
'model' in mycar; // devuelve true
```

> **`instanceof`:** Devuelve true si el objeto especificado es del tipo de objeto especificado.
La sintaxis es:
```javascript
objectName instanceof objectType
```
donde objectName es el nombre del objeto para comparar con objectType, y objectType es un tipo de objeto, como Date o Array.

Utiliza instanceof cuando necesites confirmar el tipo de un objeto en tiempo de ejecución. Por ejemplo, al detectar excepciones, puedes ramificar a diferentes controladores según el tipo de excepción lanzada.

Por ejemplo, el siguiente código usa instanceof para determinar si theDay es un objeto Date. Debido a que theDay es un objeto Date, las instrucciones de la expresión if se ejecutan.

```javascript
var theDay = new Date(1995, 12, 17)

if (theDay instanceof Date) {
  // instrucciones a ejecutar
}
```

<h3 align="center">PRECEDENCIA DE OPERADORES </h3>

La precedencia de operadores determina el orden en el cual los operadores son 
evaluados. Los operadores con mayor precedencia son evaluados primero. El operador de multiplicación ("*") 
tiene una precedencia mas alta que el operador de suma ("+") y por eso sera evaluado primero.

La precedencia de un operador indica qué tan estrechamente se unen dos expresiones juntas. Por ejemplo, en la expresión 1 + 5 * 3 , la respuesta es 16 y no 18 porque el operador de multiplicación ("*") tiene una
precedencia mayor que el operador de adición ("+").

Veamos la Siguiente tabla

| Tipo de operador         | Operadores individuales                               |
|--------------------------|-------------------------------------------------------|
| miembro                  | . []                                                  |
| llamar / crear instancia | () new                                                |
| negación / incremento    | ! ~ - + ++ -- typeof void delete                      |
| multiplicar / dividir    | * / %                                                 |
| adición / sustracción    | + -                                                   |
| desplazamiento bit a bit | << >> >>>                                             |
| relacional               | < <= > >= in instanceof                               |
| igualdad                 | == != === !==                                         |
| AND bit a bit            | &                                                     |
| XOR bit a bit            | ^                                                     |
| OR bit a bit             | \|                                                    |
| AND lógico               | &&                                                    |
| OR lógico                | \|\|                                                  |
| condicional              | ?:                                                    |
| asignación               | = += -= *= /= %= <<= >>= >>>= &= ^= \|= &&= \|\|= ??= |
| coma                     | ,                                                     |

<br/>
<br/>
<br/>
<h1 align="center"></h1>
<h3 align="left">by Kapelu
<h1 align="center"></h1>