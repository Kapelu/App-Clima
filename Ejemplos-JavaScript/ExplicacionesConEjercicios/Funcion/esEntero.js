function esEntero(numero) {
    let num = Number.isInteger(numero) ? true : false
    return num
  }
  console.log('El numero es '+esEntero(15))
  console.log('El numero es '+esEntero(20.5))



  //numero % 1 === 0