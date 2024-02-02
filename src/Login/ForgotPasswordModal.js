import React from "react";
import ModalComponent from "../components/ModalComponent";
import TextComponent from "../components/Texts/TextComponent";
import TextBox from "../components/Inputs/TextBox";
import AUDButton from "../components/Buttons/AUDButton";

const ForgotPasswordModal = ({
  setIsForgotPassword,
  setShowOtpForgotPasswordModal,
  setMode,
  setActionOrigin,
}) => {
  const handleSelectViaMobile = () => {
    setMode("mobile");
    setShowOtpForgotPasswordModal(true);
    setIsForgotPassword(false);
    setActionOrigin("Continue");
  };

  const handleSelectViaEmail = () => {
    setMode("email");
    setShowOtpForgotPasswordModal(true);
    setIsForgotPassword(false);
  };
  return (
    <ModalComponent
      width='40rem'
      title='Forgot Password'
      text='Confirm'
      onClose={() => setIsForgotPassword(false)}
    >
      <div className='forgort-password-cont'>
        <TextComponent
          text='Select which contact details should we use to reset your password.'
          size='18px'
          font='500'
        />

        <div className='select-via-email' onClick={handleSelectViaMobile}>
          <img src='/images/Mobile.svg' alt='mobile' />
          <h3>Mobile Number</h3>
        </div>

        <div className='select-via-email' onClick={handleSelectViaEmail}>
          <img src='/images/Email.svg' alt='mobile' />
          <h3>Email Address</h3>
        </div>
        {/* <TextBox label='Enter Mobile Number' /> */}
      </div>
    </ModalComponent>
  );
};

export default ForgotPasswordModal;
