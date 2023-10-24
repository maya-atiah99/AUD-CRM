import React, { useState } from "react";

const SquareCheckBox = ({ text, handleOnChange, value }) => {
  return (
    <label className='checkbox-container'>
      <input type='checkbox' checked={value} onChange={handleOnChange} />
      <span className='checkmark'></span>
      <p>{text}</p>
    </label>
  );
};

export default SquareCheckBox;
