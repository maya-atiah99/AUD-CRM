import React from "react";
import ModalComponent from "../components/ModalComponent";
import TextComponent from "../components/Texts/TextComponent";
import TextBox from "../components/Inputs/TextBox";

const ForgotPasswordModal = ({setIsForgotPassword,setOtpForgotPassword}) => {
  return (
    <ModalComponent
      width='40rem'
      title='Forgot Password'
      text='Confirm'
      isButton={true}
      handleOnClick={()=>(setOtpForgotPassword(true),setOtpForgotPassword(false))}
      onClose={()=>setIsForgotPassword(false)}
    >
      <div className='expandable-card'>
        <TextComponent
          text='Enter your mobile number below to receive an OTP'
          size='18px'
          font='500'
        />{" "}
        <TextBox label='Enter Mobile Number' />
      </div>
    </ModalComponent>
  );
};

export default ForgotPasswordModal;
