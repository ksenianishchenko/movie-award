import React from 'react';

import './form-button.scss';

const FormButton = ({ children, ...otherProps }) => (
  <button className='form-button transition' {...otherProps}>
    {children}
  </button>
);

export default FormButton;
