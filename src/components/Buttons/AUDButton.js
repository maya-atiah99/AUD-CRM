import React from "react";
import { Link } from "react-router-dom";

const AUDButton = ({ text, to, handleOnClick, icon, width }) => {
  return (
    <Link to={to}>
      <button
        onClick={handleOnClick}
        className='aud-button'
        style={{ width: width }}
      >
        {icon && <img src={icon} alt='Icon' className='button-icon' />}
        {text}
      </button>
    </Link>
  );
};

export default AUDButton;
