import React from "react";
import SubmitText from "./SubmitText";
import AcadamicFiles from "./AcadamicFiles";
import AcadamicInformation from "./AcadamicInformation";

const RegisterFormStep2 = () => {
  return (
    <div className='form-subcontainer'>
      <SubmitText />
      <AcadamicInformation />
      <AcadamicFiles />
    </div>
  );
};

export default RegisterFormStep2;
