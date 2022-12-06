# React

## ¿Que es React?

Una biblioteca de JavaScript para construir interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien. A esto se le llama Declarativo,las vistas declarativas hacen que tu código sea más predecible, por lo tanto, fácil de depurar.

## Caracteristicas



## Basado en componentes

Crea componentes encapsulados independiente y reusables que manejen su propio estado, y conviértelos en interfaces de usuario complejas. Ya que la lógica de los componentes está escrita en JavaScript y no en plantillas, puedes pasar datos de forma sencilla a través de tu aplicación y mantener el estado fuera del DOM.

![Componentes](./scr/Componentes.png)

<br>

![Componentes Funcionales](./scr/componentesFuncionales.png)

<br>

![Caracteristicas](./scr/Caracteristicas.png)

<br>

Un `Componente Funcional` es simplemente una funcion de `javascript` que retorna un elemento de React, un elemento que se escribe en una sintaxis extendida de `javascript` que se llama *`.jsx`*, va ser como una descripcion en html de lo que queremos que represente ese componente en nuestra aplicación.

```js
function Saludo(props){
	return <h1>¡Hola, {props.nombre}!</h1>
}
```
<br>

![Caracteristicas](./scr/Caracteristicas3.png)

<br>



## Un componente simple

Los componentes de React implementan un método llamado `render()` que recibe datos de entrada y retorna qué mostrar. Este ejemplo utiliza una sintaxis similar a XML llamada JSX. Puedes acceder a los datos de entrada que se pasan al componente mediante `render()` a través de `this.props`.

JSX es opcional y no es requerido para usar React. Prueba [Babel REPL](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.20.4&externalPlugins=&assumptions=%7B%7D) para ver el código JavaScript sin procesar la compilación de JSX.

```js
class HelloMessage extends React.Component {
	render() {
		return <div>Hola {this.props.name}</div>
	}
}
root.render(<HelloMessage name='Taylor' />)
```

## Un componente con estado

Además de obtener datos de entrada (a los que accedes a través de `this.props`), un componente puede tener datos en su estado interno (a los que accedes a través de `this.state`). Cuando los datos del estado de un componente cambian, se vuelve a invocar render con los nuevos valores en `this.state`.

```js
class Timer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {seconds: 0}
	}

	tick() {
		this.setState((state) => ({
			seconds: state.seconds + 1,
		}))
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000)
	}
}
```

## Una aplicación

Usando `props` y `state`, podemos integrar todo en una pequeña aplicación de tareas pendientes. Este ejemplo usa `state` para tener un control de la lista actual de objetos así como el texto que el usuario ha ingresado. A pesar de que los manejadores de eventos parecen ser renderizados en línea, serán recolectados e implementados usando delegación de eventos.

```js
class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {items: [], text: ''}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	render() {
		return (
			<div>
				<h3>Tareas pendientes</h3>
				<TodoList items={this.state.items} />
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='new-todo'>¿Qué se necesita hacer?</label>
					<input
						id='new-todo'
						onChange={this.handleChange}
						value={this.state.text}
					/>
					<button>Añadir #{this.state.items.length + 1}</button>
				</form>
			</div>
		)
	}

	handleChange(e) {
		this.setState({text: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault()
		if (this.state.text.length === 0) {
			return
		}
		const newItem = {
			text: this.state.text,
			id: Date.now(),
		}
		this.setState((state) => ({
			items: state.items.concat(newItem),
			text: '',
		}))
	}
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.items.map((item) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		)
	}
}

root.render(<TodoApp />)
```

## Un componente usando plugins externos
React permite interactuar con otras bibliotecas y frameworks. Este ejemplo usa `remarkable`, una biblioteca externa de Markdown, que convierte los valores de `<textarea>` en tiempo real.

```js
class MarkdownEditor extends React.Component {
	constructor(props) {
		super(props)
		this.md = new Remarkable()
		this.handleChange = this.handleChange.bind(this)
		this.state = {value: '¡Hola **mundo**!'}
	}

	handleChange(e) {
		this.setState({value: e.target.value})
	}

	getRawMarkup() {
		return {__html: this.md.render(this.state.value)}
	}

	render() {
		return (
			<div className='MarkdownEditor'>
				<h3>Entrada</h3>
				<label htmlFor='markdown-content'>
					Introduce algún texto en markdown
				</label>
				<textarea
					id='markdown-content'
					onChange={this.handleChange}
					defaultValue={this.state.value}
				/>
				<h3>Salida</h3>
				<div
					className='content'
					dangerouslySetInnerHTML={this.getRawMarkup()}
				/>
			</div>
		)
	}
}

root.render(<MarkdownEditor />)
```
[SIGUIENTE =>](./01%20-%20React%20-%20Componentes.md)