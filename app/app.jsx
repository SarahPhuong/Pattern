import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import App from './components/App';

const divRoot = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, divRoot);


