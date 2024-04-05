import React from "react";

const TextComponent = ({
  text,
  font,
  size,
  classfont,
  color,
  opacity,
  icon,
  hover,
  authorize,
}) => {
  return (
    <div className='d-flex gap-2 '>
      {icon && <img src={icon} alt='icon' />}
      <p
        className={`p-style  ${classfont} ${hover ? "title-hover" : ""}`}
        style={{
          color: color ? color : "#1B224C",
          opacity: opacity ? opacity : 1,
          fontWeight: font,
          fontSize: size,
        }}
      >
        <span className='authorize-class'>{authorize}</span> {text}
      </p>
    </div>
  );
};

export default TextComponent;
