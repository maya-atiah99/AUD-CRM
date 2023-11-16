import React, { useState } from "react";
import LogoContainer from "../../components/LogoContainer.js";
import ShowInterestFormContainer from "../../components/ShowInterest/ShowInterestFormContainer.js";
import ShowInterestVideo from "../../assets/video/background-video.mp4";
import VerticalLine from "../../components/Texts/VerticalLine.js";
import VerificationModal from "../../components/ShowInterest/VerificationModal.js";
import Login from "../../Login/Login.js";
import VerifiedCheckModal from "../../components/ShowInterest/VerifiedCheckModal.js";
import { useMutation } from "react-query";
import { API_URL } from "../../Constants.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowInterest = ({ setApplicantId, applicantId, setMessage }) => {
  const [showVerifiedModal, setshowVerifiedModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showVerifiedCheckModal, setShowVerifiedCheckModal] = useState(false);
  const [actionOrigin, setActionOrigin] = useState(null);
  const [otpCode, setOtpCode] = useState("");
  const navigate = useNavigate();

  const openVerifiedModal = (origin) => {
    setActionOrigin(origin);
    setshowVerifiedModal(true);
  };

  const validateShowInterest = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL +
          `/api/Applicant/ValidateShowingInterest/${applicantId}/${otpCode}`
      );
    },
    onSuccess: async (data) => {
      console.log("data?.data?.verified", data?.data?.verified);
      if (data?.data?.verified === "true") {
        setshowVerifiedModal(false);
        setShowVerifiedCheckModal(true);
        setOtpCode("");
      }
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });

  const resenfShowingInterest = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/ResendShowingIntersetOTP/${applicantId}`
      );
    },
    onSuccess: async (data) => {
      setOtpCode("");
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });

  const validateApplicant = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/ValidateApplicant/${applicantId}/${otpCode}`
      );
    },
    onSuccess: async (data) => {
      console.log("data?.data?.verified", data?.data?.verified);
      openVerifiedModal("Continue");
      setActionOrigin("Continue");
      if (data?.data?.verified === "true") {
        setshowVerifiedModal(false);
        navigate("/register", { state: { showInterest: true } });
        setOtpCode("");
      }
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });

  const resendApplicantOtp = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/ResendApplicantOTP/${applicantId}`
      );
    },
    onSuccess: async (data) => {
      openVerifiedModal("Continue");
      setActionOrigin("Continue");
      setOtpCode("");
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });

  const handleDone = () => {
    if (actionOrigin === "Submit") {
      validateShowInterest.mutate();
    } else if (actionOrigin === "Continue") {
      console.log("hellloooooooo");
      validateApplicant.mutate();
    }
  };

  console.log("testtttttttttt", actionOrigin);

  const handleResendEmail = () => {
    if (actionOrigin === "Submit") {
      resenfShowingInterest.mutate();
    } else if (actionOrigin === "Continue") {
      resendApplicantOtp.mutate();
    }
  };

  console.log("otpCode", otpCode);

  return (
    <div className='showInterest-container'>
      <video autoPlay loop muted id='background-video'>
        <source src={ShowInterestVideo} type='video/mp4' />
      </video>
      <div className='showInterest-subContainer'>
        <img
          src='/images/showInterestLogo1.png'
          alt='Logo'
          className='showInterestLogo'
        />
        <div className='vertical-line-showInterest'>
          <VerticalLine />
        </div>
        <ShowInterestFormContainer
          setshowVerifiedModal={setshowVerifiedModal}
          setShowLoginModal={setShowLoginModal}
          openVerifiedModal={openVerifiedModal}
          setApplicantId={setApplicantId}
        />
      </div>
      {showVerifiedModal && (
        <VerificationModal
          setshowVerifiedModal={setshowVerifiedModal}
          handleDone={handleDone}
          applicantId={applicantId}
          otpCode={otpCode}
          setOtpCode={setOtpCode}
          handleOnClickLink={handleResendEmail}
        />
      )}
      {showVerifiedCheckModal && (
        <VerifiedCheckModal
          setShowVerifiedCheckModal={setShowVerifiedCheckModal}
        />
      )}
      {showLoginModal && (
        <Login
          setShowLoginModal={setShowLoginModal}
          applicantId={applicantId}
          setApplicantId={setApplicantId}
          setMessage={setMessage}
        />
      )}
    </div>
  );
};

export default ShowInterest;
