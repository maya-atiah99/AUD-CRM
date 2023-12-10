import React from "react";
import TextComponent from "../Texts/TextComponent";

const Stepper = ({ activeStep, fontSize, steps, lastStep, length }) => {

  
  return (
    <div className='stepper'>
      {steps.map((step, index) => (
        <div className='subStep-container' key={index}>
          {activeStep + 1 > step.step ? (
            <img className='checkedLogo' src='/images/checked.svg' alt='alt' />
          ) : (
            <div
              className={`step ${index === activeStep ? "active" : "inactive"}`}
            >
              <TextComponent
                text={step.step}
                font='800'
                className='inactive '
                classfont='stepper-font-number-inact'
              />
            </div>
          )}

          <TextComponent
            text={step.title}
            font='600'
            color='white'
            classfont='stepper-font-number-title'
            opacity={index === activeStep ? "1" : "0.4"}
          />
          <div className={!lastStep ? "activeLine" : ""}></div>
          {index !== steps.length - 1 && index !== activeStep && (
            <div className='inActiveLine'></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
