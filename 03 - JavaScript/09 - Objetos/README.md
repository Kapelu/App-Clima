```javascript
const Kapelu = {
     name: 'Daniel Calderon',
     code: ['Javascript', 'HTML', 'CSS', 'NodeJS'],
    tools: ['Visual Studio Code','GitBash', 'GitHub'],
   github: 'https://github.com/Kapelu'
}
```
<h1 align="center">Objetos</h1>

Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.

En JavaScript, un objeto es un entidad independiente con propiedades y tipos. Compáralo con una taza, por ejemplo. Una taza es un objeto con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. Del mismo modo, los objetos de JavaScript pueden tener propiedades que definan sus características.

En palabras simples:

Los objetos son una colección de propiedades

Para construir objetos podemos hacerlo de dos maneras:

### ***Objetos declarativos o literales*** 

Podemos crear objetos sin necesidad de un constructor o instanciar una clase, para esto solo declaramos el objeto y sus propiedades.

```javascript
const persona = {
	nombre: 'Daniel',
	apellido: 'Calderon',
	edad: 42,
	direccion: 'Uspallata 1424',
	email: 'dcalderon@gmail.com',
	saludo: function saludar() {
		console.log(`hola`) // hola
	},
	hobby: ['leer', 'correr'],
}
persona.saludo()
// accedemos a los valores del objeto
console.log(persona.nombre) // Daniel
console.log(persona.apellido) // Calderon
console.log(persona.edad) // 42
console.log(persona.direccion) // Uspallata 1424
console.log(persona.email) // dcalderon@gmail.com
console.log(persona.saludo)  //[funcion: saludar]
console.log(persona.hobby)  // ['leer', 'correr']
console.table(persona)
console.info(persona)
```
### ***Con notación clase constructor***

El prototipo de sistema no es una forma común de construir objetos. Los desarrolladores están más familiarizados en construir objetos fuera de las clases

```javascript
class Persona {
	constructor(nombre, apellido, edad, direccion) {
		this.nombre = nombre
		this.apellido = apellido
		this.edad = edad
		this.direccion = direccion
		this.datos = {                                             //objeto dentro de un objeto
			nombresCompleto: this.nombre + ' ' + this.apellido,
			edad: this.edad + ' años de edad',
			direccion: this.direccion,
		}
	}
	saludo() {
		return 'hola ' + this.nombre
	}
}

// crea los objetos
const daniel = new Persona('daniel', 'calderon', 42, 'uspallata 456')
const lucia = new Persona('lucia', 'calderon', 6, 'uspallata 456')
//salidas por consola
console.log(daniel.nombre)  //daniel
console.log(lucia.nombre)  // lucia
console.log(daniel.saludo())  // hola daniel
console.log(lucia.saludo())  //hola lucia

const datosLucia = lucia.datos
console.info(datosLucia)
console.log(datosLucia.nombresCompleto)

// prototype se usa para agregar metodos de afuera de la clase.
Persona.prototype.getDireccion = function () {
	return this.direccion
}
console.log(daniel.getDireccion())  // uspallata 456
```

### ***clases con notacion funcion***

```javascript
function Persona(nombre, apellido, edad, direccion) {
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.direccion = direccion
	this.saludo = function () {
		return 'hola soy ' + this.nombre
	}
	this.datos = {         	//objeto dentro de un objeto
		nombresCompleto: this.nombre + ' ' + this.apellido,
		edad: this.edad + ' años de edad',
		direcion: this.direccion,
	}
}
// crea los objetos
const daniel = new Persona('daniel', 'calderon', 42, 'uspallata 456')
const lucia = new Persona('lucia', 'calderon', 6, 'uspallata 456')
//salidas por consola
console.log(daniel.nombre)  //daniel
console.log(lucia.nombre)  // lucia
console.log(daniel.saludo())  // hola daniel
console.log(lucia.saludo())  //hola lucia

const datosLucia = lucia.datos
console.info(datosLucia)
console.log(datosLucia.nombresCompleto)

// prototype se usa para agregar metodos de afuera de la clase.
Persona.prototype.getDireccion = function () {
	return this.direccion
}
console.log(daniel.getDireccion()) 
```

<br/>
<br/>
<br/>
<h1 align="center"></h1>
<h3 align="left">by Kapelu
<h1 align="center"></h1>