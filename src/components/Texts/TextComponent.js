import React from "react";

const TextComponent = ({ text, font, classfont, color, opacity, icon, hover }) => {
  return (
    <div className='d-flex gap-2 '>
      {icon && <img src={icon} alt='icon' />}
      <p
        className={`p-style  ${classfont} ${hover ? "title-hover" : ""}`}
        style={{
          color: color ? color : "#1B224C",
          opacity: opacity ? opacity : 1,
          fontWeight: font,
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default TextComponent;
