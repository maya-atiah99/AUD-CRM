import React, { useState } from "react";

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
      {!isExpanded && (
        <div className={containerClassName} onClick={toggleExpansion}>
          {collapsed}
        </div>
      )}

      {isExpanded && (
        <div className='collapsed-container test' onClick={toggleExpansion}>
          {expanded}
        </div>
      )}
    </div>
  );
};

export default ExpandableBox;
