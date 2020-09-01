import React, { Component} from "react";
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import {hot} from "react-hot-loader";
import Homepage from "./pages/homepage/homepage";
import WelcomePage from "./pages/welcome-page/welcome-page";
import SignUpPage from "./pages/sign-up-page/sign-up-page";
import SignInPage from "./pages/sign-in-page/sign-in-page";
import {connect} from "react-redux";

import "./App.scss";

const App = (props) => {
  const {isLoggedIn} = props;
  return(
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/signup' render={() => isLoggedIn ? <Redirect to="/" /> : <SignUpPage />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn
})

export default hot(module)(connect(mapStateToProps, null)(App));
