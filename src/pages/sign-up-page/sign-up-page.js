import React from "react";

import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in";

import "./sign-up-page.scss";

const SignUpPage = () => {
  return <div className="sign-up-page">
    <div className="sign-up-page__inner">
      <h1 class="title">Movie Awards App</h1>
      <div className="sign-up-page__wrap">
        <SignIn />
        <SignUp />
      </div>
    </div>
  </div>
}

export default SignUpPage;
