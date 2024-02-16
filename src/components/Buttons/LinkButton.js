import React from "react";

const LinkButton = ({
  text,
  title,
  linkTo,
  underlined,
  color,
  handleOnClick,
}) => {
  const linkClass = underlined ? "underlined-link" : "linktext";

  return (
    <div className='d-flex align-items-center'>
      {text && <p className='p-style'>{text}</p>}
      <a
        onClick={handleOnClick}
        href={linkTo}
        className={linkClass}
        style={{ color: color }}
      >
        {title}
      </a>
    </div>
  );
};

export default LinkButton;
