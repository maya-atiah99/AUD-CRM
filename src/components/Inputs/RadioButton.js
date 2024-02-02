import React from "react";

const RadioButton = ({ label, value, checked, handleOnChange,disabled }) => {
  return (
    <div className='radio-input' >
      <input
        type='radio'
        value={value}
        checked={checked}
        onChange={handleOnChange}
        disabled={disabled}
        style={{cursor:disabled ? "not-allowed" :"pointer"}}
      />
      <div className='circle'></div>
      <label>{label}</label>
    </div>
  );
};

export default RadioButton;
