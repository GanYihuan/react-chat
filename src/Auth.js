import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login, getUserData} from './Auth.redux'
import axios from 'axios'

// Two reducers each reducers has a state
// Merging Reducers
@connect(
    // reducer.js : auth
    state => state.auth,
    {login, getUserData}
)
class Auth extends React.Component {
  componentDidMount() {
    this.props.getUserData()
  }

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

