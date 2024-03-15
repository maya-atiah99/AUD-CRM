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
import OtpCodeModal from "../../Login/OtpCodeModal.js";
import CheckEmailSent from "../../Login/CheckEmailSent.js";

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
  const [showOtpForgotPasswordModal, setShowOtpForgotPasswordModal] =
    useState(false);
  const [otpError, setOtpError] = useState(false);
  const [mode, setMode] = useState();
  const [checkEmailSent, setCheckEmailSent] = useState(false);
  const [showOtpCodeModal, setShowOtpCodeMOdal] = useState(false);
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
      if (data?.data?.verified === "true") {
        setshowVerifiedModal(false);
        setShowVerifiedCheckModal(true);
        setOtpCode("");
        setEmailOtp("");
      } else {
        toast.error("Something went wrong");
      }
      setTimeout(() => {
        setShowVerifiedCheckModal(false);
      }, [5000]);
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
      setEmailOtp("");
      toast.success(
        "Resend is done, please wait until you receive an otp then verify your email"
      );
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
      setOtpCode("");
      toast.success(
        "Resend is done, please wait until you receive an otp then verify your mobile"
      );
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
      console.log("mutate successed");
      openVerifiedModal("Continue");
      setActionOrigin("Continue");
      if (data?.data?.verified === "true") {
        console.log("here verified");
        setshowVerifiedModal(false);
        localStorage.setItem("token", "f12a8b7c-9d3e-4f6a-bb18-2c72f515");
        setTimeout(() => {
          navigate("/register", { state: { showInterest: true } });
        }, 200);
        setOtpCode("");
      } else {
        toast.error("Something went wrong");
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
      // openVerifiedModal("Continue");
      // setActionOrigin("Continue");
      setOtpCode("");
      toast.success(
        "Resend is done, please wait until you receive an otp then verify your mobile"
      );
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
      // openVerifiedModal("Continue");
      // setActionOrigin("Continue");
      setEmailOtp("");
      toast.success(
        "Resend is done, please wait until you receive an otp then verify your email"
      );
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });

  /***************handle done in verification model for otp */
  const handleDone = () => {
    if (actionOrigin === "Submit") {
      validateShowInterest.mutate();
    } else if (actionOrigin === "Continue") {
      console.log("etsgsvdcvsdhgcsd");
      validateApplicant.mutate();
    }
  };
  /***************handle resend otp  ***/
  const handleResendEmail = () => {
    if (actionOrigin === "Submit") {
      resendShowInterestEmailOtp.mutate();
    } else if (actionOrigin === "Continue") {
      resendApplicantEmailOtp.mutate();
    }
  };
  const handleResendPhone = () => {
    if (actionOrigin === "Submit") {
      resendShowInterestPhoneOtp.mutate();
    } else if (actionOrigin === "Continue") {
      resendApplicantPhoneOtp.mutate();
    }
  };

  /**************Forget password  (otp) ********************/
  /*********/
  /*****/
  /***Send Forgot password email ***/
  const sendForgotPasswordEmail = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/SendForgotPasswordEmail/${email}`
      );
    },
    onSuccess: async (data) => {
      setShowOtpForgotPasswordModal(false);
      setCheckEmailSent(true);
    },
    onError: (error) => {
      console.log("error: ", error);
      toast.error("Something went wrong");
    },
  });

  //****Send forgot password mobile *****/
  const sendForgotPasswordMobile = useMutation({
    mutationFn: () => {
      return axios.post(
        API_URL + `/api/Applicant/SendForgotPasswordOTP/${phoneNumber}`
      );
    },
    onSuccess: async (data) => {
      setShowOtpForgotPasswordModal(false);
      setShowOtpCodeMOdal(true);
      setApplicantId(data?.data?.applicantId);
    },
    onError: (error) => {
      console.log("error: ", error);
      toast.error("Something went wrong");
    },
  });

  ///****Verify password  otp */
  const verifyForgotPasswordOtp = useMutation({
    mutationFn: async () => {
      const url = `${applicantId}/${otpCode}`;
      return await axios.post(
        API_URL + `/api/Applicant/VerifyForgotPasswordOTP/${url}`
      );
    },
    onSuccess: async (data) => {
      setCheckEmailSent(true);
      setShowOtpCodeMOdal(false);
      setOtpCode("");
    },
    onError: (error) => {
      console.log("error: ", error);
      toast.error("Something went wrong");
    },
  });
  console.log("otpcodeeee", otpCode);
  //***handle send otp mobile or email  */
  const handleNextStepForgotPasswordOTP = () => {
    if (mode === "mobile") {
      sendForgotPasswordMobile.mutate();
    } else {
      sendForgotPasswordEmail.mutate();
    }
  };

  /*****handle verify otp for mobile in forgot password */
  const handleVerifyMobileOtpForPassword = () => {
    verifyForgotPasswordOtp.mutate();
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
          setShowOtpForgotPasswordModal={setShowOtpForgotPasswordModal}
          setMode={setMode}
          setActionOrigin={setActionOrigin}
        />
      )}
      {showOtpForgotPasswordModal && (
        <OtpForgotPasswordModal
          mode={mode}
          setShowOtpForgotPasswordModal={setShowOtpForgotPasswordModal}
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
          handleNextStepForgotPasswordOTP={handleNextStepForgotPasswordOTP}
        />
      )}
      {showOtpCodeModal && (
        <OtpCodeModal
          setOtpCode={setOtpCode}
          setShowOtpCodeMOdal={setShowOtpCodeMOdal}
          setCheckEmailSent={setCheckEmailSent}
          handleVerifyMobileOtpForPassword={handleVerifyMobileOtpForPassword}
          handleOnClickLinkPhone={handleResendPhone}
        />
      )}
      {checkEmailSent && (
        <CheckEmailSent
          mode={mode}
          setCheckEmailSent={setCheckEmailSent}
          email={email}
          phoneNumber={phoneNumber}
        />
      )}

      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
    </div>
  );
};

export default ShowInterest;
