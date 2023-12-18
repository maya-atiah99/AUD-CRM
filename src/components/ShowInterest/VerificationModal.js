import React, { useState } from "react";
import ModalComponent from "../ModalComponent";
import TextBox from "../Inputs/TextBox";
import TextComponent from "../Texts/TextComponent";
import LinkButton from "../Buttons/LinkButton";
import HorizantalLine from "../Texts/HorizantalLine";

const VerificationModal = ({
  setshowVerifiedModal,
  handleDone,
  otpCode,
  setOtpCode,
  handleOnClickLinkEmail,
  handleOnClickLinkPhone,
  phoneNumber,
  emailotp,
  setEmailOtp,
  email,
  otpError,
}) => {

 console.log(otpError)
 
  return (
    <ModalComponent
      onClose={() => setshowVerifiedModal(false)}
      handleOnClick={handleDone}
      isButton={true}
      width='60rem'
      title='OTP'
      text='Confirm'
    >
      <div>
        <div className='expandable-card'>
          <div className='d-flex gap-1'>
            <TextComponent
              text='We have send the OTP on '
              size='18px'
              font='500'
            />{" "}
            <TextComponent text={phoneNumber} size='18px' font='700' />
          </div>

          <TextBox
            value={otpCode}
            onChange={setOtpCode}
            label='Enter Mobile Verification Code'
            errors={otpError? "error" : ""}
          />
          <LinkButton
            title='Resend'
            text='Didn’t receive the code? '
            handleOnClick={handleOnClickLinkPhone}
            underlined={true}
          />
          <HorizantalLine width='100%' />
          <div className='d-flex gap-1'>
            <TextComponent
              text='We have send the OTP on'
              size='18px'
              font='500'
            />
            <TextComponent text={email} size='18px' font='700' />
          </div>

          <TextBox
            value={emailotp}
            onChange={setEmailOtp}
            label='Enter Email Verification Code'
            errors={otpError? "error" : ""}
          />
          <LinkButton
            title='Resend'
            text='Didn’t receive the code? '
            handleOnClick={handleOnClickLinkEmail}
            underlined={true}
          />
        </div>
      </div>
    </ModalComponent>
  );
};

export default VerificationModal;
