import React from "react";
import ModalComponent from "../ModalComponent";
import ExpandableBox from "../ExpandableBox";
import TextBox from "../Inputs/TextBox";
import TextComponent from "../Texts/TextComponent";
import LinkButton from "../Buttons/LinkButton";
import AUDButton from "../Buttons/AUDButton";

const VerificationModal = ({ setshowVerifiedModal }) => {
  const data = [
    {
      email: "maya@gmail.com",
      phone: "0362548",
    },
  ];
  const collapsed = (type) => {
    if (type == "phone") {
      return (
        <div className='d-flex flex-column'>
          <TextComponent text='Phone Number' size='15px' font='700' />
          <TextComponent text={data[0].phone} size='15px' font='500' />
        </div>
      );
    } else if (type == "email") {
      return (
        <div>
          <TextComponent text='Email' size='15px' font='700' />
          <TextComponent text={data[0].email} size='15px' font='500' />
        </div>
      );
    }
  };
  const expanded = (type) => {
    if (type == "phone") {
      return (
        <>
          <TextComponent text='Phone Number' size='15px' font='700' />
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
        </>
      );
    } else if (type == "email") {
      return (
        <>
          <TextComponent text='Email' size='15px' font='700' />
          <TextComponent
            text='We have sent the OTP to your email please open it and authenticate your email'
            size='15px'
            font='500'
          />
          <TextComponent text={data[0].email} size='15px' font='500' />
          <LinkButton
            title='Click Here To Resend'
            text='Please press on done if you received the email or'
          />
        </>
      );
    }
  };
  return (
    <ModalComponent
      onClose={() => setshowVerifiedModal(false)}
      height='40rem'
      width='60rem'
      title='Sent Successfully'
      description='Before we continue the application we need to authenticate the email and the phone number you provided'
    >
      <div style={{ paddingLeft: "20px", paddingRight: "30px" }}>
        {/* <ExpandableBox
        isRounded={true}
        collapsed={collapsed("phone")}
        expanded={expanded("phone")}
      />
      <ExpandableBox
        isRounded={true}
        collapsed={collapsed("email")}
        expanded={expanded("email")}
      /> */}
        <ExpandableBox
          title='Phone Number'
          text={data[0].phone}
          isRounded={true}
        >
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
        </ExpandableBox>
        <ExpandableBox title='Email' text={data[0].email} isRounded={true}>
          <TextComponent
            text='We have sent the OTP to your email please open it and authenticate your email'
            size='15px'
            font='500'
          />
          <TextComponent text={data[0].email} size='15px' font='500' />
          <LinkButton
            title='Click Here To Resend'
            text='Please press on done if you received the email or'
          />
        </ExpandableBox>
      </div>
    </ModalComponent>
  );
};

export default VerificationModal;
