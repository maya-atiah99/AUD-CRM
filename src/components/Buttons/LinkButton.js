import React, { useState } from "react";

const LinkButton = ({
  text,
  title,
  linkTo,
  underlined,
  color,
  handleOnClick,
}) => {
  const [active, setActive] = useState(true); 

  const linkClass = underlined ? "underlined-link" : "linktext";

 
  const handleClick = () => {
    if (active) {
      setActive(false);
      handleOnClick(); 
      setTimeout(() => {
        setActive(true);
      }, 55000); 
    }
  };

  return (
    <div className='d-flex align-items-center'>
      {text && <p className='p-style'>{text}</p>}
      <a
        onClick={handleClick} 
        href={linkTo}
        className={linkClass}
        style={{ color: active ? color : "gray" }}
      >
        {title}
      </a>
    </div>
  );
};

export default LinkButton;
