import React, { useState } from "react";
import LogoContainer from "../../components/LogoContainer.js";
import ShowInterestFormContainer from "../../components/ShowInterest/ShowInterestFormContainer.js";
import ShowInterestVideo from "../../assets/video/background-video.mp4";
import VerticalLine from "../../components/Texts/VerticalLine.js";
import VerificationModal from "../../components/ShowInterest/VerificationModal.js";

const ShowInterest = () => {
  
  const [showVerifiedModal, setshowVerifiedModal] = useState(false);
  return (
    <div className='showInterest-container'>
      <video autoPlay loop muted id='background-video'>
        <source src={ShowInterestVideo} type='video/mp4' />
      </video>
      <div className='showInterest-subContainer'>
        <LogoContainer src='/images/showInterestLogo1.png' width='40%' />
        <VerticalLine />
        <ShowInterestFormContainer setshowVerifiedModal={setshowVerifiedModal}/>
      </div>
      {showVerifiedModal && <VerificationModal setshowVerifiedModal={setshowVerifiedModal}/>}
    </div>
  );
};

export default ShowInterest;

/***i need  */
