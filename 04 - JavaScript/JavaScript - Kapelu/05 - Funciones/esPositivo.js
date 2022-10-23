function esPositivo(numero) {
  let num = numero >= 0 ? (`${numero} Es Positivo`) : (`${numero} Es Negativo`)
  return num
}
console.log(esPositivo(-14))
console.log(esPositivo(14))
