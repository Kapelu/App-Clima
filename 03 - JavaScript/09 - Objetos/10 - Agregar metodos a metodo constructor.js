function Persona(nombre, apellido, edad, direccion, email,hobby){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.direccion = direccion;
    this.email = email;
    this.hobby = hobby;
    this.presentacion = function() {
        return 'Hola, mi nombre es ' + this.nombre + ' ' + this.apellido 
    },
    this.miFuncion = function () {
        return this.nombre + ' ' +this.apellido
    }
}
// AHORA!!! Podemos crear varios objeto de tipo persona usando el cosntructor de tipo Persona.
let padre = new Persona('Octavio', 'Rodriguez', 67, 'San Isidro 28','octavio@gmail.com', ['caminar', 'leer'])
let madre = new Persona('Nilda', 'Romero', 72, 'San Isidro 28', 'nilda@gmail.com', ['caminar', 'cocinar'])

// Objeto tipo persona, llamado padre
console.log(padre)
console.log(padre['nombre'])
console.log(padre['apellido'])
console.log(padre['edad'])
console.log(padre['email'])
console.log(padre['hobby'])
console.log(padre['direccion'])
console.log(padre['presentacion'])
console.log(padre['miFuncion']())

// objeto tipo persona, llamada madre
console.log(madre)
console.log(madre.nombre)
console.log(madre.apellido)
console.log(madre.edad)
console.log(madre.email)
console.log(madre.hobby)
console.log(madre.direccion)
console.log(madre.presentacion)
console.log(madre.miFuncion())

