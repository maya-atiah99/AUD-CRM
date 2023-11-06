import React, { forwardRef, useEffect, useRef } from "react";
import Stepper from "../Stepper/Stepper";
import LogoContainer from "../LogoContainer";
import RegisterFormStep1 from "./RegisterFormStep1/RegisterFormStep1";
import RegisterFormStep2 from "./RegisterForm2/RegisterFormStep2";
import RegisterFormStep3 from "./RegisterForm3/RegisterFormStep3";
import RegisterFormStep4 from "./RegisterForm4/RegisterFormStep4";

const RegisterContainer = forwardRef(
  (
    { activeStep, steps, lastStep, refStep1, refStep2, refStep3, refStep4 },
    ref
  ) => {
    return (
      <div>
        <div className='aud-app-header'>
          <img
            src='/images/Group 103.png'
            alt='Logo'
            className='aud-header-logo'
          />
          <Stepper activeStep={activeStep} steps={steps} lastStep={lastStep} />
        </div>
        <div className='registerForms-container'>
          {activeStep == "0" ? (
            <RegisterFormStep1 ref={refStep1} />
          ) : activeStep == "1" ? (
            <RegisterFormStep2 ref={refStep2} />
          ) : activeStep == "2" ? (
            <RegisterFormStep3 ref={refStep3} />
          ) : activeStep == "3" ? (
            <RegisterFormStep4 />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
);

export default RegisterContainer;
