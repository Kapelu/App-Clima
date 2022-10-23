let saludo = 'Hola !!! Soy Daniel, un placer conocerte'
let objeto = {nombre:'Daniel',apellido:'Calderon', hobby:'caminar'}
let user = 'Lucia'
// .log
console.log(saludo)

// .table
console.table(objeto)

// .count

console.count(`${user}`)

// .dir
console.dir(objeto)

// Agregando estilo al console.log()
console.log('Usando stylos: %cCualquier salida por consola', 'color: yellow; font-style: italic; background-color: green;padding: 2px');
console.log('Multiples styles: %cCon un color %cAgragando otro color', 'color: red', 'color: orange', 'Un mensaje final')

// .times : Registrará el tiempo necesitado por el usuario para descartar el cuadro de alerta
// probarlo en la consola del navegador
console.time('Tiempo de respuesta')
//alert('Click para continuar')
console.timeEnd('Tiempo de respuesta')

