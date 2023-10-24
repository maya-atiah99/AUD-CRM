import React from "react";
import SubmitText from "./SubmitText";
import AcadamicFiles from "./AcadamicFiles";
import AcadamicInformation from "./AcadamicInformation";
import PersonalStatement from "./PersonalStatement";

const RegisterFormStep2 = () => {
  return (
    <div className='form-subcontainer '>
      <SubmitText />
      <AcadamicInformation />
      <AcadamicFiles />
      <PersonalStatement />
    </div>
  );
};

export default RegisterFormStep2;
