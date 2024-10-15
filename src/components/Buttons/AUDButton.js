import React from "react";
import { Link } from "react-router-dom";

const AUDButton = ({ text, to, handleOnClick, icon, width, disabled }) => {
  return (
    <button
      onClick={handleOnClick}
      className={`aud-button ${disabled ? "aud-button-disabled" : ""}`}
      style={{ width: width }}
      disabled={disabled}
    >
      {icon && <img src={icon} alt='Icon' className='button-icon' />}
      {text}
    </button>
  );
};

export default AUDButton;
