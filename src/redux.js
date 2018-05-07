const ADD_GUN = 'add machine gun.'
const REMOVE_GUN = 'reduce machine guns'

// This is the reducer handler function, the parameter is the state and the new action
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

// action creator, equal store.dispatch
export function addGun() {
  return {type: ADD_GUN}
}

// action creator, equal store.dispatch
export function removeGun() {
  return {type: REMOVE_GUN}
}

// async
export function addGunAsync() {
  // thunk The role of Plug-ins, where you can return functions,
  return dispatch => {
    setTimeout(() => {
      // After the asynchronous end, manually execute the Dispatch
      dispatch(addGun());
    }, 2000);
  };
}