import React from "react";
import LogoContainer from "../../components/LogoContainer.js";
import ShowInterestFormContainer from "../../components/ShowInterest/ShowInterestFormContainer.js";
import ShowInterestVideo from "../../assets/video/background-video.mp4";
import VerticalLine from "../../components/Texts/VerticalLine.js";

const ShowInterest = () => {
  

  return (
    <div className='showInterest-container'>
      <video autoPlay loop muted id='background-video'>
        <source src={ShowInterestVideo} type='video/mp4' />
      </video>
      <div className='showInterest-subContainer'>
        <LogoContainer src='/images/showInterestLogo1.png' width='40%' />
        <VerticalLine />
        <ShowInterestFormContainer/>
      </div>
    </div>
  );
};

export default ShowInterest;

/***i need  */
