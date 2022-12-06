// USO DE BREAK
/*
for (inicio; condición; incremento) {
  statement
  break
}
*/

for (var elefante = 1; elefante < 10; elefante+=2) {
    if (elefante === 7) {
        break
    }
    console.log(`elefante es ${elefante}`)
}