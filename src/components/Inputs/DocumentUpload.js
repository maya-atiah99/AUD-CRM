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
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
 console.log(value)
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

  const handleRemoveFile = () => {
    setSelectedFile(null);
    // onChange(name, null);
  };
  console.log("onChange prop type:", typeof onChange);
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
        <img src='/images/Layer 25.svg' alt='layer' />
        <input type='file' className='file-input' onChange={handleFileChange} />
        <p className='p-style'>
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
