import React, { useState } from "react";
import CollapsedComponent from "./CollapsedComponent";
import ExpandableComponent from "./ExpandableComponent";

const ExpandableBox = ({ type,isRounded ,data, expanded, colapsed}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <div>
      {!isExpanded && (
        <CollapsedComponent type={type} handleClick={toggleExpansion} isRounded={isRounded} subTitle={data}/>
      )}

      {isExpanded && (
        <ExpandableComponent type={type} handleClick={toggleExpansion} subTitle={data}/>
      )}
    </div>
  );
};

export default ExpandableBox;
