import React, { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import { Button } from "bootstrap";
import RoundedButton from "../components/Buttons/RoundedButtons";
import { useFetchApplicationsById } from "../Hooks/Login";
import { useNavigate } from "react-router-dom";

const ApplicationsModal = ({ setShowApplicatiosModal, applicantId }) => {
  const [name, setName] = useState(localStorage.getItem("fullName"));
  const { data: applications } = useFetchApplicationsById(applicantId);
  const [manageShowInterest, setManageshowInterest] = useState(false);
  const navigate = useNavigate();

  const applicationStart = (applicationType) => {
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

  const handleContinueApplication = (item) => {
    localStorage.setItem("applicationId", item.applicationId);
    localStorage.setItem("applicantId", item.applicantId);
    localStorage.setItem("applingAs", item.applyingAs);
    localStorage.setItem("applicationStart", item.startYourApplication);

    for (let i = 1; i <= 4; i++) {
      const currentStageKey = `stage${i}Completed`;
      const currentStageDate = item[currentStageKey];
      if (currentStageDate !== null) {
        console.log(`Stage ${i} is completed on ${currentStageDate}`);
        if (i < 4) {
          console.log(`Moving to Stage ${i + 1}`);
        } else {
          console.log("All stages are completed.");
          localStorage.setItem("message", 4);
        }
      } else {
        console.log(`Stage ${i} is not completed. Returning to Stage ${i}`);
        localStorage.setItem("message", i - 1);
        break;
      }
    }
    navigate("/register", {
      state: {
        activeStep: localStorage.getItem("message"),
        showInterest: localStorage.getItem("message") === 0 ? true : false,
      },
    });
  };
  return (
    <ModalComponent
      width='60%'
      title='Your Previous Applications'
      onClose={() => setShowApplicatiosModal(false)}
    >
      <div className='applications-table-cont'>
        <table className='applications-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Application Name</th>
              <th>Createtd On</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications?.data?.map((item) => {
              return (
                <tr key={item.applicantId}>
                  <td>{name}</td>
                  <td>{applicationStart(item.startYourApplication)}</td>
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
      </div>
    </ModalComponent>
  );
};

export default ApplicationsModal;
