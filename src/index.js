import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './style.module';
// eslint-disable-next-line no-unused-vars
import { app, analytics } from './api.js';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'))
