import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from './Auth.redux'

// Two reducers each reducers has a state
// Merging Reducers
@connect(
    // index.js: store.getState()
    state => state.auth,
    {login}
)
class Auth extends React.Component {
  render() {
    return (
        <div>
          <h2>我的名字是{this.props.user},年龄{this.props.age}</h2>
          {
            this.props.isAuth
              ? <Redirect to='/dashboard'/>
              : null
          }
          <h2>你没有权限，需要登录才能看</h2>
          <button onClick={this.props.login}>登录</button>
        </div>
    )
  }
}

export default Auth
