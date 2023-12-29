import React from "react";
import ModalComponent from "../components/ModalComponent";
import TextComponent from "../components/Texts/TextComponent";

const CheckEmailSent = ({ mode, setCheckEmailSent,email,phoneNumber }) => {
  return (
    <ModalComponent width='40rem' onClose={() => setCheckEmailSent(false)}>
      <div className='d-flex align-items-center flex-column'>
        <img src='/images/sent-otp.gif' alt='otp' className='gif' />
        <TextComponent
          font='700'
          classfont='classfont-show'
          fontSize='expandable-card'
          text={mode === "mobile" ? "Check your phone" : "Check your email"}
        />
        <div className='d-flex gap-1'>
          <TextComponent
            font='500'
            classfont='classfont-p'
            text={
              mode === "mobile"
                ? "We’ve sent a new password to"
                : "We’ve sent a new password to"
            }
          />
          <TextComponent
            font='700'
            classfont='classfont-p'
            text={mode === "mobile" ? phoneNumber : email}
          />
        </div>
      </div>
    </ModalComponent>
  );
};

export default CheckEmailSent;
