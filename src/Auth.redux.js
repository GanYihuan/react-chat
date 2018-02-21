const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
const initState = {
  isAuth: false,
  user: '李云龙',
  age: 20
}

export function auth(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth: true}
    case LOGOUT:
      return {...state, isAuth: false}
    case USER_DATA:
      return {...state, user: action.payload.user, age: action.payload.age}
    default:
      return state
  }
}

// action creators
export function login() {
  return {type: LOGIN}
}

export function logout() {
  return {type: LOGOUT}
}
