import React from "react";
import Stepper from "../Stepper/Stepper";
import LogoContainer from "../LogoContainer";
import RegisterFormStep1 from "./RegisterFormStep1/RegisterFormStep1";
import RegisterFormStep2 from "./RegisterForm2/RegisterFormStep2";
import RegisterFormStep3 from "./RegisterForm3/RegisterFormStep3";
import RegisterFormStep4 from "./RegisterForm4/RegisterFormStep4";

const RegisterContainer = ({ activeStep, steps, lastStep }) => {
  return (
    <div>
      <div className='aud-app-header'>
        <LogoContainer
          width='200px'
          height='40px'
          src='/images/Group 103.png'
        />
        <Stepper activeStep={activeStep} steps={steps} lastStep={lastStep} />
      </div>
      <div className='registerForms-container'>
        {activeStep == "0" ? (
          <RegisterFormStep1 />
        ) : activeStep == "1" ? (
          <RegisterFormStep2 />
        ) : activeStep == "2" ? (
          <RegisterFormStep3 />
        ) : activeStep == "3" ? (
          <RegisterFormStep4 />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default RegisterContainer;
