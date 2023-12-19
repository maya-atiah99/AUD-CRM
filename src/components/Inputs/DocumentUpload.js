import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useFormikContext } from "formik";

const DocumentUpload = ({
  text,
  label,
  required,
  name,
  width,
  height,
  errors,
  touched,
  onChange,
  value,
  imageHeight
}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('filexasdcdasdaddd',file)
      setSelectedFile(file);
      onChange(name, file);
    } else if (value) {
      setSelectedFile(value);
      onChange(name, value);
    }
  };

  const handleRemoveFile = (event) => {
    event.preventDefault();
    setSelectedFile(null);
    // onChange(name, null);
  };
  const containerStyle = {
    width: width,
    height: height,
    border: errors && touched ? "1px solid red" : "1px solid #1b224c31",
  };

  useEffect(() => {
    if (value) {
      setSelectedFile(value);
      onChange(name, value);
    }
  }, [value]);

  return (
    <div>
      <label>
        {label}
        {required && <span className='required'>*</span>}
      </label>

      <label
        className={`file-input-container ${
          selectedFile ? "file-input-container-upl" : "file-input-container"
        }`}
        style={containerStyle}
      >
        <img src='/images/Layer 25.svg' alt='layer' style={{height:imageHeight,width:imageHeight}}/>
        <input type='file' className='file-input' onChange={handleFileChange} />
        <p className='p-style' style={{maxWidth:"200px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
          {errors && touched ? (
            <span className='error-message'>{errors}</span>
          ) : selectedFile ? (
            selectedFile.name || selectedFile.fileName || text
          ) : (
            text
          )}
        </p>

        {selectedFile ? (
          <AiFillCloseCircle
            onClick={handleRemoveFile}
            className='close-document-icon'
          />
        ) : null}
      </label>
    </div>
  );
};

export default DocumentUpload;
