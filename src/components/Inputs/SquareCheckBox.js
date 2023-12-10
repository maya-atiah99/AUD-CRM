import React, { useEffect } from "react";

const SquareCheckBox = ({
  text,
  value,
  onChange,
  errors,
  touched,
  fontWeight,
  policy,
  href
}) => {
  return (
    <label className='checkbox-container'>
      <input
        type='checkbox'
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span
        className={`${errors && touched ? "red-checkmark " : "checkmark"}`}
      ></span>
      <p style={{ fontWeight: fontWeight }}>
        {text}{" "}
        {policy && (
          <span className='blue-link'>
            <a
              href={href}
              target='_blank'
            >
              {" "}
             {policy}
            </a>
          </span>
        )}
      </p>
    </label>
  );
};

export default SquareCheckBox;
