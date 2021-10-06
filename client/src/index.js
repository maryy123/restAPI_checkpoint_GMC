import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { store } from './JS/Store/store';
<link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon"/> 



ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


