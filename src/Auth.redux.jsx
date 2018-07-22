import axios from 'axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
const initState = {
	isAuth: false,
	user: '李云龙',
	age: 20
}

/* reducer 处理 */
export function auth(state = initState, action) {
	// console.log(state)
	switch (action.type) {
		case LOGIN:
			return { ...state, isAuth: true }
		case LOGOUT:
			return { ...state, isAuth: false }
		case USER_DATA:
			return { ...state, user: action.payload.user, age: action.payload.age }
		default:
			return state
	}
}

/* async */
export function getUserData() {
	/* dispatch: 用于通知数据修改 */
	return dispatch => {
		axios.get('/data').then(res => {
			if (res.status === 200) {
				dispatch(userData(res.data))
			}
		})
	}
}

/* action (store.dispatch) */
/* payload: 用户数据 */
export function userData(data) {
	return { type: USER_DATA, payload: data }
}

/* action (store.dispatch) */
export function login() {
	return { type: LOGIN }
}

/* action (store.dispatch) */
export function logout() {
	return { type: LOGOUT }
}
