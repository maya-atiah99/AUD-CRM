import React from "react";

const DocumentUpload = ({
  text,
  label,
  required,
  file,
  limit,
  restriction,
  width,
  height,
}) => {
  return (
    <div>
      <label>
        {label}
        {required && <span className='required'>*</span>}
      </label>

      <label
        className='file-input-container'
        style={{ width: width, height: height }}
      >
        <img src='/images/Layer 25.svg' alt='layer' />
        <input type='file' className='file-input' />
        <p className='p-style'> {text} </p>
      </label>
    </div>
  );
};

export default DocumentUpload;
