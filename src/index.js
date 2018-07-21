import React from 'react'
import ReactDOM from 'react-dom'
/* async */
import thunk from 'redux-thunk'
/*
applyMiddleware open thunk middleware
compose combine function
*/
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux'
/* pass store, connect react redux */
import { Provider } from 'react-redux'
import { counter } from './redux'
import App from './App-2'

const store = createStore(
	counter,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
