import React from 'react';

const TextArea = ({ label, required, value, setValue, rows, cols, placeholder }) => {
  return (
    <div  className='textBox-container'>
        {label ? <label htmlFor={label}>{label}<span className="required">*</span></label> : "" } 
      <textarea
        id={label}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        className='text-input'
      />
    </div>
  );
};

export default TextArea;
