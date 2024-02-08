import React, { useEffect, useState } from "react";

const TextBox = ({
  label,
  required,
  width,
  value,
  onChange,
  name,
  errors,
  touched,
  type,
  disabled,
  moreInfo,
}) => {
  const [initialValue, setInitialValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInitialValue(newValue);
    if (name) {
      if (onChange) {
        onChange(name, newValue);
      }
    } else {
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const inputStyle = {
    width: width,
    borderColor: errors && touched && "#F3223C",
    cursor: disabled ? "no-drop" : "text",
  };

  useEffect(() => {
    {
      !type && setInitialValue(value);
    }
  }, [value]);

  return (
    <div className='textBox-container'>
      <label htmlFor={label} style={{ cursor: disabled ? "no-drop" : "text" }}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <input
        type={type ? type : "text"}
        id={label}
        // required={required}
        style={inputStyle}
        className='text-input'
        onChange={handleChange}
        value={initialValue}
        disabled={disabled ? true : false}
      />
      {moreInfo ? (
        <img
          src='/images/moreInfoIcon.svg'
          alt='more'
          className='moreInfo-img'
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default TextBox;
