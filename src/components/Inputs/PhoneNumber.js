import React, { useEffect, useState } from "react";
import PhoneInput , { isValidPhoneNumber } from "react-phone-input-2";
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
  validate,
  disabled
}) => {
  const [initialValue, setInitialValue] = useState(value);

  const inputStyle = {
    width: "100%",
    border: errors && touched ? "1px solid red" : "",
  };

  const handlePhoneChange = (phone) => {
    setInitialValue(phone);
    onChange(name, phone);
  };

  const handleValidate = (value) => {
    const isValid = isValidPhoneNumber(value);
    console.log({ isValid })
    return isValid
  }

  useEffect(() => {
    setInitialValue(value);
  }, [value]);

  return (
    <div  style={{ color: disabled ? "#1b224c3f" : "#1B224C" }}>
      {label ? (
        <label htmlFor={name}>
          {label}
         {required ? <span className='required'>*</span> : ""} 
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
        // isValid={(value, country) => {
        //   return validate(value, country);
        // }}
        disabled={disabled ? true : false}
      />
    </div>
  );
};

export default PhoneNumber;
