import React, { useState } from "react";

const TextBox = ({
  label,
  required,
  width,
  value,
  onChange,
  name,
  errors,
  touched
}) => {

  const [initialValue, setInitialValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInitialValue(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };


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
        style={{ width: width }}
        className={errors && touched ? 'text-input-error' : 'text-input'}
        onChange={handleChange}
        value={initialValue}
      />
    </div>
  );
};

export default TextBox;
