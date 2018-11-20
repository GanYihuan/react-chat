// constants.js
const ADD_GUN = 'add machine gun.'
const REMOVE_GUN = 'reduce machine guns'

// actionCreator.js
/* action (store.dispatch) */
export function addGun() {
	return { type: ADD_GUN }
}
/* action (store.dispatch) */
export function removeGun() {
	return { type: REMOVE_GUN }
}
/* async */
export function addGunAsync() {
  // thunk 插件的作用，可以返回函数
	return dispatch => {
		setTimeout(() => {
			/* 异步结束后，手动执行分派 */
			dispatch(addGun())
		}, 2000)
	}
}

// reducer.js
// generate new state based on old state and action
export function counter(state = 10, action) {
	// let state = state||0
	switch (action.type) {
		case ADD_GUN:
			return state + 1
		case REMOVE_GUN:
			return state - 1
		default:
			return state
	}
}
