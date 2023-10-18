import React, { useState } from 'react'

const StepButton = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index === activeStep ? "active" : ""}`}>
          <div className="step-number">{index + 1}</div>
          <div className="step-title">{step}</div>
          {index < steps.length - 1 && (
            <div className={`step-line ${index < activeStep ? "completed" : ""}`} />
          )}
          {index === activeStep && index !== steps.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
      ))}
      {activeStep > 0 && (
        <button onClick={handleBack}>Previous</button>
      )}
    </div>
  );
};


export default StepButton
