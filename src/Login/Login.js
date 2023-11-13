import React from "react";
import ModalComponent from "../components/ModalComponent";
import TextBox from "../components/Inputs/TextBox";
import AUDButton from "../components/Buttons/AUDButton";
import LinkButton from "../components/Buttons/LinkButton";
import { useApplicantLogin } from "../Hooks/Login";
import LoginValidationSchema from "../ValidationSchemas/loginValidationSchema";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";

const Login = ({
  setShowLoginModal,
  applicantId,
  setApplicantId,
  setMessage,
}) => {
  const navigate = useNavigate();
  const { mutate: login } = useApplicantLogin();
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <ModalComponent
      height='28rem'
      width='37rem'
      title='Login'
      onClose={() => setShowLoginModal(false)}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={(values) => {
          console.log("test", values);
          login(values, {
            onSuccess: (data) => {
              console.log("login dataa", data);
              setApplicantId(data?.data?.applicantId);
              localStorage.setItem("applicantId", data?.data?.applicantId);
              localStorage.setItem(
                "message",
                (() => {
                  if (data?.data?.message === "Stage1") {
                    return 0;
                  } else if (data?.data?.message === "Stage2") {
                    return 1;
                  } else if (data?.data?.message === "Stage3") {
                    return 2;
                  }
                  return 3;
                })()
              );
              navigate("/register", {
                state: { activeStep: localStorage.getItem("message") },
              });
              localStorage.removeItem("message");

            },
            onError: (error) => {
              console.error("An error occurred:", error);
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
          console.log(values);
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
                  errors={errors.username}
                  touched={touched.username}
                />
                <TextBox
                  label='Password'
                  required={true}
                  name='password'
                  value={values.password}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.password}
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
