import React, {Component} from 'react'
import {
  Link,
  Route,
  Redirect
} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './Auth.redux.js'
import App from './App-1'

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

@connect(
    // auth: reducers.js
    state => state.auth,
    {logout}
)
class Dashboard extends Component {
  render() {
    const match = this.props.match
    // console.log(this.props.match)
    // match: get the hit route
    // match.url: real route
    // match.path: youreself defined route
    const redirectToLogin = <Redirect to='/login'/>
    const app = (
        <div>
          <h1>独立团</h1>
          {
            this.props.isAuth
                ?
                <button onClick={this.props.logout}>注销</button>
                : null
          }
          <ul>
            <li>
              <Link to={`${match.url}/`}>一营</Link>
            </li>
            <li>
              <Link to={`${match.url}/erying`}>二营</Link>
            </li>
            <li>
              <Link to={`${match.url}/qibinglian`}>骑兵连</Link>
            </li>
          </ul>
          {/* exact: Full match/jump to app */}
          <Route path={`${match.url}/`} exact component={App}/>
          <Route path={`${match.url}/erying`} component={Erying}/>
          <Route path={`${match.url}/qibinglian`} component={Qibinglian}/>
        </div>
    )

    // isAuth: Auth.redux.js
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default Dashboard

