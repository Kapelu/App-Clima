
const tarifa = 7.9

const parsedTarifa = Math.round(tarifa)

//const parsedTarifa = tarifa | 0

// con la expresión: tarifa | 0  obtenemos el mismo redondeo que al usar Math.round  


console.log('tarifa', tarifa)
console.log('parsedTarifa', parsedTarifa)


// De string a entero
const numero = "159";
console.log(numero); // "159"
console.log(parseInt(numero,10)); // 159
// De string a decimal
const numeroDecimal = "236.986";
console.log(numeroDecimal); //"236.986"
console.log(parseFloat(numeroDecimal,10)); //236.986

//* Forma mas resumida
// De string a entero
const numero1 = "159";
console.log(numero1); //"159"
console.log(+numero1); // 159
// De string a decimal
const numeroDecimal1 = "236.986";
console.log(numeroDecimal1); //"236.986"
console.log(+numeroDecimal1); //236.986

const numero2 = "159";
console.log(numero2); // "159"
console.log(Number(numero2)); // 159