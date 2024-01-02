import React from "react";
import TextComponent from "../Texts/TextComponent";

const Stepper = ({
  activeStep,
  fontSize,
  steps,
  lastStep,
  length,
  setActiveStep,
}) => {
  const handleOnClick = (index) => {
    if (index < activeStep) {
      setActiveStep(index);
    }
  };

  return (
    <div className='stepper'>
      {steps.map((step, index) => {
        return (
          <div
            className='subStep-container'
            key={index}
            onClick={() => handleOnClick(index)}
            style={
              index <= activeStep
                ? { cursor: "pointer" }
                : { cursor: "default" }
            }
          >
            {activeStep + 1 > step.step ? (
              <img
                className='checkedLogo'
                src='/images/checked.svg'
                alt='alt'
              />
            ) : (
              <div
                className={`step ${
                  index === activeStep ? "active" : "inactive"
                }`}
              >
                <TextComponent
                  text={step.step}
                  font='800'
                  className='inactive '
                  classfont='stepper-font-number-inact'
                />
              </div>
            )}
            <div
              className={index === activeStep ? "show-title" : "hide-titile"}
            >
              <TextComponent
                text={step.title}
                font='600'
                color='white'
                classfont='stepper-font-number-title'
                opacity={index === activeStep ? "1" : "0.4"}
              />
            </div>
            <div className={!lastStep ? "activeLine" : ""}></div>
            {index !== steps.length - 1 && index !== activeStep && (
              <div className='inActiveLine'></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
