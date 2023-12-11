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

const RegisterPage = ({
  applicantId,
  applicationStart,
  setApplicationStart,
  applingAs,
  setApplyingAs,
}) => {
  const [activeStep, setActiveStep] = useState(
    parseInt(localStorage.getItem("message"), 10) || 0
  );

  const [applicationId, setApplicationId] = useState(
    localStorage.getItem("applicationId") || null
  );
  const [steps, setSteps] = useState([]);
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
    useFetchApplicantStageOne(applicantId);
  const { data: applicantStageTwo, refetch: refetchStageTwo } =
    useFetchApplicantStageTwo(applicantId, applicationId);

  const generateSteps = (applicationStart, applingAs) => {
    console.log("hiiiiiiiiiiiiiiiiiiiiiifdfrfrfr");
    if (applicationStart === "2") {
      console.log("testtttttttttttt");

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
            />
          ),
          ref: formikRefStep2,
        },
        {
          step: 3,
          title: "Waiver and Releases",
          previousStep: "Back to Academic",
          NextStep: "Go to Declaration",
          form: <WaiverAndReleases ref={formikRefStep5} />,
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
            />
          ),
          ref: formikRefStep3,
        },
        {
          step: 5,
          title: "Pay & Submit",
          previousStep: "Back to Declaration",
          NextStep: "Submit",
          form: <RegisterFormStep4 />,
          ref: formikRefStep4,
        },
      ];
    } else if (applicationStart === "0" && applingAs === 2) {
      console.log("tesdscsdcdscdcdscdsttttttttttttt");

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
            />
          ),
          ref: formikRefStep3,
        },
        {
          step: 3,
          title: "Pay & Submit",
          previousStep: "Back to Declaration",
          NextStep: "Submit",
          form: <RegisterFormStep4 />,
          ref: formikRefStep4,
        },
      ];
    } else {
      console.log("tesdtttttttttttttttttttttttttttsttttttttttttt");

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
            />
          ),
          ref: formikRefStep3,
        },
        {
          step: 4,
          title: "Pay & Submit",
          previousStep: "Back to Declaration",
          NextStep: "Submit",
          form: <RegisterFormStep4 />,
          ref: formikRefStep4,
        },
      ];
    }
  };

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
  }, []);

  useEffect(() => {
    const newSteps = generateSteps(applicationStart, applingAs);
    setSteps(newSteps);
  }, [applicationStart, fetchedData, applingAs]);

  useEffect(() => {
    const newSteps = generateSteps(applicationStart, applingAs);
    setSteps(newSteps);
  }, []);
  
  const handeleSubmit = (step) => {
    steps[step].ref.current?.submitForm();
  };

  const handleChange = (next) => {
    if (next) handeleSubmit(activeStep);
    setTimeout(() => {
      if (next) {
        if (activeStep === 0 && steps[activeStep].ref.current?.isValid) {
          if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            window.scrollTo(0, 0);
            setShowInterest(false);
          }
        } else if (activeStep !== 0 && steps[activeStep].ref.current?.isValid) {
          
          if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            window.scrollTo(0, 0);
          }
        } else {
          window.scrollTo(0, 0);
        }
      }
    }, [100]);
  };

  const handleSave = (next) => {
    if (next) handeleSubmit(activeStep);
    setTimeout(() => {
      if (next) {
        if (activeStep === 0 && formikRefStep1.current?.isValid) {
          if (activeStep < steps.length - 1) {
            navigate("/");
            localStorage.clear();
          }
        } else if (activeStep === 1 && formikRefStep2.current?.isValid) {
          if (activeStep < steps.length - 1) {
            navigate("/");
            localStorage.clear();
          }
        } else if (activeStep === 2 && formikRefStep3.current?.isValid) {
          if (activeStep < steps.length - 1) {
            navigate("/");
            localStorage.clear();
          }
        } else {
          window.scrollTo(0, 0);
        }
      }
    }, [100]);
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
    } else {
      setActiveStep(activeStep - 1);
      refetchStageTwo();
    }
  };

  return (
    <div>
      <UpperHeader />
      <div className='registerPage-container'>
        <AUDButton
          text={steps[activeStep]?.previousStep}
          icon={
            activeStep !== 0
              ? "/images/backarrowForbutton.svg"
              : "/images/homeicon.svg"
          }
          to={activeStep === 0 ? "/" : null}
          handleOnClick={() => handleClickPreviousButton()}
        />

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
        />
        <div className='button-cont-register '>
          <AUDButton
            text='Save & Continue Later'
            handleOnClick={() => handleSave(true)}
          />

          {activeStep !== steps.length - 1 ? (
            <AUDButton
              text='Continue To The Next Step'
              handleOnClick={() => handleChange(true)}
            />
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
    </div>
  );
};

export default RegisterPage;
