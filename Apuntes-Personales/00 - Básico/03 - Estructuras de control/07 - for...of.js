// ESTRUCTURA FOR OF
/*
for (variable of objeto) {
    statement
  }
*/

// ARRAY

let arr = ['Martina', 'Lucia', 'Thomas']
for (let i of arr) {
  console.log(`${i}`)
}

//MAP
var m = new Map()
m.set(1, 'negro')
m.set(2, 'rojo')
for (var n of m) {
  console.log(`${n}`)
}

// SET
var s = new Set()
s.add(1)
s.add("rojo")
for (var n of s) {
  console.log(`${n}`)
}

// ARGUMENTS OBJECT
function mostrarObjetoArguments() {
  for (let n of arguments) {
    console.log(`${n}`)
  }
}
mostrarObjetoArguments(5, 'azul')
