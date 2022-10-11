let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Escudero'
}

// Agregamos al metodo 'call' los argumentos que queremos para el metodo persona
console.log( persona1.nombreCompleto.call( persona2, 'Ing', '+54 358 456-2198' ) )

// Para que el objeto persona1 tenga los argumentos agregados al metodo nombre completo, tenemos que pasar el argumento a nombreCompleto de persona1
console.log( persona1.nombreCompleto('Lic.', '+54 11 561-2356') )
