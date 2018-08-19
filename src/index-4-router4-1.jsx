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
import { BrowserRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
/* merges reducer & returns */
import reducers from './reducer'
import App from './App-1'

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
	render() {
		/*
    history: route jump
		location: current page information
		url: 地址后域名
		path: 本地定义的地址
		match: 参数使用
    */
		console.log(this.props)
		/*
    历史跳转
		this.props.history.push('/')
		参数 /:location
    */
		return <h2>get Parameters: {this.props.match.params.location}</h2>
	}
}

ReactDom.render(
	/* 传递 store, 连接react redux */
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
					{/* Switch: 渲染单个 Route. */}
					{/* exact: 完全匹配路由，防止包含关系 */}
					<Route path="/" exact component={App} />
					<Route path="/erying" component={Erying} />
					<Route path="/qibinglian" component={Qibinglian} />
					{/* 输入参数跳转 */}
					<Route path="/:location" component={Test} />
					{/* 默认跳转 */}
					<Redirect to="/:location" />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
