import React from "react";

const BulletedText = ({ items, size }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li style={{ fontSize: size }} key={index}>
          {item.text}
          {item.items && item.items.length > 0 && (
            <ul className='circle-bullets'>
              {item.items.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem.text}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BulletedText;
