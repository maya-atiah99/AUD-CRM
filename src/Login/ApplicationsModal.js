import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import RoundedButton from "../components/Buttons/RoundedButtons";
import { useFetchApplicationsById } from "../Hooks/Login";
import { useNavigate } from "react-router-dom";
import AUDButton from "../components/Buttons/AUDButton";
import Loader from "../components/Loader/Loader";
import TextComponent from "../components/Texts/TextComponent";

const ApplicationsModal = ({
  setShowApplicatiosModal,
  applicantId,
  setApplicationStart,
  setApplyingAs,
}) => {
  const { data: applications, isLoading: isApplicationsByIdLoading } =
    useFetchApplicationsById(applicantId);
  const navigate = useNavigate();

  const applicationStartFunction = (applicationType) => {
    switch (applicationType) {
      case 0:
        return "Undergraduate";
      case 1:
        return "Graduate";
      case 2:
        return "Visiting";
      default:
        return "Unknown";
    }
  };
  const applicationStatus = (status) => {
    switch (status) {
      case 0:
        return "Incomplete";
      case 1:
        return "Complete";
      default:
        return "Unknown";
    }
  };

  const stepsFunction = (startYourApplication, applyingAs, nextActiveStep) => {
    if (applyingAs === 7 || applyingAs === 8) {
      switch (nextActiveStep) {
        case 0:
          return "Personal Info";
        case 1:
          return "Academic";
        case 2:
          return "Waiver & Releases";
        case 3:
          return "Declaration";
        case 4:
          return "Declaration";
      }
    } else if (applyingAs === 6) {
      switch (nextActiveStep) {
        case 0:
          return "Personal Info";
        case 1:
          return "Academic";
        case 2:
          return "Waiver & Releases";
        case 3:
          return "Declaration";
        case 4:
          return "Pay & Submit";
      }
    } else if (startYourApplication === 0 && applyingAs === 2) {
      switch (nextActiveStep) {
        case 0:
          return "Personal Info";
        case 1:
          return "Declaration";
        case 2:
          return "Pay & Submit";
      }
    } else {
      switch (nextActiveStep) {
        case 0:
          return "Personal Info";
        case 1:
          return "Academic";
        case 2:
          return "Declaration";
        case 3:
          return "Pay & Submit";
      }
    }
  };

  const handleContinueApplication = (item) => {
    localStorage.setItem("applicationId", item.applicationId);
    localStorage.setItem("applicantId", item.applicantId);
    localStorage.setItem("applingAs", item.applyingAs);
    localStorage.setItem("applicationStart", item.startYourApplication);
    localStorage.setItem("newApp", false);

    if (item.applicationStatus === 4) {
      localStorage.setItem("applicationStatus", true);
    } else {
      localStorage.setItem("applicationStatus", false);
    }

    setApplicationStart(item.startYourApplication);
    setApplyingAs(item.applyingAs);

    if (item.applicationStatus === 4) {
      localStorage.setItem("message", 0);
    } else if (item.startYourApplication == 2) {
      if (item.stage4Completed != null) {
        localStorage.setItem("message", 3);
      } else {
        localStorage.setItem("message", item.nextActiveStep);
      }
    } else {
      localStorage.setItem("message", item.nextActiveStep);
    }
    localStorage.removeItem("reApply");
    navigate("/register", {
      state: {
        activeStep: localStorage.getItem("message"),
        showInterest: localStorage.getItem("message") === 0 ? true : false,
      },
    });
  };

  const handleReApply = () => {
    localStorage.setItem("reApply", 2);
    // localStorage.setItem("token", "f12a8b7c-9d3e-4f6a-bb18-2c72f515");
    localStorage.setItem("newApp", false);

    setTimeout(() => {
      navigate("/register", { state: { showInterest: true } });
    }, 200);
  };

  const handleStartNewApplication = (item) => {
    localStorage.setItem("newApp", true);
    // localStorage.setItem("applicationStart", item.startYourApplication);
    // setApplicationStart(item.startYourApplication);
    localStorage.setItem(
      "applicationId",
      "00000000-0000-0000-0000-000000000000"
    );

    setTimeout(() => {
      navigate("/register", { state: { showInterest: true } });
    }, 200);
  };
  return (
    <ModalComponent
      // width='80%'
      title='Your Previous Applications'
      onClose={() => setShowApplicatiosModal(false)}
    >
      <div className='applications-table-cont'>
        {isApplicationsByIdLoading ? (
          <Loader />
        ) : (
          <div className='cont'>
            <table className='applications-table'>
              <thead>
                <tr>
                  <th>Application</th>
                  <th>Program</th>
                  <th>Plan to Join</th>
                  <th>Status</th>
                  <th>Steps</th>
                  <th>Created On</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {applications?.data?.map((item) => {
                  return (
                    <tr key={item.applicationId}>
                      <td>
                        {applicationStartFunction(item.startYourApplication)}
                      </td>

                      <td style={{ maxWidth: "200px" }}>
                        {item.programOfInterest_Display
                          ? item.programOfInterest_Display
                          : item.fieldOfInterest_Display}
                      </td>
                      <td>{item.termName}</td>
                      <td></td>
                      <td>
                        {stepsFunction(
                          item.startYourApplication,
                          item.applyingAs,
                          item.nextActiveStep
                        )}
                      </td>
                      <td>{item.createdOn.substring(0, 10)}</td>

                      <td>
                        <AUDButton
                          text={
                            item.applicationStatus === 4 ? "View" : "Continue"
                          }
                          handleOnClick={() => handleContinueApplication(item)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className='applicationModal_text_cont'>
          <div className='applicationModal_text_subcont'>
            <TextComponent
              text='If you previously submitted an application and paid an application fee, you can initiate the re-application process by clicking the button'
              color='#000'
              font='500'
              // size='15px'
              classfont='p-style'
            />
            <AUDButton text='Re-Apply' handleOnClick={handleReApply} />
          </div>

          <AUDButton
            text='Start New Application'
            handleOnClick={handleStartNewApplication}
          />
        </div>
      </div>
    </ModalComponent>
  );
};

export default ApplicationsModal;
