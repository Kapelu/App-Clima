function saludo(idioma){
    let saludar = idioma === 'Aleman' ? 'Guten tag!': idioma === 'Mandarin' ? 'Ni Hao!': idioma === 'Ingles' ? 'Hello':'Hola'
    return saludar                  
}
console.log(saludo('Ingles'))
