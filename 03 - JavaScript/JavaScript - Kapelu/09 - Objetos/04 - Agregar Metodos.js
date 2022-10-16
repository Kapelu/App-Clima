// Agregamos los metodos 'hobby' y 'presentacion'
let persona = 
{
    nombre: 'Daniel',
    apellido: 'Calderon',
    edad: 42,
    direccion: 'Uspallata 1424',
    email: 'ddaniel_calderon@hotmail.com',
    hobby : ['caminar', ' programar', 'leer'],
    presentacion: function() {
        //'this.' es un operador que apunta a una variable del objeto
    return 'Hola, mi nombre es ' + this.nombre + ' ' + this.apellido 
    },
    // Podemos agregar funciones al objeto para
    miFuncion: function () {
        return 'Tengo ' + this.edad + ' años y me gusta ' +this.hobby[1]
    }
}
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.direccion)
console.log(persona.email)

// Para llamar a un metodo del tipo array podemos acceder a cada elemento a traves de '[]'
console.log(persona.hobby[0])
console.log(persona.hobby[1])
console.log(persona.hobby[2])

// Para accader a un metodo de tipo fincion debemos agregar los '()'
console.log(persona.presentacion())

// LLamamos a la funcion de la siguiente manera
console.log(persona.miFuncion())
