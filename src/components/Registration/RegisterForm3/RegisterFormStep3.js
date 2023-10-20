import React from "react";
import ProgramInformation from "../RegisterForm3/ProgramInformation";
import ImportantNotices from "./ImportantNotices";
import Reservation from "./Reservation";

const RegisterFormStep3 = () => {
  return (
    <div className='form-subcontainer'>
      <ProgramInformation />
      <ImportantNotices />
      <Reservation />
    </div>
  );
};

export default RegisterFormStep3;
