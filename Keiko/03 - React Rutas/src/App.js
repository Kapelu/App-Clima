import logo from './logo.svg'
import './App.css'

function App() {
	return (
		<>
			<div className='App'>
				<header className='App-header'>
					<section>
						<img src={logo} className='App-logo' alt='logo' />
						<section className='titulo'>
							<h1>Curso de React</h1>
							<p>Jon Mircha - React Route</p>
							<hr />
							<a href='https://reactrouter.com' target='_blank' rel='noreferrer'>Documentacion</a>
						</section>
					</section>

					<section>
						{/* Video 53 - Introducción y definicion de rutas */}
						<hr />
					</section>
				</header>
			</div>
		</>
	)
}
export default App