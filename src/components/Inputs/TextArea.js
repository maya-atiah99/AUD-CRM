import React from 'react';

const TextArea = ({ label, required, value, setValue, rows, cols, placeholder }) => {
  return (
    <div  className='textBox-container'>
       <label htmlFor={label}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <textarea
        id={label}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
