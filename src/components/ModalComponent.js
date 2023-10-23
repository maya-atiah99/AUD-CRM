import React from "react";
import TextComponent from "./Texts/TextComponent";
import AUDButton from "./Buttons/AUDButton";

const ModalComponent = ({
  title,
  description,
  isOpen,
  onClose,
  width,
  height,
  children,
}) => {
  return (
    <div className='modal-container'>
      <div
        className='inner-modal-container'
        style={{ width: width, height: height }}
      >
        <div>
          <h2>{title}</h2>
          <img
            src='/images/closeicon.svg'
            alt='close icon'
            className='close-icon'
            onClick={onClose}
          />
        </div>
        <div className='py-4'>
          {" "}
          <TextComponent text={description} size='18px' font='500' />{" "}
        </div>

        <div className='modal-content'>{children}</div>
        {/* <div className='submit-modal-button'>
          <AUDButton text='Done' />
        </div> */}
      </div>
    </div>
  );
};

export default ModalComponent;
