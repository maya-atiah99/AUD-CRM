import React from "react";
import TextComponent from "../Texts/TextComponent";
import SectionTitle from "../Texts/SectionTitle";
import ShowInterestForm from "./ShowInterestForm";

const ShowInterestFormContainer = ({
  setshowVerifiedModal,
  setShowLoginModal,
  openVerifiedModal,
  setApplicantId,
  setPhoneNumber,
  setEmail,
  setApplicationStart,
  setApplicationId,
  reApply,
  setReApply
}) => {
  return (
    <div className='show-interest-form'>
      <div>
        <TextComponent
          text='Welcome to the Online Admissions Portal  '
          font='800'
          classfont='classfont-show'
        />
        <TextComponent
          text='at the American University in Dubai'
          font='800'
          classfont='classfont-show'
        />
      </div>

      <SectionTitle title='BASIC INFORMATION' />
      <ShowInterestForm
        setshowVerifiedModal={setshowVerifiedModal}
        setShowLoginModal={setShowLoginModal}
        openVerifiedModal={openVerifiedModal}
        setApplicantId={setApplicantId}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
        setApplicationStart={setApplicationStart}
        setApplicationId={setApplicationId}
        
      />
    </div>
  );
};

export default ShowInterestFormContainer;
