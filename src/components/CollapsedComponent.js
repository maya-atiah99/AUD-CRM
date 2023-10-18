import React, { useState } from "react";
import TextComponent from "./Texts/TextComponent";

const CollapsedComponent = ({ type, isRounded, handleClick, subTitle }) => {
  const [show, setShow] = useState(false);

  const containerClassName = `collapsed-container ${
    isRounded ? "roundedRadius" : ""
  }`;

  return (
    <div onClick={handleClick} className={containerClassName}>
      {type === "phone" && (
        <div className="d-flex flex-column">
          <TextComponent text="Phone Number" size="15px" font="700" />
          <TextComponent text={subTitle} size="15px" font="500" />
        </div>
      )}
      {type === "email" && (
        <div>
          <TextComponent text="Email" size="15px" font="700" />
          <TextComponent text={subTitle} size="15px" font="500" />
        </div>
      )}
      {type === "other" && (
        <TextComponent text="Further Details" size="15px" font="700" />
      )}
    </div>
  );
};

export default CollapsedComponent;
