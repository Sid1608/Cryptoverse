// index.js is the starting point of any new react application
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css'
ReactDOM.render(
    <Router>
        <App/>
    </Router>
    ,document.getElementById('root'));