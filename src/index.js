// index.js is the starting point of any new react application
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
    <Router>
    <App/>
    </Router>
    ,document.getElementById('root'));