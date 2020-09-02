import React, {useState, useEffect} from "react";

import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";
import {connect} from "react-redux";
import {addNewUser} from "../../redux/user/user-reducer";

import "./sign-up.scss";

const SignUp = (props) => {
  const {addNewUserToDb, error} = props;
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    let user = inputValues;
    addNewUserToDb(user);
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  return <div className='sign-up'>
    <h2 className="title">Sign up with your email and password</h2>
    <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='username'
        value={inputValues.username}
        onChange={handleChange}
        label='Display Name'
        required
      />
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
      <FormInput
        type='password'
        name='password_confirmation'
        value={inputValues.password_confirmation}
        onChange={handleChange}
        label='Confirm Password'
        required
      />
      <FormButton type="submit">Sign Up</FormButton>
      {error ? <p className="main-text error">{error}</p> : ''}
    </form>
  </div>
}

const mapStateToProps = (state) => ({
  error: state.user.onSignUpError
})

const mapDispatchToProps = (dispatch) => ({
  addNewUserToDb: (user) => {
    dispatch(addNewUser(user));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
