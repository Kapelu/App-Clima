// ESTRUCTURA IF...ELSE
/*
if (condicion1) {
    statement1
  } else if (condicion2) {
    statement2
  } else if (condicion3) {
    statement3
  } else if (condicion4) {
    statement4
  } else {
    statement default
}
*/
let color = 4

if (color === 1) {
  console.log(`El ${color} es rojo`)
} else if (color === 2) {
  console.log(`El ${color} es amarillo`)
} else if (color === 3) {
  console.log(`El ${color} es azul`)
} else if (color >= 4) {
  console.log(`El ${color} no es un color primario`)
} else {
  console.log(`${color} debe ser colores primarios`)
}
