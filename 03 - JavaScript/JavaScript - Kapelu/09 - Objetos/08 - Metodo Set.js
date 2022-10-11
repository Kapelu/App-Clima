// Creamos el objeto Persona literal
let persona = {
  nombre: 'Daniel',
  apellido: 'Calderon',
  edad: 42,
  direccion: 'Uspallata 1424',
  email: 'ddaniel_calderon@hotmail.com',
  hobby : ['caminar', ' programar', 'leer'],
  idioma : 'es',
  get lang(){
    return this.idioma.toUpperCase()
  },
  set lang(lang){
    this.idioma = lang.toUpperCase()
  },
  
  //presentacion: function() {
  get presentacion() {
    //'this.' es un operador que apunta a una variable del objeto
    return 'Hola, mi nombre es ' + this.nombre + ' ' + this.apellido 
},
// Podemos agregar funciones al objeto para
//miFuncion: function () {
get miFuncion() {
  return 'Tengo ' + this.edad + ' años y me gusta ' +this.hobby[1]
}
}

// accedemos a los valores del objeto
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.direccion)
console.log(persona.email)
console.log(persona.hobby)
console.log(persona.lang)

//
persona.lang = 'en'
console.log(persona.lang)
console.log(persona.idioma)


//* _get (obtener) no permite acceder a los valores de las propiedades. esto se realiza eliminando la palabra funcion de un metodo y anteponiendo get seguido del nombre de la propiedadcom se muestra en la linea 8 y 13. por lo que convierte una propiedad en una funcion()._

console.log(persona.presentacion)
console.log(persona.miFuncion)
