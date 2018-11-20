import React from 'react'
import ReactDOM from 'react-dom'
/* async */
import thunk from 'redux-thunk'
/* applyMiddleware 开启中间键 组合功能 */
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux'
/* 传递 store, 连接react redux */
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
  /* 传递 store, 连接react redux */
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
