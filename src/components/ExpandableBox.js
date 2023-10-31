import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import TextComponent from "./Texts/TextComponent";

const ExpandableBox = ({ isRounded, children, title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerClassName = `expandable-card ${
    isRounded ? "roundedRadius" : ""
  }`;

  const toggleExpansion = () => {
    setIsExpanded(true);
  };

  const toggleCollapse = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`expandable-card ${isRounded ? "roundedRadius" : ""} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      {isExpanded && (
        <AiOutlineClose onClick={toggleCollapse} className='close-icon-exp' />
      )}
      <div onClick={toggleExpansion}>
        <TextComponent text={title} size='20px' font='700' />
        {isExpanded
          ? " "
          : text && <TextComponent text={text} size='15px' font='500' />}
        {isExpanded ? (
          <div className={` ${isExpanded ? "expanded" : ""}`}>{children}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ExpandableBox;
