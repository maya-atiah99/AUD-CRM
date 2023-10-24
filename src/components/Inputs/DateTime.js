import React from "react";

const DateTime = ({
  label,
  required,
  value,
  setValue,
  type,
  placeholder,
  width,
}) => {
  return (
    <div className='textBox-container'>
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <div
        id='dateInput'
        className='custom-date-input'
        style={{ width: width }}
      >
        <input
          type='date'
          id={label}
          required={required}
          value={value}
          // onChange={(e) => setValue(e.target.value)}
          placeholder=''
          // className='text-input'
        />
        <span className='custom-date-icon'></span>
      </div>
    </div>
  );
};

export default DateTime;
