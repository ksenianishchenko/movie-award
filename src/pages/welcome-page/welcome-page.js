import React from "react";
import { Link } from 'react-router-dom';

import "./welcome-page.scss";

const WelcomePage = () => {
  return <div className="welcome-page">
    <div className="welcome-page__inner">
      <h1 className="title title--h1">Movie Awards App</h1>
      <div className="welcome-page__links">
        <Link to="/signup" className="welcome-page__link">SignUp</Link>
        <Link to="/signin" className="welcome-page__link">SignIn</Link>
      </div>
    </div>
  </div>
}

export default WelcomePage;
