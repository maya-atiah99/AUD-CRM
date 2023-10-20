import React from "react";

const AUDButton = ({ text, handleOnClick, icon }) => {
  return (
    <div>
      <button onClick={handleOnClick} className='aud-button'>
        {icon && <img src={icon} alt='Icon' className='button-icon' />}
        {text}
      </button>
    </div>
  );
};

export default AUDButton;
