import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './data/store'
import {Provider} from 'react-redux'
import './components/ReduxCounter'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
