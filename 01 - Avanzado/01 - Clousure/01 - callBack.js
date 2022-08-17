/*
CallBack: Es pasar una funcion como parametro. callback, no es una palabra reservada, pero se le llama asi xq representa una llamada hacia otra funcion
*/

const operation=(numerol,numero2,callback) =>{
 return callback(numerol,numero2)
}
console.log(operation(1, 3, (a, b) => a + b))
console.log(operation(1, 3, (a, b) => a * b))
console.log(operation(1, 3, (a, b) => a - b))

/*
Usando CallBack de forma Asyncrona
*/

const operation2 = (numero3, numero4, callback) => {
      return setTimeout(() => {
    callback(numero3,numero4)
  },1000)
}

console.log(operation(1, 3, (a, b) => a + b));
console.log(operation(1, 3, (a, b) => a * b));
console.log(operation(1, 3, (a, b) => a - b));

