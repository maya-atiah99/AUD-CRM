import React from "react";

const RadioButton = ({  label, value, checked, handleOnChange }) => {
  return (
    <div className="radio-input ">
        <input  
       type="radio"
       value={value}
       checked={checked}
       onChange={handleOnChange} />
       <div className="circle"></div>
      <label>{label}</label>
      </div> 
  );
};

export default RadioButton;
