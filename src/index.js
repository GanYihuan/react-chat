import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {counter, addGun, removeGun} from './index.redux';

// Data safe
const store = createStore(counter);

function render() {
  ReactDom.render(
      <App store={store} addGun={addGun} removeGun={removeGun}/>,
      document.getElementById('root')
  )
}

render();
// Subscriptions, data changes will be implemented anew
store.subscribe(render);