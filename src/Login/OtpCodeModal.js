import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import LinkButton from "../components/Buttons/LinkButton";
import TextComponent from "../components/Texts/TextComponent";
import AUDButton from "../components/Buttons/AUDButton";

const OtpCodeModal = ({
  setShowOtpCodeMOdal,
  setOtpCode,
  handleVerifyMobileOtpForPassword,
  handleOnClickLinkPhone,
}) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }

    if (element.value === "" && index > 0) {
      console.log("element.value", element.value);
      console.log("indexxx", index);

      const previousInput = document.getElementById(index - 1);
      if (previousInput) {
        previousInput.focus();
        setOtp([...otp.map((d, idx) => (idx === index ? "" : d))]);
      }
    }
  };
  const handleEnter = () => {
    setOtpCode(otp.join(""));
    handleVerifyMobileOtpForPassword();
  };
  console.log(otp.join(""));
  console.log('otpp',otp)
  return (
    <ModalComponent
      width='40rem'
      title='Enter OTP Code'
      onClose={() => setShowOtpCodeMOdal(false)}
    >
      <div className='expandable-card'>
        <TextComponent
          text='The OTP code was sent to your mobile. Please enter the code '
          size='18px'
          font='500'
        />{" "}
        <div className='otpField-container'>
          {otp.map((data, index) => {
            return (
              <input
                id={index}
                className='otp-field'
                type='text'
                name='otp'
                maxLength='1'
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <LinkButton
          title='Resend'
          text='Didn’t receive the code?'
          underlined={true}
          handleOnClick={handleOnClickLinkPhone}
        />
        <AUDButton text='Enter' handleOnClick={handleEnter} />
      </div>
    </ModalComponent>
  );
};

export default OtpCodeModal;
