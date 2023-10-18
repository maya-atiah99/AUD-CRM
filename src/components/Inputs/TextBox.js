import React from 'react';

const TextBox = ({ label, required, value, setValue, width, placeholder }) => {
  return (
    <div className='textBox-container'>
      <label htmlFor={label}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type="text"
        id={label}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: width }}
        placeholder={placeholder}
        className='text-input'
      />
    </div>
  );
};

export default TextBox;
