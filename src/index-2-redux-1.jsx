import { createStore } from 'redux'

// 1) reducer
// generate new state based on old state and action
function counter(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1
    case 'decrease':
      return state - 1
    default:
      return 10
  }
}

// 2) create store
const store = createStore(counter)
// get status
const init = store.getState()
console.log(init)

function listener() {
  // get status
  const current = store.getState()
  // note that the symbol above the TAB key is
  console.log(`have ${current}`)
}

// 3) listening, subscribe
store.subscribe(listener)

// 4) distribute events, pass action
// handling events
store.dispatch({ type: 'add' })
store.dispatch({ type: 'add' })
store.dispatch({ type: 'decrease' })
