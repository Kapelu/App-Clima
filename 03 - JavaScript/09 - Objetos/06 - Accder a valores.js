let persona = 
{
    nombre: 'Daniel',
    apellido: 'Calderon',
    edad: 42,
    direccion: 'Jose Estrada 1424',
    email: 'ddaniel_calderon@hotmail.com',
    hobby : ['caminar', ' programar', 'leer'],
    presentacion: function() {
        return 'Hola, mi nombre es ' + this.nombre + ' ' + this.apellido 
    },
    miFuncion: function () {
        return 'Tengo ' + this.edad + ' años y me gusta ' +this.hobby[1]
    }
}

// Una forma de accader a las propiedades y valores de objeto es a traves de del statment 'for ... in'
for(propiedad in persona) {
    // de esta forma accedemos a las propiedades
    console.log(propiedad)
    // de esta forma accedemos a los valores de las propiedades
    console.log(persona[propiedad])
}

// Otra forma de acceder a los valores es a traves de 'Object' junto con la palabra reservada 'value'
let personaArray = Object.values(persona)
console.log(personaArray)

// Otra forma es usando el metodo 'JSON.stringify' que basicamente nos convierte nuestro objeto en una cadena
let personaString = JSON.stringify(persona)
console.log(personaString);