import React from "react";
import TextBox from "../components/Inputs/TextBox";
import ModalComponent from "../components/ModalComponent";
import AUDButton from "../components/Buttons/AUDButton";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import PhoneNumber from "../components/Inputs/PhoneNumber";
const OtpForgotPasswordModal = ({
  mode,
  setShowOtpForgotPasswordModal,
  setEmail,
  setPhoneNumber,
  handleNextStepForgotPasswordOTP,
}) => {
  const init = {
    inputField: "",
  };
  const verificationEmailFieldSchema = Yup.object().shape({
    inputField: Yup.string()
      .email("Invalid Email")
      .required("Email inputField is required"),
  });
  const verificationPhoneFieldSchema = Yup.object().shape({
    inputField: Yup.number().required("Mobile inputField is required"),
  });

  return (
    <Formik
      initialValues={init}
      validationSchema={
        mode === "mobile"
          ? verificationPhoneFieldSchema
          : verificationEmailFieldSchema
      }
      onSubmit={() => {
        handleNextStepForgotPasswordOTP();
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
            <ModalComponent
              width='40rem'
              title={mode === "mobile" ? "Mobile Number" : "Email Address"}
              onClose={() => setShowOtpForgotPasswordModal(false)}
            >
              <div className='expandable-card'>
                {mode === "mobile" ? (
                  <PhoneNumber
                    width='50%'
                    label='Enter Mobile Number'
                    required={true}
                    name='inputField'
                    value={values.Mobile}
                    onChange={(name, value) => {
                      setFieldValue(name, value);
                      setPhoneNumber(value);
                    }}
                    errors={errors.inputField}
                    touched={touched.inputField}
                  />
                ) : (
                  <TextBox
                    label='Enter Email Address'
                    name='inputField'
                    value={values.inputField}
                    onChange={(name, value) => {
                      setFieldValue(name, value);
                      setEmail(value);
                    }}
                    errors={errors.inputField}
                    touched={touched.inputField}
                  />
                )}

                <AUDButton
                  text='Enter'
                  handleOnClick={handleSubmit}
                  type='Submit'
                />
              </div>
            </ModalComponent>
          </Form>
        );
      }}
    </Formik>
  );
};

export default OtpForgotPasswordModal;
