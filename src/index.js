import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {counter, addGun, removeGun, addGunAsync} from './index.redux';

// Data safe.
const store = createStore(counter, applyMiddleware(thunk));

function render() {
  ReactDom.render(
      <App
          store={store}
          addGun={addGun}
          removeGun={removeGun}
          addGunAsync={addGunAsync}
      />,
      document.getElementById('root')
  )
}

render();
// Subscriptions, data changes will be implemented anew
store.subscribe(render);