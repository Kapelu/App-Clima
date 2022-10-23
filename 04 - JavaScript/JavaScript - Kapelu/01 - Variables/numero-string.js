const edadString = '23'

//const parsedEdad =  Number.parseInt(edad)

const parsedEdadString = +edadString


// reemplazamos el Number.parseInt por un  + (valor) y nos convierte a integer.

console.log('edad es de tipo', typeof edadString ,'y vale ', edadString)
 console.log('edad es de tipo', typeof parsedEdadString, 'y vale ' , parsedEdadString)
