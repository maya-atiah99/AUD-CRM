import React, { useEffect, useState } from "react";

const DateTime = ({
  label,
  required,
  value,
  onChange,
  width,
  name,
  errors,
  touched,
  disabled,
}) => {
  const [initialValue, setInitialValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInitialValue(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };
  useEffect(() => {
    setInitialValue(value);
  }, [value]);

  return (
    <div className='textBox-container'>
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <div
        id='dateInput'
        className={`${
          errors && touched ? "custom-date-input-red" : "custom-date-input"
        }`}
        style={{ width: width }}
      >
        <input
          type='date'
          id={label}
          required={required}
          onChange={handleChange}
          value={initialValue}
          disabled={disabled}
          style={{ cursor: disabled ? "not-allowed" : "pointer" }}
          // className='text-input'
        />
        <span className='custom-date-icon'></span>
      </div>
    </div>
  );
};

export default DateTime;
