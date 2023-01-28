import logo from './logo.svg'
import './App.css'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'

function App() {
	return (
		<>
			<div className='App'>
				<header className='App-header'>
					<section>
						<img src={logo} className='App-logo' alt='logo' />
					</section>
					<section>
						<Componente msg='Hola soy un componente Funcional Expresado desde una prop' />
						<hr />
						<Propiedades
							cadena='Esto es una cadena'
							numero={19}
							booleano={false}
							arreglo={[1,2,3]}
							objeto={{nombre:'Daniel', apellido:'Calderon'}}
							funcion={numero=> numero*numero}
							elementoReact={<i>Esto es un elemento React con estilo</i>}
						/>
						<hr />
						<Estado />
					</section>
				</header>
			</div>
			<section></section>
		</>
	)
}

export default App
