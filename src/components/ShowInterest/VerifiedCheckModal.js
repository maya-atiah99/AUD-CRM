import React from "react";
import ModalComponent from "../ModalComponent";

const VerifiedCheckModal = ({ close, text, title }) => {
  return (
    <ModalComponent
      onClose={close}
      handleOnClick={close}
      isButton={false}
      height='30rem'
      width='50rem'
      title={title}
      description={text}
    >
      <div className='d-flex  justify-content-center align-items-center'>
        <div className='d-flex  justify-content-center align-items-center'>
          <img
            src='/images/Animation.gif'
            height='250px'
            width='250px'
            alt='gif'
          />
        </div>
      </div>
    </ModalComponent>
  );
};

export default VerifiedCheckModal;
