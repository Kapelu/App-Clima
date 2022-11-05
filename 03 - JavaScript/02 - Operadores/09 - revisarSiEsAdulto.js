
function esAdulto(edad){
    let age = edad >= 18 ? '"Felicidades, ya has crecido!!!"' : '"Disculpa, aún queda por crecer!!!"'
    return age
}
console.log(esAdulto(18))