// El metodo 'call' nos permite llamar un metodo que esta definido en un objeto, desde otro Objeto.
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Escudero'
}

//Uso de 'call' para usar el metodo nombreCompleto que pertenece a 1persona1' con los datos del objeto persona2

console.log( persona1.nombreCompleto() )

console.log( persona1.nombreCompleto.call( persona2 ) )