import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {counter, addGun, removeGun} from './index.redux';

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
// Data safe
const store = createStore(counter);

function render() {
  ReactDom.render(
      <App store={store} addGun={addGun} removeGun={removeGun}/>,
      document.getElementById('root')
  )
}

store.subscribe(listener);
// 派发事件，传递action.
store.dispatch({type: 'add'});
store.dispatch({type: 'add'});
store.dispatch({type: 'decrease'});
render();
// Subscriptions, data changes will be implemented anew
store.subscribe(render);
