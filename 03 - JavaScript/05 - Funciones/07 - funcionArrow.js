// Funcion Tradicional
const func = function (a,b) {
    return a + b
}
console.log(func(2,2))  //4

// Función Flecha
const func1 = (a,b) => {
  return a + b
}
console.log(func1(5,5))  // 10


const func2 = () => "Función flecha." // 0 parámetros: Devuelve "Función flecha"
const func3 = (e) => e + 1 // 1 parámetro: Devuelve el valor de e + 1
const func4 = (a, b) => a + b // 2 parámetros: Devuelve el valor de a + b