import React, { useEffect, useState } from "react";
import ModalComponent from "../components/ModalComponent";
import TextBox from "../components/Inputs/TextBox";
import AUDButton from "../components/Buttons/AUDButton";
import LinkButton from "../components/Buttons/LinkButton";
import { useApplicantLogin } from "../Hooks/Login";
import LoginValidationSchema from "../ValidationSchemas/loginValidationSchema";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = ({
  setShowLoginModal,
  applicantId,
  setApplicantId,
  setMessage,
  setShowApplicatiosModal,
  applicationStart,
  setApplicationStart,
  applingAs,
  setApplyingAs,
}) => {
  const [manageShowInterest, setManageshowInterest] = useState(false);
  const { mutate: login } = useApplicantLogin();
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
          console.log("test", values);

          login(values, {
            onSuccess: (data) => {
              setApplicantId(data?.data?.applicantId);
              localStorage.setItem("applicantId", data?.data?.applicantId);
              localStorage.setItem("fullName", data?.data?.fullName);
              // localStorage.setItem(
              //   "message",
              //   (() => {
              //     if (data?.data?.message === "Stage1") {
              //       setManageshowInterest(true);
              //       return 0;
              //     } else if (data?.data?.message === "Stage2") {
              //       return 1;
              //     } else if (data?.data?.message === "Stage3") {
              //       return 2;
              //     }
              //     return 3;
              //   })()
              // );

              localStorage.setItem(
                "applicationStart",
                data?.data?.applicationStart
              );
              localStorage.setItem("applingAs", data?.data?.appliyingAs);
              setApplicationStart(data?.data?.applicationStart);
              setApplyingAs(data?.data?.appliyingAs);
              console.log(
                "manageShowInterest,manageShowInterest",
                manageShowInterest
              );
              // navigate("/register", {
              //   state: {
              //     activeStep: localStorage.getItem("message"),
              //     showInterest: data?.data?.message === "Stage1" ? true : false,
              //   },
              // });
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
                  required={true}
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
                  required={true}
                  name='password'
                  value={values.password}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.password || errorMessage}
                  touched={touched.password}
                />
                <AUDButton
                  width='100%'
                  text='Login'
                  type='submit'
                  handleOnClick={() => handleSubmit()}
                />
                <div className='test222'>
                  <LinkButton
                    handleOnClick={() => setShowLoginModal(false)}
                    title='DON’T HAVE AN ACCOUNT? REGISTER NOW'
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
