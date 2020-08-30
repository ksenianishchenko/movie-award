import React, {useState} from "react";

import FormInput from "../form-input/form-input";
import FormButton from "../form-button/form-button";

import "./sign-in.scss";

const handleSubmit = () => {

}

const handleChange = () => {

}

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return <div className='sign-in'>
   <h2 class="title">Sign in with your email and password</h2>
   <form className='sign-up-form' onSubmit={handleSubmit}>
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
     <FormButton type="submit">Sign In</FormButton>
   </form>
  </div>
}

export default SignIn;
