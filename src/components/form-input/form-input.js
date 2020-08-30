import React from "react";

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    <label className="form-input-label">{label}</label>
  </div>
);

export default FormInput;
