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
import toast, { Toaster } from "react-hot-toast";
import ForgotPasswordModal from "../../Login/ForgotPasswordModal.js";
import OtpForgotPasswordModal from "../../Login/OtpForgotPasswordModal.js";

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
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [otpForgotPassword, setOtpForgotPassword] = useState(false);
  const [otpError, setOtpError] = useState(false);
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
      setTimeout(() => {
        setShowVerifiedCheckModal(false);
      }, [1000]);
    },
    onError: (error) => {
      console.log("error: ", error);
      toast.error("Something went wrong");
      setOtpError(true);
    },
  });
  /**************resend otp show interest */
  const resendShowInterestEmailOtp = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/ResendShowingIntersetEmailOTP/${applicantId}`
      );
    },
    onSuccess: async (data) => {
      console.log("hiiiiiiii email");
      setEmailOtp("");
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });

  const resendShowInterestPhoneOtp = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/ResendShowingIntersetOTP/${applicantId}`
      );
    },
    onSuccess: async (data) => {
      console.log("hiiiiiii phoneee");
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
      toast.error("Something went wrong");
      setOtpError(true);
    },
  });

  /*************resend otp for registeration */
  const resendApplicantPhoneOtp = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/ResendApplicantMobileOTP/${applicantId}`
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
  const resendApplicantEmailOtp = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/ResendApplicantEmailOTP/${applicantId}`
      );
    },
    onSuccess: async (data) => {
      openVerifiedModal("Continue");
      setActionOrigin("Continue");
      setEmailOtp("");
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });

  /***************handle done in verification model for otp */
  const handleDone = () => {
    if (actionOrigin === "Submit") {
      console.log('helloosxkdsmckndknckdsnckn')
      validateShowInterest.mutate();
    } else if (actionOrigin === "Continue") {
      validateApplicant.mutate();
    }
  };
  /***************handle resend otp  ***/
  const handleResendEmail = () => {
    if (actionOrigin === "Submit") {
      console.log("submittttttt");
      resendShowInterestEmailOtp.mutate();
    } else if (actionOrigin === "Continue") {
      resendApplicantEmailOtp.mutate();
    }
  };
  const handleResendPhone = () => {
    if (actionOrigin === "Submit") {
      console.log("submittttttt");

      resendShowInterestPhoneOtp.mutate();
    } else if (actionOrigin === "Continue") {
      resendApplicantPhoneOtp.mutate();
    }
  };
console.log(otpCode)
console.log(emailotp)
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
          setApplicationId={setApplicationId}
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
          handleOnClickLinkEmail={handleResendEmail}
          handleOnClickLinkPhone={handleResendPhone}
          phoneNumber={phoneNumber}
          email={email}
          otpError={otpError}
        />
      )}
      {showVerifiedCheckModal && (
        <VerifiedCheckModal
          setShowVerifiedCheckModal={setShowVerifiedCheckModal}
          text='You will receive an email from us very soon'
          title='Sent Successfully'
          close={() => setShowVerifiedCheckModal(false)}
        />
      )}
      {showLoginModal && (
        <Login
          setShowLoginModal={setShowLoginModal}
          setApplicantId={setApplicantId}
          setShowApplicatiosModal={setShowApplicatiosModal}
          setApplicationStart={setApplicationStart}
          setApplyingAs={setApplyingAs}
          setIsForgotPassword={setIsForgotPassword}
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
      {isForgotPassword && (
        <ForgotPasswordModal
          setIsForgotPassword={setIsForgotPassword}
          setOtpForgotPassword={setOtpForgotPassword}
        />
      )}
      {otpForgotPassword && <OtpForgotPasswordModal />}
      <Toaster />
    </div>
  );
};

export default ShowInterest;
