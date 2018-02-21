import React from 'react'
import ReactDOM from 'react-dom'
// redux handle async
import thunk from 'redux-thunk'
// applyMiddleware open thunk Middleware
// compose combine function
import {createStore, applyMiddleware, compose} from 'redux'
// pass store, connect react and redux
import {Provider} from 'react-redux'
// reducer
import {counter} from './redux-2'
import App from './App-2'

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
ReactDOM.render(
    (<Provider store={store}>
      <App/>
    </Provider>),
    document.getElementById('root')
)





