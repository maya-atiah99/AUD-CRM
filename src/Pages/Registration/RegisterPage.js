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

const RegisterPage = ({ applicantId }) => {
  const [activeStep, setActiveStep] = useState(
    parseInt(localStorage.getItem("message"), 10) || 0
  );
  const [applicationStart, setApplicationStart] = useState(
    localStorage.getItem("applicationStart") || null
  );
  const [applingAs, setApplingAS] = useState(
    parseInt(localStorage.getItem("applingAs"))|| null
  );
  const [applicationId, setApplicationId] = useState(
    localStorage.getItem("applicationId") || null
  );
  const [steps, setSteps] = useState([]);
  const formikRefStep1 = useRef();
  const formikRefStep2 = useRef();
  const formikRefStep3 = useRef();
  const formikRefStep4 = useRef();
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

  useEffect(() => {
    applicationStart === "2"
      ? setSteps([
          {
            step: 1,
            visibleStep: 1,
            title: "Personal Info",
          },
          {
            step: 2,
            visibleStep: 2,
            title: "Academic",
          },
          {
            step: 6,
            visibleStep: 3,
            title: "Waiver & Release",
          },
          {
            step: 3,
            visibleStep: 4,
            title: "Declaration",
          },
          {
            step: 4,
            visibleStep: 5,
            title: "Pay & Submit",
          },
        ])
      : applicationStart === "0" && applingAs === 2
      ? setSteps([
          {
            step: 1,
            visibleStep: 1,
            title: "Personal Info",
          },
          {
            step: 3,
            visibleStep: 2,
            title: "Declaration",
          },
          {
            step: 4,
            visibleStep: 3,
            title: "Pay & Submit",
          },
        ])
      : setSteps([
          {
            step: 1,
            visibleStep: 1,
            title: "Personal Info",
          },
          {
            step: 2,
            visibleStep: 2,
            title: "Academic",
          },
          {
            step: 3,
            visibleStep: 3,
            title: "Declaration",
          },
          {
            step: 4,
            visibleStep: 4,
            title: "Pay & Submit",
          },
        ]);
  }, [applicationStart, fetchedData, applingAs]);

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
    setApplingAS(localStorage.getItem("applingAs"));
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

  console.log('activeStep',activeStep)
  console.log('message', localStorage.getItem("message"))
  console.log(steps)

  return (
    <div>
      <UpperHeader />
      <div className='registerPage-container'>
        {activeStep === 0 && (
          <AUDButton
            text='Back To Main'
            to='/'
            icon='/images/homeicon.svg'
            handleOnClick={() => setShowInterest(true)}
          />
        )}
        {activeStep !== 0 && (
          <AUDButton
            text={
              activeStep == 1
                ? "Back To Personal Info"
                : activeStep == 2
                ? "Back To Academic Info"
                : activeStep === 0
                ? "Back To Main"
                : "Beck To Declaration"
            }
            handleOnClick={() => (
              setActiveStep(activeStep - 1),
              refetchStageOne(),
              refetchStageTwo()
            )}
            icon={
              activeStep !== 0
                ? "/images/backarrowForbutton.svg"
                : "/images/homeicon.svg"
            }
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
          applicationId={applicationId}
          fetchedData={fetchedData}
          showInterest={showInterest}
          showThree={showThree}
          setApplicationStart={setApplicationStart}
          applingAs={applingAs}
          setApplingAs={setApplingAS}
          applicationStart={applicationStart}
        />
        <div className='button-cont-register '>
          <AUDButton
            text='Save & Continue Later'
            handleOnClick={() => handleSave(true)}
          />

          {activeStep !== steps.length - 1 && (
            <AUDButton
              text='Continue To The Next Step'
              handleOnClick={() => handleChange(true)}
            />
          )}

          {activeStep === 3 && (
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
