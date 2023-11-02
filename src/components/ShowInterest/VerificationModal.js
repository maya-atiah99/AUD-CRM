import React from "react";
import ModalComponent from "../ModalComponent";
import TextBox from "../Inputs/TextBox";
import TextComponent from "../Texts/TextComponent";
import LinkButton from "../Buttons/LinkButton";

const VerificationModal = ({
  setshowVerifiedModal,
  handleDone
}) => {
  const data = [
    {
      email: "maya@gmail.com",
      phone: "0362548",
    },
  ];

  return (
    <ModalComponent
      onClose={() => setshowVerifiedModal(false)}
      handleOnClick={handleDone}
      isButton={true}
      height='30rem'
      width='60rem'
      title='OTP'
      description='Before we continue the application we need to authenticate the phone number you provided'
    >
      <div style={{ paddingLeft: "20px", paddingRight: "30px" }}>
        <div className='expandable-card'>
          <TextComponent text='Phone Number' size='20px' font='700' />
          {/* <TextComponent text={data[0].phone} size='15px' font='500' /> */}
          <TextComponent
            text='We have sent the OTP to your phone as a text to authenticate you mobile number'
            size='15px'
            font='500'
          />
          <TextComponent text={data[0].phone} size='15px' font='500' />
          <LinkButton
            title='Click Here To Resend'
            text='Please type the number you received or '
          />
          <TextBox />
        </div>
      </div>
    </ModalComponent>
  );
};

export default VerificationModal;
