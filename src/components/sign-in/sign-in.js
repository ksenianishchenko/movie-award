import React, {useState} from "react";

import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import {connect} from "react-redux";
import {onLoginRequest} from "../../redux/user/user-reducer";

import "./sign-in.scss";

const SignIn = (props) => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const {onLoginFormRequest} = props;
    const user = inputValues;
    onLoginFormRequest(user);
  }

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setInputValues({...inputValues, [name]: value });
  }

  return <div className='sign-in'>
   <h2 className="title">Sign in with your email and password</h2>
   <form className='sign-up-form' onSubmit={handleSubmit}>
     <FormInput
       type='email'
       name='email'
       value={inputValues.email}
       onChange={handleChange}
       label='Email'
       required
     />
     <FormInput
       type='password'
       name='password'
       value={inputValues.password}
       onChange={handleChange}
       label='Password'
       required
     />
     <FormButton type="submit">Sign In</FormButton>
   </form>
  </div>
}

const mapDispatchToProps = (dispatch) => ({
  onLoginFormRequest: (user) => {
    dispatch(onLoginRequest(user));
  }
})

export default connect(null, mapDispatchToProps)(SignIn);
