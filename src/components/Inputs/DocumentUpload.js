import React, { useState } from "react";
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
}) => {
  const formik = useFormikContext();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    formik.setFieldValue(name, file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    formik.setFieldValue(name, null);
  };

  // Conditionally set border color to red if there are errors and the input has been touched
  const containerStyle = {
    width: width,
    height: height,
    border: errors && touched ? "1px solid red" : "1px solid #1b224c31",
  };

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
          {selectedFile ? selectedFile.name : text}

          {errors && touched && <span className='error-message'>{errors}</span>}
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
