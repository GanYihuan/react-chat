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
  Switch,
  Link
} from 'react-router-dom'
// Merges all reducer and returns
import reducers from './reducer'
// component
import App from './App' // 4-8, 4-9

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
console.log(store.getState())

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

class Test extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // can see history, location, match
    console.log(this.props)
    // History jump
    // this.props.history.push('/')
    // Parameters/:location
    return <h2>get Parameters: {this.props.match.params.location}</h2>
  }
}

ReactDom.render(
    (<Provider store={store}>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>One</Link>
            </li>
            <li>
              <Link to='/erying'>Two</Link>
            </li>
            <li>
              <Link to='/qibinglian'>Three</Link>
            </li>
          </ul>
          <Switch>
            {/* exact: Full match/jump to app */}
            <Route path='/' exact component={App}/>
            <Route path='/erying' component={Erying}/>
            <Route path='/qibinglian' component={Qibinglian}/>
            <Route path='/:location' component={Test}/>
            {/* Default Jump */}
            {/* Parameters/:location */}
            {/*<Redirect to='/:location'></Redirect>*/}
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)