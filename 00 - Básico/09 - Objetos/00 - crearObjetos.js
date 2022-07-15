// Creamos el objeto Persona literal








const persona = {
    nombre: 'Daniel',
    apellido: 'Calderon',
    edad: 42,
    direccion: 'Uspallata 1424',
    email: 'dcalderon@gmail.com',
    saludo: function sal(){console.log(`hola`)},
    hobby: ['leer', 'correr']
  }
  
  persona.saludo()
  
  // accedemos a los valores del objeto
  console.log(persona.nombre)
  console.log(persona.apellido)
  console.log(persona.edad)
  console.log(persona.direccion)
  console.log(persona.email)
  
  console.table(persona)
  console.info(persona)