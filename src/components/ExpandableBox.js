import React, { useState } from "react";
import CollapsedComponent from "./CollapsedComponent";
import ExpandableComponent from "./ExpandableComponent";

const ExpandableBox = ({ isRounded , expanded, collapsed}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerClassName = `collapsed-container ${
    isRounded ? "roundedRadius" : ""
  }`;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
console.log(collapsed)

  return (
    <div>
      {!isExpanded && (
        <div  className={containerClassName}  onClick={toggleExpansion}>
          {collapsed}
          </div>
      )}

      {isExpanded && (
     <div  className="collapsed-container test" onClick={toggleExpansion}>
      {expanded}
      </div>
      )}
    </div>
  );
};

export default ExpandableBox;
