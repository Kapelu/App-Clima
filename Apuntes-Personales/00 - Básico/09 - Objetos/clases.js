// clases con notacion funcion
function Persona (nombre, apellido, edad, direcion){
    this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direcion = direcion;
        this.saludo = function (){return 'hola soy '+this.nombre}
        this.datos = { //objeto dentro de un objeto
            nombresCompleto : this.nombre + ' ' + this.apellido,
            edad: this.edad + ' años de edad',
            direcion: this.direcion
        }

}

//clases con notacion clase
/*
class Persona {
    constructor(nombre, apellido, edad, direcion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direcion = direcion;
        
        this.datos = { //objeto dentro de un objeto
            nombresCompleto : this.nombre + ' ' + this.apellido,
            edad: this.edad + ' años de edad',
            direcion: this.direcion
        }
    }
    saludo(){return 'hola'+this.nombre}
}*/
// crea los objetos
const daniel= new Persona('daniel','calderon',42,'uspallata 456')
const lucia= new Persona('lucia','calderon',6, 'uspallata 456')
//salidas por consola
console.log(daniel.nombre);
console.log(lucia.nombre);
console.log(daniel.saludo());
console.log(lucia.saludo());

const datosLucia = lucia.datos
console.info(datosLucia)
console.log(datosLucia.nombresCompleto);

// prototype se usa para agregar metodos de afuera de la clase.
Persona.prototype.getDirecion=function(){ return this.direcion}
console.log(daniel.getDirecion());