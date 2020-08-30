import React, { Component} from "react";
import { Switch, Route, Link } from 'react-router-dom';

import {hot} from "react-hot-loader";
import Homepage from "./pages/homepage/homepage";
import WelcomePage from "./pages/welcome-page/welcome-page";
import SignUpPage from "./pages/sign-up-page/sign-up-page";
import SignInPage from "./pages/sign-in-page/sign-in-page";

import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/signup' component={SignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
