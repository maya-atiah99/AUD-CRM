import React from "react";
import TextComponent from "../Texts/TextComponent";
import SectionTitle from "../Texts/SectionTitle";
import ShowInterestForm from "./ShowInterestForm";

const ShowInterestFormContainer = ({
  setshowVerifiedModal,
  setShowLoginModal,
  openVerifiedModal,
  setApplicantId
}) => {
  return (
    <div className='show-interest-form'>
      <div>
        <TextComponent
          text='WELCOME TO THE ONLINE ADMISSIONS PORTAL '
          font='800'
          classfont='classfont-show'
        />
        <TextComponent
          text='AT THE AMERICAN UNIVERSITY IN DUBAI!'
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

      />
    </div>
  );
};

export default ShowInterestFormContainer;
