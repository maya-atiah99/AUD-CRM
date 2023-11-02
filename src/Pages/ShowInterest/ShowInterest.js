import React, { useState } from "react";
import LogoContainer from "../../components/LogoContainer.js";
import ShowInterestFormContainer from "../../components/ShowInterest/ShowInterestFormContainer.js";
import ShowInterestVideo from "../../assets/video/background-video.mp4";
import VerticalLine from "../../components/Texts/VerticalLine.js";
import VerificationModal from "../../components/ShowInterest/VerificationModal.js";
import Login from "../../Login/Login.js";
import VerifiedCheckModal from "../../components/ShowInterest/VerifiedCheckModal.js";

const ShowInterest = () => {
  const [showVerifiedModal, setshowVerifiedModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showVerifiedCheckModal, setShowVerifiedCheckModal] = useState(false);
  const [actionOrigin, setActionOrigin] = useState(null);

  const openVerifiedModal = (origin) => {
    setActionOrigin(origin);
    setshowVerifiedModal(true);
  };

  const handleDone = () => {
    if (actionOrigin === "Submit") {
      setshowVerifiedModal(false);
      setShowVerifiedCheckModal(true);
    } else if (actionOrigin === "Continue") {
      setshowVerifiedModal(false);
      setShowLoginModal(true);
    }
  };
  console.log('actionOrigin',actionOrigin)
  console.log('showVerifiedCheckModal',showVerifiedCheckModal)
  return (
    <div className='showInterest-container'>
      <video autoPlay loop muted id='background-video'>
        <source src={ShowInterestVideo} type='video/mp4' />
      </video>
      <div className='showInterest-subContainer'>
        <LogoContainer src='/images/showInterestLogo1.png' width='40%' />
        <VerticalLine />
        <ShowInterestFormContainer
          setshowVerifiedModal={setshowVerifiedModal}
          setShowLoginModal={setShowLoginModal}
          openVerifiedModal={openVerifiedModal}
        />
      </div>
      {showVerifiedModal && (
        <VerificationModal
          setshowVerifiedModal={setshowVerifiedModal}
          handleDone={handleDone}
        />
      )}
      {showVerifiedCheckModal && (
        <VerifiedCheckModal
          setShowVerifiedCheckModal={setShowVerifiedCheckModal}
        />
      )}
      {showLoginModal && <Login setShowLoginModal={setShowLoginModal} />}
    </div>
  );
};

export default ShowInterest;

/***i need  */
