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

//Uso de metodo apply nos permite mandar a llamar un metodo, en un objeto que no tiene definido cierto metodo

console.log( persona1.nombreCompleto('Lic', '66887711') );

// Ahora si queremos pasar esta informacion a traves del metodo apply, tenemos que pasar un arreglo con los valores de los argumentos que queremos mandar a este metodo. Por lo que vamos a hacer es definir un arreglo con los valores del argumento que vamos a pasar al metodo nombreCompleto. y esto lo podemos hacer de 2 formas:

let arreglo = ['Ing','55443322']   // Declaramos el arreglo
// forma 1
console.log( persona1.nombreCompleto.apply( persona2, arreglo) )
// forma 2
console.log( persona1.nombreCompleto.apply( persona2, ['Ing','55443322']) )

