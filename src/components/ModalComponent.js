import React from "react";
import TextComponent from "./Texts/TextComponent";
import AUDButton from "./Buttons/AUDButton";

const ModalComponent = ({
  title,
  description,
  isOpen,
  onClose,
  handleOnClick,
  width,
  height,
  children,
  isButton,
  classFont
}) => {
  return (
    <div className='modal-container'>
      <div
        className='inner-modal-container'
        style={{ width: width, height: height }}
      >
        <div>
          <h2 style={{ paddingLeft: "20px", paddingTop: "30px" }} className={classFont}>{title}</h2>
          <img
            src='/images/closeicon.svg'
            alt='close icon'
            className='close-icon'
            onClick={onClose}
          />
        </div>
        {description ? (
          <div
            className='py-4'
            style={{ paddingLeft: "20px", paddingTop: "30px" }}
          >
            {" "}
            <TextComponent text={description} size='18px' font='500' />{" "}
          </div>
        ) : (
          ""
        )}

        <div className='modal-content'>{children}</div>
        {isButton && (
          <div className='submit-modal-button'>
            <AUDButton text='Done' handleOnClick={handleOnClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalComponent;
