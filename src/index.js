import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './Store/Reducers/rootReducer';
import { Provider } from 'mobx-react';
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.css";
import initializeStores from './stores/storeInitializer';

const stores = initializeStores();

ReactDOM.render(
    <Provider {...stores}><App /></Provider>,
    document.getElementById('root')
)

