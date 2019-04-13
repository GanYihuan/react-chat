import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk' // async
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import { Provider } from 'react-redux' // pass store, connect react & redux
import { counter } from './redux'
import App from './App-2'

const store = createStore(
  counter,
  compose( // compose: combine func
    applyMiddleware(thunk), // applyMiddleware: open middle ware
    window.devToolsExtension ? window.devToolsExtension() : f => f // open chrome redux plugin
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
