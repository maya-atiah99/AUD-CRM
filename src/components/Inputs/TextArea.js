import React, { useEffect, useState } from "react";

const TextArea = ({
  label,
  required,
  value,
  onChange,
  rows,
  cols,
  placeholder,
  name,
  errors,
  touched,
  disabled,
  resize,
}) => {
  const [initialValue, setInitialValue] = useState(value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInitialValue(newValue);
    if (onChange) {
      onChange(name, newValue);
    }
  };

  useEffect(() => {
    setInitialValue(value);
  }, [value]);
  return (
    <div
      className={`${
        errors && touched ? "textBox-container-error " : "textBox-container"
      }`}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
      </label>
      <textarea
        id={label}
        required={required}
        onChange={handleChange}
        value={initialValue}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        disabled={disabled}
        style={{ resize: resize ? "auto" : "none" }}
      />
    </div>
  );
};

export default TextArea;
