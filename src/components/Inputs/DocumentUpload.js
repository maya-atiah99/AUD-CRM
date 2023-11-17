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
  fileName,
}) => {
  const formik = useFormikContext();
  const [selectedFile, setSelectedFile] = useState(fileName);
  console.log("formikkkkkkkkk", formik);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("fileeee", file);
    setSelectedFile(file);
    formik.setFieldValue(name, file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    formik.setFieldValue(name, null);
  };

  const containerStyle = {
    width: width,
    height: height,
    border: errors && touched ? "1px solid red" : "1px solid #1b224c31",
  };

//   useEffect(() => {
//     if (formik.values.DocumentUpload) {
//       setSelectedFile(formik.values.DocumentUpload);
//     }
//   }, [formik.values.DocumentUpload]);
// console.log(selectedFile)

  return (
    <div>
      <label>
        {label}
        {required && <span className='required'>*</span>}
      </label>

      <label
        className={`file-input-container ${
          selectedFile || formik.values[name]
            ? "file-input-container-upl"
            : "file-input-container"
        }`}
        style={containerStyle}
      >
        <img src='/images/Layer 25.svg' alt='layer' />
        <input type='file' className='file-input' onChange={handleFileChange} />
        <p className='p-style'>
          {/* {formik.values[name] !== ""
            ? formik.values[name]
            : selectedFile
            ? selectedFile.name
            : text} */}
          {selectedFile ? selectedFile.name : text}

          {/* {fileName ? fileName : text} */}

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
