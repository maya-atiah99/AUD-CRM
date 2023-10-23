import React from "react";
import EnrollmentAgreement from "./EnrollmentAgreement";
import Tuition from "./Tuition";
import HousingFees from "./HousingFees";
import TextComponent from "../Texts/TextComponent";
import AUDButton from "../Buttons/AUDButton";

const Agreement = () => {
  return (
    <div className="agreement-container">
      <div className="agreement-title">
        <TextComponent
          size='18px'
          font='800'
          text='The UAE Ministry of Education has officially licensed the American University in Dubai and accredited all of its programs. AUD is also accredited by the Southern Association of Colleges and Schools Commission on Colleges (SACSCOC) to award Bachelor’s and Master’s degrees.'
        />
      </div>
      <EnrollmentAgreement />
      <Tuition />
      <HousingFees />
      <div style={{marginLeft: "auto"}}>
      <AUDButton text='Download Agreement' />
      </div>
    </div>
  );
};

export default Agreement;
