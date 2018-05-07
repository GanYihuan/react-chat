import React from 'react'
import ReactDom from 'react-dom'
// async
import thunk from 'redux-thunk'
// applyMiddleware: thunk
// compose: combine function
import {createStore, applyMiddleware, compose} from 'redux'
// pass store
import {Provider} from 'react-redux'
// Router4
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
// Merges all reducer and returns
import reducers from './reducer'
// component
// import App from './App' // 4-8, 4-9
import Auth from './Auth'
import Dashboard from './Dashboard'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
console.log(store.getState())

ReactDom.render(
    (<Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* Only the first route to render a hit */}
          <Route path='/login' component={Auth}/>
          <Route path='/dashboard' component={Dashboard}/>
          {/*/!* Default Jump *!/*/}
          <Redirect to='/dashboard'/>
        </Switch>
      </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)