import React from "react";
import ModalComponent from "../../ModalComponent";
import AUDButton from "../../Buttons/AUDButton";
import TextComponent from "../../Texts/TextComponent";

const ClintonAgreementModal = ({ onClose, handleCancle }) => {
  return (
    <ModalComponent width='60%' title='Clinton Scholar' onClose={onClose}>
      <div className='exit-container'>
        <TextComponent
          text=' The scholarship is open only to students who are U.S. Citizens. In
          order to be eligible for a scholarship, a student must currently be
          enrolled as a full-time undergraduate degree candidate at an
          accredited four-year college/university in the United States. It is
          expected that applicants will demonstrate exemplary academic
          achievement. Preference will be given to students who show interest in
          being exposed to the Middle Eastern and Islamic cultures for the first
          time.'
          size='18px'
          font='500'
        />
        <div className='d-flex gap-1'>
          <AUDButton text='I Agree' handleOnClick={onClose} />

          <AUDButton text='Cancel' handleOnClick={handleCancle} />
        </div>
      </div>
    </ModalComponent>
  );
};

export default ClintonAgreementModal;
