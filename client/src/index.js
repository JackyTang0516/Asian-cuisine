import React from 'react';
import ReactDOM from 'react-dom';
//initialize Redux
import { Provider } from 'react-redux';//know all stored stuffs from anywhere
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createRoot } from 'react-dom/client'
import reducers from './reducers';

import App from './App';
import './index.css';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
createRoot(document.getElementById('root')).render(
    <Provider store= {store}>
        <App />
    </Provider> ,
);