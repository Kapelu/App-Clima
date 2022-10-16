// ESTRUCTURA SWITCH
/*
switch(opcion){
	case opcion1:
		statement1
		break
	case opcion2:
		statement2
		break
	case opcion3:
		statement3
		break
	case opcion4:
		statement4
		break
	default:
		statement default
		break
}
*/
let fruta = 'manzanas'
switch (fruta) {
  case 'naranjas':
    console.log('Las naranjas cuestan $ 30,00 el Kg.')
    break
  case 'manzanas':
    console.log('Las manzanas cuestan $ 28,00 el Kg')
    break
  case 'bananas':
    console.log('Los plátanos cuestan $ 80,00 el Kg.')
    break
  case 'cerezas':
    console.log('Las cerezas cuestan $ 95,00 el Kg.')
    break
  default:
    console.log(`Lo sentimos, no tenemos ${fruta}.`)
}
console.log('¿Hay algo más que quieras?')