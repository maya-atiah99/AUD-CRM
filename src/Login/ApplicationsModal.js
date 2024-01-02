import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import { Button } from "bootstrap";
import RoundedButton from "../components/Buttons/RoundedButtons";
import { useFetchApplicationsById } from "../Hooks/Login";
import { useNavigate } from "react-router-dom";
import AUDButton from "../components/Buttons/AUDButton";

const ApplicationsModal = ({
  setShowApplicatiosModal,
  applicantId,
  applicationStart,
  setApplicationStart,
  applingAs,
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
  console.log(applications);
  const handleContinueApplication = (item) => {
    localStorage.setItem("applicationId", item.applicationId);
    localStorage.setItem("applicantId", item.applicantId);
    localStorage.setItem("applingAs", item.applyingAs);
    localStorage.setItem("applicationStart", item.startYourApplication);
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
              <th>Name</th>
              <th>Application</th>
              <th>Program</th>
              <th>Plan to Join</th>
              <th>Status</th>
              <th>Createtd On</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications?.data?.map((item) => {
              return (
                <tr key={item.applicantId}>
                  <td>{name}</td>
                  <td>{applicationStartFunction(item.startYourApplication)}</td>

                  <td style={{ maxWidth: "200px" }}>
                    {item.fieldOfInterest_Display}
                  </td>
                  <td>{item.termName}</td>
                  <td>{applicationStatus(item.applicationStatus)}</td>
                  <td>{item.createdOn.substring(0, 10)}</td>

                  <td>
                    <RoundedButton
                      text='Continue'
                      handleOnClick={() => handleContinueApplication(item)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <AUDButton text='Start New Application' />
        </div>
      </div>
    </ModalComponent>
  );
};

export default ApplicationsModal;
