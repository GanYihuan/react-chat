import React from 'react'
import ReactDom from 'react-dom'
// async
import thunk from 'redux-thunk'
// applyMiddleware: thunk
// compose: combine function
import { createStore, applyMiddleware, compose } from 'redux'
// pass store, connect react and redux
import { Provider } from 'react-redux'
// Router4
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
// Merges all reducer and returns
import reducers from './reducer'
// component
import App from './App-1' // 4-8, 4-9

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)
console.log(store.getState())

function Erying() {
	return <h2>二营</h2>
}

function Qibinglian() {
	return <h2>骑兵连</h2>
}

class Test extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		// history: History, route jump.
		// location: Current page information,
		// url: domain name after address,
		// path: native defined address.
		// match: Parameters using
		console.log(this.props)
		// History jump
		// this.props.history.push('/')
		// Parameters/:location
		return <h2>get Parameters: {this.props.match.params.location}</h2>
	}
}

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to="/">One</Link>
					</li>
					<li>
						<Link to="/erying">Two</Link>
					</li>
					<li>
						<Link to="/qibinglian">Three</Link>
					</li>
				</ul>
				<Switch>
					{/* Switch: Render only one Route. */}
					{/* exact: Perfect match to prevent containment. */}
					<Route path="/" exact component={App} />
					<Route path="/erying" component={Erying} />
					<Route path="/qibinglian" component={Qibinglian} />
					<Route path="/:location" component={Test} />
					{/* The default jump */}
					{/* Parameters/:location */}
					<Redirect to="/:location" />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
