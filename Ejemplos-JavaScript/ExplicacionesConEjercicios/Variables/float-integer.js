


const edades = [12,12,54,12,23,41,13,12,21,39,12,78,32,33,3]


const uniqueEdades = edades.filter((value,index,array) => array.indexOf(value) === index)

 //const uniqueEdades = Array.from (new Set(edades))

// mas optimizado con spread operator

//const uniqueEdades = [...(new Set(edades))]

uniqueEdades.sort()

console.log(uniqueEdades)

