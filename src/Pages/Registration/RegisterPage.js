import React, { useEffect, useRef, useState } from "react";
import UpperHeader from "../../components/Registration/UpperHeader";
import AUDButton from "../../components/Buttons/AUDButton";
import TextComponent from "../../components/Texts/TextComponent";
import {
  useFetchApplicantStageOne,
  useFetchApplicantStageTwo,
} from "../../Hooks/Appplicant";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import VerifiedCheckModal from "../../components/ShowInterest/VerifiedCheckModal";
import ExitModal from "../../components/Registration/ExitModal";
import StepGenerator from "../../components/Registration/StepGenerator";

const RegisterPage = ({
  applicantId,
  applicationStart,
  setApplicationStart,
  applingAs,
  setApplyingAs,
  applicationId,
  setApplicationId,
  setApplicantId,
}) => {
  const [activeStep, setActiveStep] = useState(
    parseInt(localStorage.getItem("message"), 10) || 0
  );
  const [reApply, setReApply] = useState(
    parseInt(localStorage.getItem("reApply")) || null
  );
  const [isView, setIsView] = useState(
    localStorage.getItem("applicationStatus") === "true"
  );
  const [isExit, setIsExit] = useState(false);
  const [steps, setSteps] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const formikRefStep1 = useRef();
  const formikRefStep2 = useRef();
  const formikRefStep3 = useRef();
  const formikRefStep4 = useRef();
  const formikRefStep5 = useRef();
  const formikRefStudentInfo = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [showInterest, setShowInterest] = useState(
    location?.state?.showInterest || false
  );
  const [showThree, setShowThree] = useState(false);
  const [fetchedData, setfetchedData] = useState({});
  const {
    data: applicantStageOne,
    refetch: refetchStageOne,
    isLoading: isStageOneLoading,
  } = useFetchApplicantStageOne(applicantId, applicationId);
  const {
    data: applicantStageTwo,
    refetch: refetchStageTwo,
    isLoading: isStageTwoLoading,
  } = useFetchApplicantStageTwo(applicantId, applicationId);

  useEffect(() => {
    refreshPage();
  }, [showInterest, activeStep, applicantStageOne, applicantStageTwo]);

  const refreshPage = () => {
    if (showInterest === true && applicantStageOne) {
      setfetchedData(applicantStageOne);
    } else if (activeStep === 0 && applicantStageTwo) {
      setfetchedData(applicantStageTwo);
    }
  };

  useEffect(() => {
    refreshPage();
    setApplicationStart(localStorage.getItem("applicationStart"));
    setApplyingAs(parseInt(localStorage.getItem("applingAs")));
    setApplicationId(localStorage.getItem("applicationId"));
    setApplicantId(localStorage.getItem("applicantId"));
  }, []);

  //handle continue to next step button
  const handleChange = async (next) => {
    await steps[activeStep].ref.current?.setFieldValue("isSaved", true);
    steps[activeStep].ref.current?.setFieldValue(
      "NextActiveStep",
      activeStep + 1
    );

    if (next) {
      try {
        await steps[activeStep].ref.current?.submitForm();
        if (steps[activeStep].ref.current?.isValid) {
          if (activeStep === 0) {
            setShowInterest(false);
          }
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          window.scrollTo(0, 0);
        } else {
          toast.error("Please Fill All Required Fields");
          window.scrollTo(0, 0);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  //handle save and continue button
  const handleSave = async (next) => {
    await steps[activeStep].ref.current?.setFieldValue("isSaved", false);
    steps[activeStep].ref.current?.setFieldValue("NextActiveStep", activeStep);
    if (next) steps[activeStep].ref.current?.submitForm();
    setTimeout(() => {
      navigate("/");
      localStorage.clear();
    }, 500);
  };

  const handleContinueDeclaration = async (next) => {
    await steps[activeStep].ref.current?.setFieldValue("isSaved", true);
    steps[activeStep].ref.current?.setFieldValue(
      "NextActiveStep",
      activeStep + 1
    );
    if (next) {
      try {
        await steps[activeStep].ref.current?.submitForm();
        if (steps[activeStep].ref.current?.isValid) {
          setIsVerified(true);
          window.scrollTo(0, 0);
        } else {
          toast.error("Please Fill All Required Fields");
          window.scrollTo(0, 0);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  //handle next in case view application
  const handleNext = (next) => {
    if (next) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (showInterest === true && activeStep === 0) {
      refetchStageOne();
    } else if (activeStep === 0) {
      refetchStageTwo();
    }
  }, [activeStep, showInterest, applicantId]);

  //Previous button in the form
  const handlePrevious = () => {
    if (activeStep === 0) {
      setIsExit(true);
    } else {
      setActiveStep(activeStep - 1);
      refetchStageTwo();
    }
  };

  //Exit popup to handle exit
  const handleClickPreviousButton = () => {
    if (activeStep === 0) {
      setShowInterest(true);
      navigate("/");
      localStorage.clear();
    } else {
      setActiveStep(activeStep - 1);
      refetchStageTwo();
    }
  };

  return (
    <div>
      <UpperHeader />
      <div className='registerPage-container'>
        <div>
          <AUDButton
            text={steps[activeStep]?.previousStep}
            icon={
              activeStep !== 0
                ? "/images/backarrowForbutton.svg"
                : "/images/homeicon.svg"
            }
            // to={activeStep === 0 ? "/" : null}
            handleOnClick={handlePrevious}
          />
        </div>

        <TextComponent
          text='Please fill all the required fields (*) before moving to the next page.'
          icon='/images/warning-sign.svg'
          opacity='0.56'
          color='#1B224C'
          font='800'
          classfont='register-title'
        />
        <StepGenerator
          applicantId={applicantId}
          applicationId={applicationId}
          applicationStart={applicationStart}
          applingAs={applingAs}
          setApplicationStart={setApplicationStart}
          setApplyingAs={setApplyingAs}
          showInterest={showInterest}
          isView={isView}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          fetchedData={fetchedData}
          steps={steps}
          lastStep={activeStep === steps.length - 1}
          formikRefStep1={formikRefStep1}
          formikRefStep2={formikRefStep2}
          formikRefStep3={formikRefStep3}
          formikRefStep4={formikRefStep4}
          formikRefStep5={formikRefStep5}
          formikRefStudentInfo={formikRefStudentInfo}
          setSteps={setSteps}
          showThree={showThree}
          reApply={reApply}
          isLoading={isStageOneLoading || isStageTwoLoading}
        />

        <div className='button-cont-register '>
          {steps[activeStep]?.ShowContinue === true ? (
            <AUDButton
              text='Submit'
              handleOnClick={() => handleContinueDeclaration(true)}
            />
          ) : activeStep !== steps.length - 1 ? (
            <>
              {!isView && (
                <AUDButton
                  text='Save & Continue Later'
                  handleOnClick={() => handleSave(true)}
                />
              )}
              {isView ? (
                <AUDButton text='Next' handleOnClick={() => handleNext(true)} />
              ) : (
                <AUDButton
                  text='Continue To The Next Step'
                  handleOnClick={() => handleChange(true)}
                />
              )}
            </>
          ) : (
            <AUDButton
              text='Go Back To Programs Page'
              handleOnClick={() => {
                setActiveStep(0);
                setShowThree(activeStep === 2 ? true : false);
              }}
            />
          )}
        </div>
      </div>
      <Toaster />
      {isVerified ? (
        <VerifiedCheckModal
          close={() => setIsVerified(false)}
          title='Application Submitted Successfully'
          text='You will receive an email from us very soon'
        />
      ) : (
        ""
      )}
      {isExit ? (
        <ExitModal
          setIsExit={setIsExit}
          handleSave={() => handleSave(true)}
          handleExit={handleClickPreviousButton}
          isView={isView}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default RegisterPage;
