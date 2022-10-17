// Aca veremos 2 formas de hacer esta función.
// CON if...else
function tieneEdad(){
    if (edad1 >= 18){
        return '"Aceptado, puedes ingresar"'
    } else {
        return '"Disculpa, no puedes ingresar"'
    }
}
console.log(tieneEdad1(15))

// CON operador ternario
function tieneEdad1(edad1){
    let age = edad1 >= 18 ? '"Aceptado, puedes ingresar"' : '"Disculpa, no puedes ingresar"'
    return age
}
console.log(tieneEdad1(18))