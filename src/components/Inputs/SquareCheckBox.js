import React, { useEffect } from "react";

const SquareCheckBox = ({ text, value, onChange, errors, touched }) => {

  
  return (
    <label className='checkbox-container'>
      <input
        type='checkbox'
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className={`${errors && touched ? "red-checkmark " : "checkmark"}`}
      ></span>
      <p>{text}</p>
    </label>
  );
};

export default SquareCheckBox;
