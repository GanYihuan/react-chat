import React from 'react'
import ReactDOM from 'react-dom'
/* async */
import thunk from 'redux-thunk'
/* createStore 创建 store */
/* applyMiddleware 开启中间键 */
/* compose 组合函数功能 */
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
/* 传递 store, 连接 react & redux */
import { Provider } from 'react-redux'
import { counter } from './redux'
import App from './App-2'

const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    // 开启 chrome redux 插件
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
