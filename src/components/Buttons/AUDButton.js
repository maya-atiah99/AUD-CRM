import React from "react";

const AUDButton = ({ text, handleOnClick, icon,width }) => {
  return (
    <div>
      <button onClick={handleOnClick} className='aud-button' style={{width:width}}>
        {icon && <img src={icon} alt='Icon' className='button-icon' />}
        {text}
      </button>
    </div>
  );
};

export default AUDButton;
