import React, { useState } from "react";
import Dropdown from "../Inputs/DropDown";
import TextBox from "../Inputs/TextBox";
import PhoneNumber from "../Inputs/PhoneNumber";
import AUDButton from "../Buttons/AUDButton";
import { Formik, Form } from "formik";
import showInterestValidationSchema from "../../ValidationSchemas/ShowInterestValidationSchema";
import { useAddApplicantToShowInterest } from "../../Hooks/ShowInterest";
import { useAddApplicant } from "../../Hooks/Appplicant";
import DropDown from "../Inputs/DropDown";

const startYourApplicationOptions = [
  { label: "Undergraduate", value: "0" },
  { label: "Graduate", value: "1" },
  { label: "Visiting", value: "2" },
];
const ShowInterestForm = ({
  setShowLoginModal,
  openVerifiedModal,
  setApplicantId,
  setPhoneNumber,
  setEmail,
  setApplicationStart,
  setApplicationId,
}) => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [errorPhoneMessage, setErrorPhoneMessage] = useState("");
  const [clickedButton, setClickedButton] = useState(null);
  const [init, setInit] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    nationality: "",
    mobile: "",
    titleId: "",
    howDidYouHear: "",
    selectedTerm: "",
    fieldOfInterest: "",
    applicationStart: "",
  });

  const { mutate: addShowInterest } = useAddApplicantToShowInterest();
  const { mutate: addApplicant } = useAddApplicant();

  const handleContinueToApply = (values, { setFieldError, resetForm }) => {
    addApplicant(values, {
      onSuccess: (data) => {
        localStorage.setItem("applicantId", data?.data?.applicantId);
        localStorage.setItem("applicationId", data?.data?.applicationId);
        setApplicationId(data?.data?.applicationId);
        localStorage.setItem("applicationStart", values.applicationStart);
        setApplicationStart(values.applicationStart);
        setApplicantId(data?.data?.applicantId);
        openVerifiedModal("Continue");
        localStorage.removeItem("message");
        setSubmissionSuccess(true);
        resetForm();
      },
      onError: (error, data) => {
        console.error("An error occurred:", error?.response?.data);
        const errorMessage = error?.response?.data.split(" ");
        if (errorMessage[0] === "Phone") {
          setErrorPhoneMessage(error?.response?.data);
        } else {
          setErrorMessage(error?.response?.data);
        }
        setFieldError(error?.response?.data);
        setSubmissionSuccess(false);
      },
    });
  };

  const handleSubmitForm = (values, { resetForm }) => {
    addShowInterest(values, {
      onSuccess: (data) => {
        openVerifiedModal("Submit");
        setApplicantId(data?.data?.applicantId);
        setSubmissionSuccess(true);
        resetForm();
      },
      onError: (error) => {
        console.error("An error occurred:", error);
        setSubmissionSuccess(false);
      },
    });
  };
  const handleEmailChange = () => {
    setErrorMessage("");
  };
  const handleMobileChange = () => {
    setErrorPhoneMessage("");
  };


  return (
    <Formik
      initialValues={init}
      validationSchema={showInterestValidationSchema}
      onSubmit={(values, { resetForm, setFieldError }) => {
        setPhoneNumber(values.mobile);
        setEmail(values.email);
        const valuesToSend =
          values.titleId === "" ? { ...values, titleId: undefined } : values;
          console.log('clickedbutton',clickedButton)
        if (clickedButton === "continueToApply") {
          handleContinueToApply(valuesToSend, { setFieldError, resetForm });
        } else if (clickedButton === "submitForm") {
          handleSubmitForm(valuesToSend, { resetForm });
        }

        if (submissionSuccess) {
          resetForm();
          setInit({
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            nationality: "",
            mobile: "",
            titleId: "",
            howDidYouHear: "",
            selectedTerm: "",
            fieldOfInterest: "",
            applicationStart: "",
          });
        }
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
            <div className='showInterestForm-inner-cont '>
              <div className='grid-container2'>
                <Dropdown
                  width='100%'
                  label='Title'
                  type='1'
                  styleType='formField'
                  name='titleId'
                  value={values.titleId}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                />

                <TextBox
                  name='firstName'
                  value={values.firstName}
                  styleType='formField'
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  width='100%'
                  label='First Name'
                  required={true}
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
              </div>
              <div className='grid-container2'>
                <TextBox
                  name='middleName'
                  value={values.middleName}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  styleType='formField'
                  width='100%'
                  label='Middle Name'
                  required={true}
                  errors={errors.middleName}
                  touched={touched.middleName}
                />

                <TextBox
                  styleType='formField'
                  width='100%'
                  label='Last Name'
                  required={true}
                  name='lastName'
                  value={values.lastName}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.lastName}
                  touched={touched.lastName}
                />
              </div>
              <div
                className={errorMessage ? "grid-container3" : "grid-container2"}
              >
                <div className='d-flex flex-column'>
                  <TextBox
                    styleType='formField'
                    width='100%'
                    label='Email'
                    required={true}
                    name='email'
                    value={values.email}
                    onChange={(name, value) => {
                      setFieldValue(name, value);
                      handleEmailChange();
                    }}
                    errors={errors.email || errorMessage}
                    touched={touched.email}
                  />
                  {errorMessage ? (
                    <div>
                      <div className='error-container d-flex gap-1 align-items-start'>
                        <img src='/images/errorSign.svg' alt='error' />
                        <div>
                          <p>
                            There is already a registration under this email. To
                            Continue your application please{" "}
                            <span
                              onClick={() => setShowLoginModal(true)}
                              style={{
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                            >
                              Login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <Dropdown
                  styleType='formField'
                  width='100%'
                  label='Nationality'
                  required={true}
                  type='4'
                  name='nationality'
                  value={values.nationality}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.nationality}
                  touched={touched.nationality}
                />
              </div>
              <div className='grid-container2 '>
                <div>
                  <PhoneNumber
                    styleType='formField'
                    width='100%'
                    label='Mobile'
                    required={true}
                    name='mobile'
                    value={values.mobile}
                    onChange={(name, value) => {
                      setFieldValue(name, value);
                      handleMobileChange();
                    }}
                    errors={errors.mobile}
                    touched={touched.mobile}
                  />
                  {errorPhoneMessage ? (
                    <div>
                      <div className='error-container d-flex gap-1 align-items-start'>
                        <img src='/images/errorSign.svg' alt='error' />
                        <div>
                          <p>
                            There is already a registration under this Phone
                            Number. To Continue your application please{" "}
                            <span
                              onClick={() => setShowLoginModal(true)}
                              style={{
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                            >
                              Login
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className='grid-container2 '>
                <Dropdown
                  styleType='formField'
                  width='100%'
                  label='How Did You Hear About Us'
                  required={true}
                  type='2'
                  name='howDidYouHear'
                  value={values.howDidYouHear}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.howDidYouHear}
                  touched={touched.howDidYouHear}
                />

                <Dropdown
                  styleType='formField'
                  width='100%'
                  label='Selected Term'
                  required={true}
                  isAcademic={true}
                  name='selectedTerm'
                  value={values.selectedTerm}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.selectedTerm}
                  touched={touched.selectedTerm}
                />
              </div>
              <div className='grid-container2 '>
                <DropDown
                  styleType='formField'
                  width='100%'
                  label='Start Your Application'
                  required={true}
                  name='applicationStart'
                  data={startYourApplicationOptions}
                  value={values.applicationStart}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.applicationStart}
                  touched={touched.applicationStart}
                />
                <Dropdown
                  styleType='formField'
                  width='100%'
                  label='Field Of Interest'
                  required={true}
                  applicatioStart={values.applicationStart}
                  name='fieldOfInterest'
                  value={values.fieldOfInterest}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.fieldOfInterest}
                  touched={touched.fieldOfInterest}
                />
              </div>

              <div className='showinterest-btn-container'>
                <AUDButton
                  text='Submit an Application'
                  type='submit'
                  required={true}
                  handleOnClick={() => {
                    setClickedButton("continueToApply");
                  }}
                />
                <AUDButton
                  text='Submit your Inquiry'
                  type='submit'
                  required={true}
                  handleOnClick={() => {
                    setClickedButton("submitForm");
                  }}
                />
              </div>

              <p className='applicant-loginp'>
                RETURNING APPLICANT:{" "}
                <span
                  onClick={() => {
                    setShowLoginModal(true);
                  }}
                >
                  Login
                </span>{" "}
                to continue an application
              </p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ShowInterestForm;
