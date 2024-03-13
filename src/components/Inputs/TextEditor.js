import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const TextEditor = ({
  name,
  value,
  onChange,
  errors,
  touched,
  label,
  disabled,
  required,
}) => {
  const [editorContent, setEditorContent] = useState(value || "");

  const handleEditorChange = (content) => {
    setEditorContent(content);
    onChange(name, content);
  };

  console.log("djkwehde", editorContent);
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };
  const countWords = (content) => {
    const text = content?.trim();
    if (text === "") return 0;
    return text?.split(/\s+/).length;
  };
  useEffect(() => {
    countWords(editorContent);
  }, [editorContent]);
  useEffect(() => {
    setEditorContent(value);
  }, [value]);
  return (
    <div
      className={`${
        errors && touched ? "textBox-container-error " : "textBox-container"
      }`}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <label htmlFor={label}>
        {label}
        {required && <span className='required'>*</span>}
        <span className='required-field'>
          {errors && touched && " Personal Statement is required "}
        </span>
        <span className='words-number'>
          Count : {countWords(editorContent)}
        </span>
      </label>
      <ReactQuill
        theme='snow'
        value={editorContent}
        onChange={handleEditorChange}
        modules={modules}
        readOnly={disabled}
      />
    </div>
  );
};

export default TextEditor;
