import React from "react";
import ModalComponent from "../ModalComponent";

const VerifiedCheckModal = ({ setShowVerifiedCheckModal }) => {
  return (
    <ModalComponent
      onClose={() => setShowVerifiedCheckModal(false)}
      handleOnClick={() => setShowVerifiedCheckModal(false)}
      isButton={true}
      height='30rem'
      width='50rem'
      title='Sent Successfully'
      description='You will receive an email from us very soon'
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
