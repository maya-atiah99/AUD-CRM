import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const ExpandableBox = ({ isRounded, expanded, collapsed }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerClassName = `collapsed-container ${
    isRounded ? "roundedRadius" : ""
  }`;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className={containerClassName}>
        {!isExpanded && <div onClick={toggleExpansion}>{collapsed}</div>}
        {isExpanded && (
          <div className='d-flex flex-column gap-2'>
            <AiOutlineClose onClick={toggleExpansion} className='close-icon' />

            {expanded}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandableBox;
