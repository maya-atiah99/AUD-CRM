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
      />
    </div>
  );
};

export default TextArea;
