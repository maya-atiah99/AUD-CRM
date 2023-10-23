import React from "react";

const LinkButton = ({ text, title, linkTo, underlined }) => {
  const linkClass = underlined ? "underlined-link" : "linktext";

  return (
    <div className='d-flex align-items-center'>
      {text && <p className='p-style'>{text}</p>}
      <a href={linkTo} className={linkClass}>
        {title}
      </a>
    </div>
  );
};

export default LinkButton;
