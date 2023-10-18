import React from 'react';

const RoundedButton = ({ text, icon, handleOnClick }) => {
  return (
    <button className="rounded-button" onClick={()=>handleOnClick()}>
      {icon && <img src={icon} alt="Icon" className="button-icon" />}
      {text}
    </button>
  );
};

export default RoundedButton;
