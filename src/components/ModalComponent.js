import React, { useEffect } from "react";
import TextComponent from "./Texts/TextComponent";
import AUDButton from "./Buttons/AUDButton";
import ReactDOM from "react-dom";
const ModalComponent = ({
  title,
  description,
  onClose,
  handleOnClick,
  width,
  height,
  children,
  isButton,
  classFont,
  text,
}) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);
  return (
    <div className='modal-container'>
      <div
        className='inner-modal-container'
        style={{ width: width, height: height }}
      >
        <div>
          <h2 className={classFont}>{title}</h2>
          <div
            onClick={onClose}
            className='close-icon'
            style={{ cursor: "pointer" }}
          >
            <img src='/images/closeicon.svg' alt='close icon' />
          </div>
        </div>
        {description ? (
          <div>
            <TextComponent text={description} size='18px' font='500' />{" "}
          </div>
        ) : (
          ""
        )}

        <div className='modal-content'>{children}</div>
        {isButton && (
          <div className='submit-modal-button'>
            <AUDButton text={text} handleOnClick={handleOnClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalComponent;
