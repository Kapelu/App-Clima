import logo from './logo.svg'
import './App.css'
/* import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApi'
import {EventosES6, EventosES7,} from './components/Eventos'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks' 
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'*/
import HooksPersonalizados from './components/HooksPersonalizados'

function App() {
	return (
		<>
			<div className='App'>
				<header className='App-header'>
					<section>
						<img src={logo} className='App-logo' alt='logo' />
						<section className='titulo'>
							<h1>Curso de React</h1>
							<p>Jon Mircha</p>
						</section>
					</section>

					<section>{
					/* 
						<Componente msg='Hola soy un componente Funcional Expresado desde una prop' />
						<hr />
						<Propiedades
							cadena='Esto es una cadena'
							numero={19}
							booleano={false}
							arreglo={[1, 2, 3]}
							objeto={{nombre: 'Daniel', apellido: 'Calderon'}}
							funcion={(numero) => numero * numero}
							elementoReact={
								<i>Esto es un elemento React con estilo</i>
							}
						/>
						<hr />
						<Estado />
						<hr />
						<RenderizadoCondicional />
						<hr />
						<RenderizadoElementos />
						<hr />
						<EventosES6 />
						<hr />
						<EventosES7 />
						<hr />
						<MasSobreEventos />
						<hr />
						<ComunicacionComponentes />
						<hr />
						<CicloVida />
						<hr />
						<AjaxApis />
						<hr />
						<ContadorHooks titulo='Seguidores'/>
						<hr />
						<ScrollHooks /> 
						<hr />
						<RelojHooks />
						<hr />
						<AjaxHooks />*/}
						<hr />
						<HooksPersonalizados />
					</section>
				</header>
			</div>
			<section></section>
		</>
	)
}

export default App
