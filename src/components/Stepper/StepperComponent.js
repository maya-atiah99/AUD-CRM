import React, { useState } from "react";
import Stepper from "./Stepper";
import AUDButton from "../Buttons/AUDButton";

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 1,
      title: "Personal Info",
    },
    {
      step: 2,
      title: "Academic",
    },
    {
      step: 3,
      title: "Declaration",
    },
    {
      step: 4,
      title: "Pay & Submit",
    },
  ];
  const handleChange = (next) => {
    if (next) {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      }
    } else {
      if (activeStep > 0) {
        setActiveStep(activeStep - 1);
      }
    }
  };

  return (
    <div className='d-flex flex-column gap-4'>
      <Stepper
        activeStep={activeStep}
        steps={steps}
        lastStep={activeStep === steps.length - 1}
      />

      <div>
        {activeStep !== steps.length - 1 && (
          <AUDButton
            text='Continue To The Next Step'
            handleOnClick={() => handleChange(true)}
          />
        )}
        {activeStep !== 0 && (
          <AUDButton
            text='Back To Main'
            handleOnClick={() => handleChange(false)}
          />
        )}
      </div>
    </div>
  );
};

export default StepperComponent;
