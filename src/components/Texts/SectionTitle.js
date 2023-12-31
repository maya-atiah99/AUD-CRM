import React from "react";

const SectionTitle = ({ title, dotted, isTaken, noLine }) => {
  return (
    <div className='title-with-line'>
      <h4 className='title'>{title}</h4>
      {isTaken && <span>(IF TAKEN)</span>}
      {!noLine && <div className={`${dotted ? "dotted-line" : "line"}`}></div>}
    </div>
  );
};

export default SectionTitle;
