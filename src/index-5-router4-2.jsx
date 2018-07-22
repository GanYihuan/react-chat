import React from 'react'
import ReactDom from 'react-dom'
/* async */
import thunk from 'redux-thunk'
/*
applyMiddleware 开启中间键
组合功能
*/
import { createStore, applyMiddleware, compose } from 'redux'
/* 传递 store, 连接react redux */
import { Provider } from 'react-redux'
/* Router4 */
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
/* 合并 reducer */
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'
import './config'

const store = createStore(
	reducers,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)
// console.log(store.getState())

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				{/* Switch: 渲染单个 Route. */}
				<Route path="/login" component={Auth} />
				<Route path="/dashboard" component={Dashboard} />
				{/* 默认跳转 */}
				<Redirect to="/dashboard" />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
