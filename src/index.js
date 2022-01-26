// index.js is the starting point of any new react application
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
// src/index.js
import Parser from 'html-react-parser/dist/html-react-parser'
import "antd/dist/antd.css";
ReactDOM.render(
  <Router>
  {/* our entire app is inside of a Provider this means that each and every component of this app is going to have acces to store variable  */}
    <Provider store={store}>
        <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
