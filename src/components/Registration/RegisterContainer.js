import React, { forwardRef, useEffect } from "react";
import Stepper from "../Stepper/Stepper";

const RegisterContainer = forwardRef(({ activeStep, steps, lastStep }, ref) => {
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

  console.log("steps", steps);
  console.log("activeStep", activeStep);
  console.log("steps[activeStep]?.step", steps[activeStep]?.step);
  console.log("steps[activeStep]?.title", steps[activeStep]?.title);
  console.log("steps[activeStep]?.ref", steps[activeStep]?.ref);
  console.log("steps?.length", steps?.length);
  console.log("steps?.previos", steps[activeStep]?.previousStep);
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
      <div className='registerForms-container'>{activeForm()}</div>
    </div>
  );
});

export default RegisterContainer;
