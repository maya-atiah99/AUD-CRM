import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumber = ({ label, required, value, setValue, width }) => {
  const customStyles = {
    container: (base) => ({
      ...base,
      width:`${width} !important`,
    }),
  };
  const containerClass = `custom-phone-input-${width}`;
  return (
    <div>
      {label ? (
        <label htmlFor={label}>
          {label}
          <span className="required">*</span>
        </label>
      ) : (
        ""
      )}
      <PhoneInput
        name="phone"
        placeholder=""
        value={value || "AE"}
        onChange={setValue}
        defaultCountry="AE"
        autoComplete="off"
        required={required}
        // inputStyle={customStyles} 
        className={containerClass}
      />
    </div>
  );
};

export default PhoneNumber;
