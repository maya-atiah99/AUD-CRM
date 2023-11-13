import React, { useEffect, useRef, useState } from "react";
import UpperHeader from "../../components/Registration/UpperHeader";
import AUDButton from "../../components/Buttons/AUDButton";
import RegisterContainer from "../../components/Registration/RegisterContainer";
import TextComponent from "../../components/Texts/TextComponent";
import {
  useFetchApplicantStageFour,
  useFetchApplicantStageOne,
  useFetchApplicantStageThree,
  useFetchApplicantStageTwo,
} from "../../Hooks/Appplicant";
import { useLocation } from "react-router-dom";

const RegisterPage = ({ applicantId }) => {
  const [activeStep, setActiveStep] = useState(
    parseInt(localStorage.getItem("message"), 10) || 0
  );
  const formikRefStep1 = useRef();
  const formikRefStep2 = useRef();
  const formikRefStep3 = useRef();
  const formikRefStep4 = useRef();
  const location = useLocation();
  const [showInterest, setShowInterest] = useState(
    location?.state?.showInterest || false
  );
  const [fetchedData, setfetchedData] = useState({});
  const { data: applicantStageOne, refetch: refetchStageOne } =
    useFetchApplicantStageOne(applicantId);
  const { data: applicantStageTwo, refetch: refetchStageTwo } =
    useFetchApplicantStageTwo(applicantId);
  const { data: applicantStageThree, refetch: refetchStageThree } =
    useFetchApplicantStageThree(applicantId);
  const { data: applicantStageFour, refetch: refetchStageFour } =
    useFetchApplicantStageFour(applicantId);
  console.log("fetchedData register page ", fetchedData);
  console.log("applicantStageTwo", applicantStageTwo);
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
  console.log("acive", activeStep);

  useEffect(() => {
    refreshPage();
  }, [
    showInterest,
    activeStep,
    applicantStageOne,
    applicantStageTwo,
    applicantStageThree,
    applicantStageFour,
  ]);
  const refreshPage = () => {
    console.log(applicantStageOne);
    if (showInterest === true && applicantStageOne) {
      setfetchedData(applicantStageOne);
    } else if (activeStep === 0 && applicantStageTwo) {
      setfetchedData(applicantStageTwo);
    } else if (activeStep === 2 && applicantStageThree) {
      setfetchedData(applicantStageThree);
    } else if (activeStep === 3 && applicantStageFour) {
      setfetchedData(applicantStageFour);
    }
  };

  useEffect(() => {
    refreshPage();
  }, []);

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
            setShowInterest(false);
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
        } else {
          // toast.error("Fill all the required fields")
          window.scrollTo(0, 0);
        }
      }
    }, [100]);
  };

  useEffect(() => {
    if (showInterest === true) {
      refetchStageOne();
    } else if (activeStep === 0) {
      refetchStageTwo();
    } else if (activeStep === 2) {
      refetchStageThree();
    } else if (activeStep === 3) {
      refetchStageFour();
    }
  }, [activeStep, applicantId]);

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
            handleOnClick={() => (
              setActiveStep(activeStep - 1),
              refetchStageOne(),
              refetchStageTwo()
            )}
            icon='/images/homeicon.svg'
          />
        )}
        <TextComponent
          text='Please fill all the required fields (*) and click the Save & Continue button to continue to the next step.'
          icon='/images/warning-sign.svg'
          opacity='0.56'
          color='#1B224C'
          font='800'
          classfont='register-title'
        />
        <RegisterContainer
          activeStep={activeStep}
          steps={steps}
          lastStep={activeStep === steps.length - 1}
          refStep1={formikRefStep1}
          refStep2={formikRefStep2}
          refStep3={formikRefStep3}
          refStep4={formikRefStep4}
          applicantId={applicantId}
          fetchedData={fetchedData}
          showInterest={showInterest}
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
