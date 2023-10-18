import React from "react";
import TextComponent from "./Texts/TextComponent";
import TextBox from "./Inputs/TextBox";
import LinkButton from "./Buttons/LinkButton";

const ExpandableComponent = ({ type, handleClick, subTitle }) => {
  return (
    <div onClick={handleClick} className="collapsed-container test">
      {type === "phone" && (
        <div className="d-flex flex-column gap-2">
          <TextComponent text="Phone Number" size="15px" font="700" />
          <TextComponent
            text="We have sent the OTP to your phone as a text to authenticate you mobile number"
            size="15px"
            font="500"
          />
          <TextComponent text={subTitle} size="15px" font="500" />
          <LinkButton title="Click Here To Resend"  text="Please type the number you received or "/>
          <TextBox />
        </div>
      )}
      {type === "email" && (
        <div className="d-flex flex-column gap-2">
          <TextComponent text="Email" size="15px" font="700" />
          <TextComponent
            text="We have sent the OTP to your email please open it and authenticate your email"
            size="15px"
            font="500"
          />
                    <TextComponent text={subTitle} size="15px" font="500" />
           <LinkButton title="Click Here To Resend"  text="Please press on done if you received the email or"/>
        </div>
      )}
      {type === "other" && (
        <TextComponent text="Phone Number" size="15px" font="700" />
      )}
    </div>
  );
};

export default ExpandableComponent;
