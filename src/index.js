import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Helmet } from 'react-helmet'
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const app = (
    <BrowserRouter>
        <Helmet titleTemplate="%s | Edutro" title="Kişisel Gelişim Eğitimleri" />
        <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();