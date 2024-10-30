import React, { useEffect, useState, useRef } from "react";
import toast from "react-hot-toast";
import { AiFillCloseCircle } from "react-icons/ai";

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
  imageHeight,
  size,
  smallImage,
  disabled,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null); // Add a ref for the file input

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type !== "application/pdf") {
        toast.error("Only PDF files are allowed");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        toast.error("File is too large. Max size is 5MB.");
        return;
      }

      setSelectedFile(file);
      onChange(name, file);
    }
  };

  const handleRemoveFile = (event) => {
    event.preventDefault();
    setSelectedFile(null);
    onChange(name, "");
    

    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const containerStyle = {
    width: width,
    height: height,
    border: errors && touched ? "1px solid red" : "1px solid hsl(0, 0%, 80%)",
    cursor: disabled ? "not-allowed" : "pointer",
  };

  useEffect(() => {
    if (value) {
      setSelectedFile(value);
      onChange(name, value);
    } else {
      setSelectedFile(null);
    }
  }, [value]);

  return (
    <div>
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>

      <label
        className={` ${selectedFile ? "file-input-container-upl" : "file-input-container"}`}
        style={containerStyle}
      >
        <input
          type="file"
          className="file-input"
          ref={fileInputRef} 
          onChange={handleFileChange}
          disabled={disabled}
        />
        <div className="img-text-container">
          <img
            src="/images/Layer 25.svg"
            alt="layer"
            className={smallImage ? "smallImage" : "bigImage"}
          />
          <p>
            {errors && touched ? (
              <span className="error-message">{errors}</span>
            ) : selectedFile ? (
              selectedFile.name || selectedFile.fileName || text
            ) : (
              text
            )}
          </p>
        </div>
        <div className="size-upload-dc">
          <p>Max Size: {size} mb</p>
        </div>

        {selectedFile && (
          <AiFillCloseCircle
            onClick={handleRemoveFile}
            className="close-document-icon"
          />
        )}
      </label>
    </div>
  );
};

export default DocumentUpload;
