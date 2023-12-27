import React from "react";

const HorizantalLine = ({width}) => {
  return (
    <div className='horizontal-container'>
      <div className='horizontal' style={{width:width}}></div>
    </div>
  );
};

export default HorizantalLine;
