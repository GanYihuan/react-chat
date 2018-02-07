import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
// applyMiddleware: async
// compose: function Combination
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {counter} from './index.redux';

// Data safe
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devlToolsExtension ? window.devlToolsExtension() : f => f
));

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>
    ,
    document.getElementById('root')
)

