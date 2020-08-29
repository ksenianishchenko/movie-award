import React, { Component} from "react";

import {hot} from "react-hot-loader";
import Homepage from "./pages/homepage/homepage";

import "./App.scss";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default hot(module)(App);
