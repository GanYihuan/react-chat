import {createStore} from 'redux';

// reducer.
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
// 新建store.
const store = createStore(counter);
const init = store.getState();
console.log(init);

function listener() {
  const current = store.getState();
  // Note that the symbol above the TAB key is
  console.log(`有${current}`);
}

store.subscribe(listener);
// 派发事件，传递action
store.dispatch({type: 'add'});
store.dispatch({type: 'add'});
store.dispatch({type: 'decrease'});