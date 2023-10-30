import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber = ({
  label,
  required,
  name,
  value,
  onChange,
  width,
  errors,
  touched,
}) => {
  const [initialValue, setInitialValue] = useState(value);
  // const customStyles = {
  //   container: (base) => ({
  //     ...base,
  //     width: `${width} !important`,
  //   }),
  // };

  // const containerClass = `custom-phone-input-${width}`;

  // const phoneInputStyle = {
  //   width: width
  // };

  const inputStyle = {
    width: '100%',
    border: errors && touched ? '1px solid red' : '',
  };

  const handlePhoneChange = (phone) => {
    setInitialValue(phone);
    onChange(name, phone);
  };

  return (
    <div>
      {label ? (
        <label htmlFor={name}>
          {label}
          <span className='required'>*</span>
        </label>
      ) : (
        ""
      )}
   
        <PhoneInput
          country={"ae"}
          value={initialValue}
          onChange={handlePhoneChange}
          autoComplete='off'
          required={required}
          inputStyle={inputStyle}
        />

    </div>
  );
};

export default PhoneNumber;
