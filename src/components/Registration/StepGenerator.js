import React, { useEffect } from "react";
import RegisterFormStep4 from "./RegisterForm4/RegisterFormStep4";
import RegisterFormStep3 from "./RegisterForm3/RegisterFormStep3";
import RegisterFormStep2 from "./RegisterForm2/RegisterFormStep2";
import RegisterFormStep1 from "./RegisterFormStep1/RegisterFormStep1";
import WaiverAndReleases from "./RegisterFormWaiver/WaiverAndReleases";
import RegisterContainer from "./RegisterContainer";
import StudentInfoStep from "./ReApply/StudentInfoStep";

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
  formikRefStudentInfo,
  steps,
  applicationId,
  setApplicationStart,
  setApplyingAs,
  showThree,
  setSteps,
  reApply,
  isLoading,
}) => {
 
  const generateSteps = (applicationStart, applingAs, reApply) => {
    if (reApply === 1) {
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
              isLoading={isLoading}
              setActiveStep={setActiveStep}
            />
          ),
          ref: formikRefStep1,
        },
        {
          step: 2,
          title: "Student Info",
          previousStep: "Back to Personal Info",
          NextStep: "Go to Declaration",
          form: (
            <StudentInfoStep
              ref={formikRefStudentInfo}
              applicantId={applicantId}
              applicationId={applicationId}
              showInterest={showInterest}
              activeStep={activeStep}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationStart={applicationStart}
              isView={isView}
              setActiveStep={setActiveStep}
            />
          ),
          ref: formikRefStudentInfo,
        },
        {
          step: 3,
          title: "Declaration",
          previousStep: "Back to Student Info",
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
              reApply={reApply}
              isLoading={isLoading}
              setActiveStep={setActiveStep}
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
              setActiveStep={setActiveStep}
            />
          ),
          ref: formikRefStep4,
        },
      ];
    } else if (reApply === 2) {
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
              isLoading={isLoading}
              setActiveStep={setActiveStep}
            />
          ),
          ref: formikRefStep1,
        },
        {
          step: 2,
          title: "Student Info",
          previousStep: "Back to Personal Info",
          NextStep: "Go to Declaration",
          form: (
            <StudentInfoStep
              ref={formikRefStudentInfo}
              applicantId={applicantId}
              applicationId={applicationId}
              showInterest={showInterest}
              activeStep={activeStep}
              setApplicationStart={setApplicationStart}
              applingAs={applingAs}
              setApplyingAs={setApplyingAs}
              applicationStart={applicationStart}
              isView={isView}
              setActiveStep={setActiveStep}
            />
          ),
          ref: formikRefStudentInfo,
        },
        {
          step: 3,
          title: "Declaration",
          previousStep: "Back to Student Info",
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
              reApply={reApply}
              setActiveStep={setActiveStep}
            />
          ),
          ShowContinue: true,
          ref: formikRefStep3,
        },
      ];
    } else {
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
                isLoading={isLoading}
                setActiveStep={setActiveStep}
              />
            ),
            ref: formikRefStep1,
          },
          {
            step: 2,
            title: "Academic",
            previousStep: "Back to Personal Info",
            NextStep: "Go to Waiver and Releases",
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
                isLoading={isLoading}
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
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
                isLoading={isLoading}
                setActiveStep={setActiveStep}
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
                isLoading={isLoading}
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
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
                isLoading={isLoading}
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
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
                isLoading={isLoading}
                setActiveStep={setActiveStep}
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
                isLoading={isLoading}
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
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
                setActiveStep={setActiveStep}
              />
            ),
            ref: formikRefStep4,
          },
        ];
      }
    }
  };

  useEffect(() => {
    const newSteps = generateSteps(applicationStart, applingAs, reApply);
    setSteps(newSteps);
  }, [applicationStart, fetchedData, applingAs, reApply]);
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
