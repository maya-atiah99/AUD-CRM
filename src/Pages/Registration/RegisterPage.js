import React, { useEffect, useRef, useState } from "react";
import UpperHeader from "../../components/Registration/UpperHeader";
import AUDButton from "../../components/Buttons/AUDButton";
import RegisterContainer from "../../components/Registration/RegisterContainer";
import TextComponent from "../../components/Texts/TextComponent";
import {
  useFetchApplicantStageOne,
  useFetchApplicantStageTwo,
} from "../../Hooks/Appplicant";
import { useLocation, useNavigate } from "react-router-dom";
import RegisterFormStep1 from "../../components/Registration/RegisterFormStep1/RegisterFormStep1";
import RegisterFormStep2 from "../../components/Registration/RegisterForm2/RegisterFormStep2";
import RegisterFormStep3 from "../../components/Registration/RegisterForm3/RegisterFormStep3";
import RegisterFormStep4 from "../../components/Registration/RegisterForm4/RegisterFormStep4";
import WaiverAndReleases from "../../components/Registration/RegisterFormWaiver/WaiverAndReleases";
import toast, { Toaster } from "react-hot-toast";
import VerifiedCheckModal from "../../components/ShowInterest/VerifiedCheckModal";
import ExitModal from "../../components/Registration/ExitModal";

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
  const location = useLocation();
  const navigate = useNavigate();
  const [showInterest, setShowInterest] = useState(
    location?.state?.showInterest || false
  );
  const [showThree, setShowThree] = useState(false);
  const [fetchedData, setfetchedData] = useState({});
  const { data: applicantStageOne, refetch: refetchStageOne } =
    useFetchApplicantStageOne(applicantId, applicationId);
  const { data: applicantStageTwo, refetch: refetchStageTwo } =
    useFetchApplicantStageTwo(applicantId, applicationId);
  console.log("stage2", applicantStageTwo);
  console.log("application start", applicationStart);

  const generateSteps = (applicationStart, applingAs) => {
    if (applicationStart === "2") {
      //visiting
      return [
        {
          step: 1,
          title: "Personal Info",
          previousStep: "Back to main",
          NextStep: "Go to Academic",
          form: (
            <RegisterFormStep1
              ref={formikRefStep1}
              fetchedData={fetchedData}
              applicantId={applicantId}
              applicationId={applicationId}
              showInterest={showInterest}
              activeStep={activeStep}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationStart={applicationStart}
              isView={isView}
            />
          ),
          ref: formikRefStep1,
        },
        {
          step: 2,
          title: "Academic",
          previousStep: "Back to Personal Info",
          NextStep: "Go to Declaration",
          form: (
            <RegisterFormStep2
              ref={formikRefStep2}
              applicantId={applicantId}
              fetchedData={fetchedData}
              showThree={showThree}
              activeStep={activeStep}
              applicationId={applicationId}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationStart={applicationStart}
              isView={isView}
            />
          ),
          ref: formikRefStep2,
        },
        {
          step: 3,
          title: "Waiver and Releases",
          previousStep: "Back to Academic",
          NextStep: "Go to Declaration",
          form: <WaiverAndReleases ref={formikRefStep5} isView={isView} />,
          ref: formikRefStep5,
        },
        {
          step: 4,
          title: "Declaration",
          previousStep: "Back to Waiver and Releases",
          NextStep: "Go to Payment",
          form: (
            <RegisterFormStep3
              ref={formikRefStep3}
              applicantId={applicantId}
              fetchedData={fetchedData}
              applicationId={applicationId}
              applingAs={applingAs}
              activeStep={activeStep}
              applicationStart={applicationStart}
              isView={isView}
            />
          ),
          ref: formikRefStep3,
          ShowContinue: true,
        },
        // {
        //   step: 5,
        //   title: "Pay & Submit",
        //   previousStep: "Back to Declaration",
        //   NextStep: "Submit",
        //   form: (
        //     <RegisterFormStep4
        //       activeStep={activeStep}
        //       applicantId={applicantId}
        //       applicationId={applicationId}
        //       isView={isView}
        //     />
        //   ),
        //   ref: formikRefStep4,
        // },
      ];
    } else if (applicationStart === "0" && applingAs === 2) {
      //audit
      return [
        {
          step: 1,
          title: "Personal Info",
          previousStep: "Back to main",
          NextStep: "Go to Academic",
          form: (
            <RegisterFormStep1
              ref={formikRefStep1}
              fetchedData={fetchedData}
              applicantId={applicantId}
              showInterest={showInterest}
              activeStep={activeStep}
              applicationId={applicationId}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationStart={applicationStart}
              isView={isView}
            />
          ),
          ref: formikRefStep1,
        },
        {
          step: 2,
          title: "Declaration",
          previousStep: "Back to Personal Info",
          NextStep: "Go to Payment",
          form: (
            <RegisterFormStep3
              ref={formikRefStep3}
              applicantId={applicantId}
              fetchedData={fetchedData}
              applicationId={applicationId}
              applingAs={applingAs}
              activeStep={activeStep}
              applicationStart={applicationStart}
              isView={isView}
            />
          ),
          ref: formikRefStep3,
        },
        {
          step: 3,
          title: "Pay & Submit",
          previousStep: "Back to Declaration",
          NextStep: "Submit",
          form: (
            <RegisterFormStep4
              activeStep={activeStep}
              applicantId={applicantId}
              applicationId={applicationId}
              isView={isView}
            />
          ),
          ref: formikRefStep4,
        },
      ];
    } else {
      return [
        {
          step: 1,
          title: "Personal Info",
          previousStep: "Back to main",
          NextStep: "Go to Academic",
          form: (
            <RegisterFormStep1
              ref={formikRefStep1}
              fetchedData={fetchedData}
              applicantId={applicantId}
              showInterest={showInterest}
              activeStep={activeStep}
              applicationId={applicationId}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationStart={applicationStart}
              isView={isView}
            />
          ),
          ref: formikRefStep1,
        },
        {
          step: 2,
          title: "Academic",
          previousStep: "Back to Personal Info",
          NextStep: "Go to Declaration",
          form: (
            <RegisterFormStep2
              ref={formikRefStep2}
              applicantId={applicantId}
              fetchedData={fetchedData}
              showThree={showThree}
              applicationId={applicationId}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationStart={applicationStart}
              activeStep={activeStep}
              isView={isView}
            />
          ),
          ref: formikRefStep2,
        },
        {
          step: 3,
          title: "Declaration",
          previousStep: "Back to Academic",
          NextStep: "Go to Payment",
          form: (
            <RegisterFormStep3
              ref={formikRefStep3}
              applicantId={applicantId}
              fetchedData={fetchedData}
              applicationId={applicationId}
              applingAs={applingAs}
              applicationStart={applicationStart}
              activeStep={activeStep}
              isView={isView}
            />
          ),
          ref: formikRefStep3,
        },
        {
          step: 4,
          title: "Pay & Submit",
          previousStep: "Back to Declaration",
          NextStep: "Submit",
          form: (
            <RegisterFormStep4
              activeStep={activeStep}
              applicantId={applicantId}
              applicationId={applicationId}
              isView={isView}
            />
          ),
          ref: formikRefStep4,
        },
      ];
    }
  };

  console.log("applicationID", applicationId);
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
  console.log("isview", isView);

  useEffect(() => {
    refreshPage();
    setApplicationStart(localStorage.getItem("applicationStart"));
    setApplyingAs(parseInt(localStorage.getItem("applingAs")));
    setApplicationId(localStorage.getItem("applicationId"));
    setApplicantId(localStorage.getItem("applicantId"));
  }, []);

  useEffect(() => {
    const newSteps = generateSteps(applicationStart, applingAs);
    setSteps(newSteps);
  }, [applicationStart, fetchedData, applingAs]);

  const handleChange = async (next) => {
    console.log("continue to next step");

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

  const handleSave = async (next) => {
    console.log("handleSave");
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

  const handleClickPreviousButton = () => {
    if (activeStep === 0) {
      setShowInterest(true);
      navigate("/");
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
            handleOnClick={() => setIsExit(true)}
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
        <RegisterContainer
          activeStep={activeStep}
          steps={steps}
          lastStep={activeStep === steps.length - 1}
          setActiveStep={setActiveStep}
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
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default RegisterPage;
