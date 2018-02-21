import {createStore} from 'redux';

// reducer
// Generate new state based on Old State and action
function counter(state = 0, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'decrease':
      return state - 1;
    default:
      return 10;
  }
}

// create store
const store = createStore(counter);
// Get status
const init = store.getState();
console.log(init);

function listener() {
  // Get status
  const current = store.getState();
  // Note that the symbol above the TAB key is
  console.log(`have ${current}`);
}
// Listening, subscribing
store.subscribe(listener);

// Distributing events, passing action
// Handling Events
store.dispatch({type: 'add'});
store.dispatch({type: 'add'});
store.dispatch({type: 'decrease'});