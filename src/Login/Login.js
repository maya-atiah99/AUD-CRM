import React, { useEffect, useState } from "react";
import ModalComponent from "../components/ModalComponent";
import TextBox from "../components/Inputs/TextBox";
import AUDButton from "../components/Buttons/AUDButton";
import LinkButton from "../components/Buttons/LinkButton";
import { useApplicantLogin } from "../Hooks/Login";
import LoginValidationSchema from "../ValidationSchemas/loginValidationSchema";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
import LoaderButton from "../components/Loader/LoaderButton";

const Login = ({
  setShowLoginModal,
  setApplicantId,
  setShowApplicatiosModal,
  setApplicationStart,
  setApplyingAs,
  setIsForgotPassword,
}) => {
  const [manageShowInterest, setManageshowInterest] = useState(false);
  const { mutate: login, isLoading: isLoginLoading } = useApplicantLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <ModalComponent
      width='37rem'
      title='Login'
      onClose={() => setShowLoginModal(false)}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={(values, { setFieldError }) => {
          login(values, {
            onSuccess: (data) => {
              setApplicantId(data?.data?.applicantId);
              localStorage.setItem("token", data?.data?.token);
              localStorage.setItem("applicantId", data?.data?.applicantId);
              localStorage.setItem("fullName", data?.data?.fullName);
              localStorage.setItem(
                "applicationStart",
                data?.data?.applicationStart
              );
              localStorage.setItem("applingAs", data?.data?.appliyingAs);
              setApplicationStart(data?.data?.applicationStart);
              setApplyingAs(data?.data?.appliyingAs);
              setShowApplicatiosModal(true);
              setShowLoginModal(false);
            },
            onError: (error) => {
              console.error("An error occurred:", error);
              toast.error("Wrong Email or Password");
              setFieldError("error");
              setErrorMessage("error");
            },
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
            <Form>
              <div className='login-container'>
                <TextBox
                  label='Email Address'
                  // required={true}
                  name='username'
                  value={values.username}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.username || errorMessage}
                  touched={touched.username}
                />
                <TextBox
                  label='Password'
                  type='password'
                  // required={true}
                  name='password'
                  value={values.password}
                  onChange={(name, value) => {
                    var CryptoJS = require("crypto-js");
                    const secretKey = "AUD-CTS-109812jfgiubfg435345"; // Replace this with your secret key
                    const encryptedData = CryptoJS.AES.encrypt(
                      JSON.stringify(value),
                      secretKey
                    ).toString();

                    setFieldValue(name, encryptedData);
                  }}
                  errors={errors.password || errorMessage}
                  touched={touched.password}
                />
                {isLoginLoading ? (
                  <LoaderButton />
                ) : (
                  <AUDButton
                    width='100%'
                    text='Login'
                    type='submit'
                    handleOnClick={() => handleSubmit()}
                  />
                )}

                <div className='test222'>
                  <LinkButton
                    title='Forgot Password'
                    handleOnClick={() => (
                      setIsForgotPassword(true), setShowLoginModal(false)
                    )}
                    underlined={true}
                    type='button'
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </ModalComponent>
  );
};

export default Login;
