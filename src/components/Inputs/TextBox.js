import React from "react";

const TextBox = ({ label, required, value,onChange, width, placeholder }) => {
  return (
    <div className='textBox-container'>
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <input
        type='text'
        id={label}
        required={required}
        value={value}
        onChange={onChange}
        style={{ width: width }}
        className='text-input'
      />
    </div>
  );
};

export default TextBox;
