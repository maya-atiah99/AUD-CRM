import React, { forwardRef, useEffect } from "react";
import Stepper from "../Stepper/Stepper";

const RegisterContainer = forwardRef(
  ({ activeStep, steps, lastStep, setActiveStep }, ref) => {
    const activeForm = () => {
      if (activeStep !== -1) {
        const activeStepForm = steps[activeStep]?.form;
        return activeStepForm;
      }
      return null;
    };
    useEffect(() => {
      activeForm();
    }, [activeStep, steps]);

    return (
      <div >
        <div className='aud-app-header'>
          <img
            src='/images/Group 103.png'
            alt='Logo'
            className='aud-header-logo'
          />
          <Stepper
            activeStep={activeStep}
            steps={steps}
            lastStep={lastStep}
            setActiveStep={setActiveStep}
          />
        </div>
        <div className='registerForms-container'>{activeForm()}</div>
      </div>
    );
  }
);

export default RegisterContainer;
