const ADD_GUN = 'add machine gun.'
const REMOVE_GUN = 'reduce machine guns'

/* reducer 处理 */
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
	/* 验证插件的角色 */
	return dispatch => {
		setTimeout(() => {
			/* 异步结束后，手动执行分派 */ 
			dispatch(addGun())
		}, 2000)
	}
}
