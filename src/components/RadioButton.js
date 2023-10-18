import React from "react";

const RadioButton = ({  label, value, checked, handkeOnChange }) => {
  return (
    <div className="radio-input ">
        <input  
       type="radio"
       value={value}
       checked={checked}
       onChange={handkeOnChange} />
       <div class="circle"></div>
      <label>{label}</label>
      </div> 
  );
};

export default RadioButton;
