import React from "react";

const TabButton = ({ active, text, handleOnClick }) => {
  return (
    <a
      className={`${active ? "active-tab" : " inactive-tab"}`}
      onClick={handleOnClick}
    >
      {text}
    </a>
  );
};

export default TabButton;
