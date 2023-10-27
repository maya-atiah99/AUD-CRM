import React, { useState } from "react";
import {AiFillCloseCircle} from "react-icons/ai"
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
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };
  return (
    <div>
      <label>
        {label}
        {required && <span className='required'>*</span>}
      </label>

      <label
        className={`file-input-container ${selectedFile ?'file-input-container-upl' : 'file-input-container' }`}
        style={{ width: width, height: height }}
      >
        <img src='/images/Layer 25.svg' alt='layer' />
        <input type='file' className='file-input'  onChange={handleFileChange} />
        <p className='p-style'>{selectedFile ? selectedFile.name : text }</p>

        {selectedFile ? (
           <AiFillCloseCircle onClick={handleRemoveFile}  className='close-document-icon' />
          
        ) : null}
      </label>
    </div>
  );
};

export default DocumentUpload;
