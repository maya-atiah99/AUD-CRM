import React from "react";
import PersonalInformation from "./PersonalInformation";
import MailingAddress from "./MailingAddress";
import ProgramInformation from "./ProgramInformation";
import ParentInformation from "./ParentInformation";
import Consent from "./Consent";

const RegisterFormStep1 = () => {
  return (
    <div className='form-subcontainer'>
      <PersonalInformation />
      <MailingAddress />
      <ProgramInformation />
      <ParentInformation/>
      <Consent/>
    </div>
  );
};

export default RegisterFormStep1;
