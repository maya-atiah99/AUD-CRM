import React from "react";

const CardTypeTab = ({ active, icon, handleOnClick }) => {
  return (
    <div
      className={`${active ? "activeType" : "inActiveType"}`}
      onClick={handleOnClick}
    >
      <img src={icon} alt='cardType' />
    </div>
  );
};

export default CardTypeTab;
