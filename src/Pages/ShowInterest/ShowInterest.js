import React, { useState } from "react";
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
import ApplicationsModal from "../../Login/ApplicationsModal.js";
import { Toaster } from "react-hot-toast";

const ShowInterest = ({
  setApplicantId,
  applicantId,
  setMessage,
  applicationId,
  setApplicationId,
  applicationStart,
  setApplicationStart,
  applingAs,
  setApplyingAs,
}) => {
  const [showVerifiedModal, setshowVerifiedModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showApplicationsModal, setShowApplicatiosModal] = useState(false);
  const [showVerifiedCheckModal, setShowVerifiedCheckModal] = useState(false);
  const [actionOrigin, setActionOrigin] = useState(null);
  const [otpCode, setOtpCode] = useState("");
  const [emailotp, setEmailOtp] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const openVerifiedModal = (origin) => {
    setActionOrigin(origin);
    setshowVerifiedModal(true);
  };

  /**************Validate show interest */
  const validateShowInterest = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL +
          `/api/Applicant/ValidateShowingInterest/${applicantId}/${otpCode}/${emailotp}`
      );
    },
    onSuccess: async (data) => {
      console.log("data?.data?.verified", data?.data?.verified);
      if (data?.data?.verified === "true") {
        setshowVerifiedModal(false);
        setShowVerifiedCheckModal(true);
        setOtpCode("");
        setEmailOtp("");
      }
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });
  /**************resend otp show interest */
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

  /*****************Validate for registeration */
  const validateApplicant = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL +
          `/api/Applicant/ValidateApplicant/${applicantId}/${otpCode}/${emailotp}`
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

  /*************resend otp for registeration */
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

  /***************handle done in verification model for otp */
  const handleDone = () => {
    if (actionOrigin === "Submit") {
      console.log("jsndjcndjncjdncdcdc");
      validateShowInterest.mutate();
    } else if (actionOrigin === "Continue") {
      validateApplicant.mutate();
    }
  };
  /***************handle resend otp  */
  const handleResendEmail = () => {
    if (actionOrigin === "Submit") {
      resenfShowingInterest.mutate();
    } else if (actionOrigin === "Continue") {
      resendApplicantOtp.mutate();
    }
  };

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
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          setApplicationStart={setApplicationStart}
        />
      </div>
      {showVerifiedModal && (
        <VerificationModal
          setshowVerifiedModal={setshowVerifiedModal}
          handleDone={handleDone}
          applicantId={applicantId}
          otpCode={otpCode}
          setOtpCode={setOtpCode}
          emailotp={emailotp}
          setEmailOtp={setEmailOtp}
          handleOnClickLink={handleResendEmail}
          phoneNumber={phoneNumber}
          email={email}
        />
      )}
      {showVerifiedCheckModal && (
        <VerifiedCheckModal
          setShowVerifiedCheckModal={setShowVerifiedCheckModal}
          text="You will receive an email from us very soon"
          title="Sent Successfully"
          close={() => setShowVerifiedCheckModal(false)}
        />
      )}
      {showLoginModal && (
        <Login
          setShowLoginModal={setShowLoginModal}
          applicantId={applicantId}
          setApplicantId={setApplicantId}
          setMessage={setMessage}
          setShowApplicatiosModal={setShowApplicatiosModal}
          applicationStart={applicationStart}
          setApplicationStart={setApplicationStart}
          applingAs={applingAs}
          setApplyingAs={setApplyingAs}
        />
      )}
      {showApplicationsModal && (
        <ApplicationsModal
          setShowApplicatiosModal={setShowApplicatiosModal}
          applicantId={applicantId}
          applicationStart={applicationStart}
          setApplicationStart={setApplicationStart}
          applingAs={applingAs}
          setApplyingAs={setApplyingAs}
        />
      )}
      <Toaster />
    </div>
  );
};

export default ShowInterest;
