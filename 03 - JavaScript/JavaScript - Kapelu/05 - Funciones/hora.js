function hora(){
    hora = new Date()
    return `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`
}

console.log(hora())