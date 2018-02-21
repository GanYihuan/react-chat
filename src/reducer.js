// 合并所有reducer 并且返回
import {combineReducers} from 'redux'
import {counter} from './redux-2'
import {auth} from './Auth.redux' // 4-11

export default combineReducers({counter, auth})
