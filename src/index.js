import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Store} from './store/index'
import App from './containers/App'
import './common/css/style.css'


ReactDOM.render(
    <Provider store={Store}><App /></Provider>, 
    document.getElementById('root')
);


