import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import initializeStores from './stores/storeInitializer';

const stores = initializeStores();

const app = (
    <Provider {...stores}>
        <BrowserRouter>
            <Helmet titleTemplate="%s | Edutro" title="Kişisel Gelişim Eğitimleri" />
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();