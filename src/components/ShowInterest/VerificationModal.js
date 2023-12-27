import React, { useState } from "react";
import ModalComponent from "../ModalComponent";
import TextBox from "../Inputs/TextBox";
import TextComponent from "../Texts/TextComponent";
import LinkButton from "../Buttons/LinkButton";
import HorizantalLine from "../Texts/HorizantalLine";
import { Formik, Form } from "formik";
import * as Yup from "yup";
const VerificationModal = ({
  setshowVerifiedModal,
  handleDone,
  otpCode,
  setOtpCode,
  handleOnClickLinkEmail,
  handleOnClickLinkPhone,
  phoneNumber,
  emailotp,
  setEmailOtp,
  email,
  otpError,
}) => {
  const init = {
    otpCode: "",
    emailotp: "",
  };
  const verificationSchema = Yup.object().shape({
    otpCode: Yup.number().required("Mobile Verification Code is required"),
    emailotp: Yup.number().required("Email Verification Code is required"),
  });

  return (
    <Formik
      initialValues={init}
      validationSchema={verificationSchema}
      onSubmit={() => {
        console.log("helloo");
        handleDone();
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
            <ModalComponent
              onClose={() => setshowVerifiedModal(false)}
              handleOnClick={() => handleSubmit()}
              isButton={true}
              width='60rem'
              title='OTP'
              text='Confirm'
            >
              <div>
                <div className='expandable-card'>
                  <div className='d-flex gap-1'>
                    <TextComponent
                      text='We have send the OTP on '
                      size='18px'
                      font='500'
                    />{" "}
                    <TextComponent text={phoneNumber} size='18px' font='700' />
                  </div>

                  <TextBox
                    name='otpCode'
                    value={values.otpCode}
                    onChange={(name, value) => {
                      setFieldValue(name, value);
                      setOtpCode(value);
                    }}
                    label='Enter Mobile Verification Code'
                    errors={errors.otpCode}
                    touched={touched.otpCode}
                  />
                  <LinkButton
                    title='Resend'
                    text='Didn’t receive the code? '
                    handleOnClick={handleOnClickLinkPhone}
                    underlined={true}
                  />
                  <HorizantalLine width='100%' />
                  <div className='d-flex gap-1'>
                    <TextComponent
                      text='We have send the OTP on'
                      size='18px'
                      font='500'
                    />
                    <TextComponent text={email} size='18px' font='700' />
                  </div>

                  <TextBox
                    name='emailotp'
                    value={values.emailotp}
                    onChange={(name, value) => {
                      setFieldValue(name, value);
                      setEmailOtp(value);
                    }}
                    label='Enter Email Verification Code'
                    errors={errors.emailotp}
                    touched={touched.emailotp}
                  />
                  <LinkButton
                    title='Resend'
                    text='Didn’t receive the code? '
                    handleOnClick={handleOnClickLinkEmail}
                    underlined={true}
                  />
                </div>
              </div>
            </ModalComponent>
          </Form>
        );
      }}
    </Formik>
  );
};

export default VerificationModal;
