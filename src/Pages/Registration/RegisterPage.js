import React, { useRef, useState } from "react";
import UpperHeader from "../../components/Registration/UpperHeader";
import AUDButton from "../../components/Buttons/AUDButton";
import RegisterContainer from "../../components/Registration/RegisterContainer";
import TextComponent from "../../components/Texts/TextComponent";
import { act } from "react-dom/test-utils";

const RegisterPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const formikRefStep1 = useRef();
  const formikRefStep2 = useRef();
  const formikRefStep3 = useRef();
  const formikRefStep4 = useRef();

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
  // const handleChange = (next) => {
  //   console.log(" formikRefStep1.current?.submitForm()", formikRefStep1.current);

  //   formikRefStep1.current?.submitForm();
  //   setTimeout(() => {
  //     if (next) {
  //       if (formikRefStep1.current?.isValid) {
  //         if (activeStep < steps.length - 1) {
  //           setActiveStep(activeStep + 1);
  //           window.scrollTo(0, 0);

  //         }
  //       }
  //     } else {
  //       if (activeStep > 0) {
  //         setActiveStep(activeStep - 1);
  //         window.scrollTo(0, 0);
  //       }
  //     }
  //   }, [200]);
  // };

  const handeleSubmit = (step) => {
    if (step == 0) {
      formikRefStep1.current?.submitForm();
    } else if (step == 1) {
      formikRefStep2.current?.submitForm();
    } else if (step == 2) {
      formikRefStep3.current?.submitForm();
    }
  };

  const handleChange = (next) => {
    if (next) handeleSubmit(activeStep);

    setTimeout(() => {
      if (next) {
        if (activeStep === 0 && formikRefStep1.current?.isValid) {
          if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            window.scrollTo(0, 0);
          }
        } else if (activeStep === 1 && formikRefStep2.current?.isValid) {
          if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            window.scrollTo(0, 0);
          }
        } else if (activeStep === 2 && formikRefStep3.current?.isValid) {
          if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            window.scrollTo(0, 0);
          }
        }else{
          window.scrollTo(0,0)
        }
      }
    }, [100]);
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
            text='Back To Previous Page'
            handleOnClick={() =>setActiveStep(activeStep -1)}
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
          refStep1={formikRefStep1}
          refStep2={formikRefStep2}
          refStep3={formikRefStep3}
          refStep4={formikRefStep4}
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
