import React from "react";
import ModalComponent from "../ModalComponent";

const VerifiedCheckModal = ({ close, text, title }) => {
  return (
    <ModalComponent
      onClose={close}
      handleOnClick={close}
      isButton={false}
      height='20rem'
      width='50rem'
      title={title}
      description={text}
    >
      <div className='d-flex  justify-content-center align-items-center'>
        <div className='d-flex  justify-content-center align-items-center'>
          <img src='/images/Animation.gif' className='gif' alt='gif' />
        </div>
      </div>
    </ModalComponent>
  );
};

export default VerifiedCheckModal;
