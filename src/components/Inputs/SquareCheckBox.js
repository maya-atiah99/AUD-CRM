import React from "react";

const SquareCheckBox = ({
  text,
  value,
  onChange,
  errors,
  touched,
  fontWeight,
  policy,
  href,
  href3,
  href2,
  policy2,
  policy3,
  text2,
  disabled,
}) => {
  return (
    <label
      className='checkbox-container'
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <input
        type='checkbox'
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span
        className={`${errors && touched ? "red-checkmark " : "checkmark"}`}
      ></span>
      <p style={{ fontWeight: fontWeight }}>
        {text}{" "}
        {policy && (
          <span className='blue-link'>
            <a href={href} target='_blank'>
              {" "}
              {policy}
            </a>
            <span className='blue-link'>
              <a href={href2} target='_blank'>
                {" "}
                {policy2}
              </a>
            </span>
            <span className='blue-link'>
              <a href={href3} target='_blank'>
                {" "}
                {policy3}
              </a>
            </span>
          </span>
        )}
        {text2}
      </p>
    </label>
  );
};

export default SquareCheckBox;
