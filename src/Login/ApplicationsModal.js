import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import RoundedButton from "../components/Buttons/RoundedButtons";
import { useFetchApplicationsById } from "../Hooks/Login";
import { useNavigate } from "react-router-dom";
import AUDButton from "../components/Buttons/AUDButton";

const ApplicationsModal = ({
  setShowApplicatiosModal,
  applicantId,
  setApplicationStart,
  setApplyingAs,
}) => {
  const [name, setName] = useState(localStorage.getItem("fullName"));
  const { data: applications } = useFetchApplicationsById(applicantId);
  const [manageShowInterest, setManageshowInterest] = useState(false);
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
    if (startYourApplication === 2) {
      switch (nextActiveStep) {
        case 0:
          return "Academic";
        case 1:
          return "Waiver & Releases";
        case 2:
          return "Declaration";
        case 3:
          return "Pay & Submit";
      }
    } else if (startYourApplication === 0 && applyingAs === 2) {
      switch (nextActiveStep) {
        case 0:
          return "Academic";
        case 1:
          return "Declaration";
        case 2:
          return "Pay & Submit";
      }
    } else {
      switch (nextActiveStep) {
        case 0:
          return "Academic";
        case 1:
          return "Waiver & Releases";
        case 2:
          return "Declaration";
        case 3:
          return "Pay & Submit";
      }
    }
  };
  console.log("applications", applications);
  const handleContinueApplication = (item) => {
    localStorage.setItem("applicationId", item.applicationId);
    localStorage.setItem("applicantId", item.applicantId);
    localStorage.setItem("applingAs", item.applyingAs);
    localStorage.setItem("applicationStart", item.startYourApplication);
    ///check if application status is viewed only
    //maya change applicationStatus to what lama will send to you don't keep it 0
    if (item.applicationStatus === 4) {
      localStorage.setItem("applicationStatus", true);
    }
    setApplicationStart(item.startYourApplication);
    setApplyingAs(item.applyingAs);
    localStorage.setItem("message", item.nextActiveStep);
    navigate("/register", {
      state: {
        activeStep: localStorage.getItem("message"),
        showInterest: localStorage.getItem("message") === 0 ? true : false,
      },
    });
  };
  return (
    <ModalComponent
      // width='40rem'
      title='Your Previous Applications'
      onClose={() => setShowApplicatiosModal(false)}
    >
      <div className='applications-table-cont'>
        <table className='applications-table'>
          <thead>
            <tr>
              <th>Application</th>
              <th>Program</th>
              <th>Plan to Join</th>
              <th>Status</th>
              <th>Steps</th>
              <th>Createtd On</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications?.data?.map((item) => {
              return (
                <tr key={item.applicantId}>
                  <td>{applicationStartFunction(item.startYourApplication)}</td>

                  <td style={{ maxWidth: "200px" }}>
                    {item.fieldOfInterest_Display}
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
                      text='Continue'
                      handleOnClick={() => handleContinueApplication(item)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex gap-1">
        <AUDButton text='Re-Apply' />

          <AUDButton text='Start New Application' />
        </div>
      </div>
    </ModalComponent>
  );
};

export default ApplicationsModal;
