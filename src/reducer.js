// 合并所有reducer 并且返回
import {combineReducers} from 'redux'
import {user} from './redux/user.redux'
import {auth} from './Auth.redux' // 4-11

export default combineReducers({user})

