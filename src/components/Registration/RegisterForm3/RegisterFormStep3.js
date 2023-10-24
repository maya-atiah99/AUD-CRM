import React, { useEffect, useState } from "react";
import ProgramInformation from "../RegisterForm3/ProgramInformation";
import ImportantNotices from "./ImportantNotices";
import Reservation from "./Reservation";
import ModalComponent from "../../ModalComponent";
import Agreement from "../../Agreements/Agreement";

const RegisterFormStep3 = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [showModal]);

  return (
    <>
      <div className='form-subcontainer'>
        <ProgramInformation />
        <ImportantNotices />
        <Reservation handleClick={() => setShowModal(true)} />
      </div>
      {showModal && (
        <ModalComponent
          onClose={() => setShowModal(false)}
          width='90%'
          title='American University In Dubai Reservation And Enrollment Agreement & Terms'
        >
          <Agreement />
        </ModalComponent>
      )}
    </>
  );
};

export default RegisterFormStep3;
