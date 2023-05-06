import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colors.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/_store/index';

import {fakeBackend} from '../src/_helpers';
fakeBackend();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
);

reportWebVitals();