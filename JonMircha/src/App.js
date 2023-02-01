import logo from './logo.svg'
import './App.css'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import Eventos from './components/Eventos'

function App() {
	return (
		<>
			<div className='App'>
				<header className='App-header'>
					<section>
						<img src={logo} className='App-logo' alt='logo' />
						<section>
						<h1>Curso de React</h1>
						<p>Jon Mircha</p>
						</section>
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
						<hr />
						<RenderizadoCondicional />
						<hr />
						<RenderizadoElementos />
						<hr /> 
						<Eventos />
					</section>
				</header>
			</div>
			<section></section>
		</>
	)
}

export default App
