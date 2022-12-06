// FUNCION CONSTRUCTOR DE OBJETO DE TIPO PERSONA: creamos un objeto constructor que basicamente seria una plantilla de todos los objeto que queramos realizar para ello lo hacemos a traves del metodo 'new'. primero definimos una funcion. el nombre del constructor empieza con mayusculas

function Persona(nombre, apellido, edad, direccion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
}
// AHORA!!! Podemos crear varios objeto de tipo persona usando el cosntructor de tipo Persona.
let padre = new Persona('Octavio', 'Rodriguez', 67, 'San Isidro 28')
let madre = new Persona('Nilda', 'Romero', 72, 'San Isidro 28')

// Objeto tipo persona, llamado padre
console.log(padre)
console.log(padre['nombre'])
console.log(padre['apellido'])
console.log(padre['edad'])
console.log(padre['direccion'])
// objeto tipo persona, llamada madre
console.log(madre)
console.log(madre.nombre)
console.log(madre.apellido)
console.log(madre.edad)
console.log(madre.direccion)

