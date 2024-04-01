import React, { useEffect } from "react";
import RegisterFormStep4 from "./RegisterForm4/RegisterFormStep4";
import RegisterFormStep3 from "./RegisterForm3/RegisterFormStep3";
import RegisterFormStep2 from "./RegisterForm2/RegisterFormStep2";
import RegisterFormStep1 from "./RegisterFormStep1/RegisterFormStep1";
import WaiverAndReleases from "./RegisterFormWaiver/WaiverAndReleases";
import RegisterContainer from "./RegisterContainer";

const StepGenerator = ({
  applicantId,
  applicationStart,
  applingAs,
  showInterest,
  isView,
  activeStep,
  setActiveStep,
  fetchedData,
  formikRefStep1,
  formikRefStep2,
  formikRefStep3,
  formikRefStep4,
  formikRefStep5,
  steps,
  applicationId,
  setApplicationStart,
  setApplyingAs,
  showThree,
  setSteps,
}) => {
  const generateSteps = (applicationStart, applingAs) => {
    if (applingAs === 7 || applingAs === 8) {
      //visiting application  : visiting or clinton
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
          form: (
            <WaiverAndReleases
              ref={formikRefStep5}
              isView={isView}
              applingAs={applingAs}
              applicationStart={applicationStart}
            />
          ),
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
    } else if (applingAs === 6) {
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
          form: (
            <WaiverAndReleases
              ref={formikRefStep5}
              isView={isView}
              applingAs={applingAs}
              applicationStart={applicationStart}
            />
          ),
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
        },
        {
          step: 5,
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

  useEffect(() => {
    const newSteps = generateSteps(applicationStart, applingAs);
    setSteps(newSteps);
  }, [applicationStart, fetchedData, applingAs]);
  return (
    <RegisterContainer
      activeStep={activeStep}
      steps={steps}
      lastStep={activeStep === steps.length - 1}
      setActiveStep={setActiveStep}
    />
  );
};

export default StepGenerator;
