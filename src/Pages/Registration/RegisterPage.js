import React, { useState } from "react";
import UpperHeader from "../../components/Registration/UpperHeader";
import AUDButton from "../../components/Buttons/AUDButton";
import RegisterContainer from "../../components/Registration/RegisterContainer";
import TextComponent from "../../components/Texts/TextComponent";

const RegisterPage = () => {
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
        window.scrollTo(0, 0);
      }
    } else {
      if (activeStep > 0) {
        setActiveStep(activeStep - 1);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <div>
      <UpperHeader />
      <div className='registerPage-container'>
        {activeStep === 0 && (
          <AUDButton text='Back To Main' to='/' icon='/images/homeicon.svg' />
        )}
        {activeStep !== 0 && (
          <AUDButton
            text='Back To Main'
            handleOnClick={() => handleChange(false)}
            icon='/images/homeicon.svg'
          />
        )}
        <TextComponent
          text='Please fill all the required fields (*) and click the Save & Continue button to continue to the next step.'
          icon='/images/warning-sign.svg'
          opacity='0.56'
          color='#1B224C'
          font='800'
          size='20px'
        />
        <RegisterContainer
          activeStep={activeStep}
          steps={steps}
          lastStep={activeStep === steps.length - 1}
        />
        <div style={{ marginLeft: "auto" }}>
          {activeStep !== steps.length - 1 && (
            <AUDButton
              text='Continue To The Next Step'
              handleOnClick={() => handleChange(true)}
            />
          )}
          {activeStep === 3 && (
            <AUDButton
              text='Go Back To Programs Page'
              handleOnClick={() => setActiveStep(0)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
