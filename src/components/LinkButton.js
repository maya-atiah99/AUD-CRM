import React from 'react';

const LinkButton = ({ text,title, linkTo,underlined }) => {
  return (
    <div className='d-flex align-items-center'>
      <p className='p-style'>{text}</p>
       <a href={linkTo}>
      {title}
    </a>
    </div>
  
  );
};

export default LinkButton;
