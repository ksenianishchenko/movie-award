import React, {useState} from "react";

import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";

import "./sign-up.scss";

const handleSubmit = () => {

}

const handleChange = () => {

}

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  return <div className='sign-up'>
    <h2 class="title">Sign up with your email and password</h2>
    <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='name'
        value={name}
        onChange={handleChange}
        label='Display Name'
        required
      />
      <FormInput
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        label='Email'
        required
      />
      <FormInput
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        label='Password'
        required
      />
      <FormInput
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleChange}
        label='Confirm Password'
        required
      />
      <FormButton type="submit">Sign Up</FormButton>
    </form>
  </div>
}

export default SignUp;
