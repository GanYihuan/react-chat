// merge all reducers and return.
import { combineReducers } from 'redux'
import { counter } from './redux'
import { auth } from './Auth.redux'

export default combineReducers({ counter, auth })