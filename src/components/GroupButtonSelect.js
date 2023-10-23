import React, { useState } from "react";

const GroupButtonSelect = ({ text1, text2, activeState, onToggle }) => {
  return (
    <div>
      <button
        className={activeState === text1 ? "active" : ""}
        onClick={() => onToggle(text1)}
      >
        {text1}
      </button>
      <button
        className={activeState === text2 ? "active" : ""}
        onClick={() => onToggle(text2)}
      >
        {text2}
      </button>
    </div>
  );
};

export default GroupButtonSelect;
