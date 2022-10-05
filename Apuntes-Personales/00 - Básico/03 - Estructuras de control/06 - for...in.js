// ESTRUCTURA FOR IN
/*
for (variable in objeto) {
    statement
  }
*/

let array = ['perro','gato', 'canario', 'loro']
var s = ''
for (let value in array) {
    s += value + ':' + array[value] + ', '
}
console.log(s)