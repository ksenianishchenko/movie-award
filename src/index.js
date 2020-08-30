import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./App.js";
import store from "./redux/store";
import { BrowserRouter } from 'react-router-dom';

import "./index.scss";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ Provider>,
  document.getElementById("root")
);
