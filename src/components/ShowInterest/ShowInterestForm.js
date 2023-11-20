import React, { useState } from "react";
import Dropdown from "../Inputs/DropDown";
import TextBox from "../Inputs/TextBox";
import PhoneNumber from "../Inputs/PhoneNumber";
import LinkButton from "../Buttons/LinkButton";
import AUDButton from "../Buttons/AUDButton";
import { Formik, Form } from "formik";
import showInterestValidationSchema from "../../ValidationSchemas/ShowInterestValidationSchema";
import { useAddApplicantToShowInterest } from "../../Hooks/ShowInterest";
import RadioButtonGroup from "../Inputs/RadioButtonGroup";
import { useAddApplicant } from "../../Hooks/Appplicant";

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
}) => {
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
 
  
  const handleContinueToApply = (values) => {
    addApplicant(values, {
      onSuccess: (data) => {
        console.log("submitted");
        console.log(data?.data?.applicantId);
        localStorage.setItem("applicantId", data?.data?.applicantId);
        setApplicantId(data?.data?.applicantId);
        openVerifiedModal("Continue");
        localStorage.removeItem("message");
      },
      onError: (error) => {
        console.error("An error occurred:", error);
      },
    });
  };

  const handleSubmitForm = (values) => {
    addShowInterest(values, {
      onSuccess: (data) => {
        console.log("show interest submitted");
        openVerifiedModal("Submit");
        console.log("data11", data);
        setApplicantId(data?.data?.applicantId);
      },
      onError: (error) => {
        console.error("An error occured:", error);
      },
    });
  };

  return (
    <Formik
      initialValues={init}
      validationSchema={showInterestValidationSchema}
      onSubmit={(values, { resetForm, setFieldError }) => {
        setPhoneNumber(values.mobile);
        const valuesToSend =
          values.titleId === "" ? { ...values, titleId: undefined } : values;
        if (clickedButton === "continueToApply") {
          handleContinueToApply(valuesToSend);
        } else if (clickedButton === "submitForm") {
          handleSubmitForm(valuesToSend);
        }
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
              <div className='grid-container'>
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
              <div className='grid-container2 '>
                <TextBox
                  styleType='formField'
                  width='100%'
                  label='Email'
                  required={true}
                  name='email'
                  value={values.email}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  errors={errors.email}
                  touched={touched.email}
                />

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
                <PhoneNumber
                  styleType='formField'
                  width='100%'
                  label='Mobile'
                  required={true}
                  name='mobile'
                  value={values.mobile}
                  onChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                  
                  errors={errors.mobile}
                  touched={touched.mobile}
                />
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
              <Dropdown
                styleType='formField'
                width='50%'
                label='Field Of Interest'
                required={true}
                type='8'
                name='fieldOfInterest'
                value={values.fieldOfInterest}
                onChange={(name, value) => {
                  setFieldValue(name, value);
                }}
                errors={errors.fieldOfInterest}
                touched={touched.fieldOfInterest}
              />
              <div>
                <RadioButtonGroup
                  options={startYourApplicationOptions}
                  name='applicationStart'
                  selectedValue={values.applicationStart}
                  label='Start Your Application'
                  required={true}
                  onRadioChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                />
                {errors?.applicationStart && touched?.applicationStart ? (
                  <span className='span-required'>
                    Start Your Application is required
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className='d-flex justify-content-between mt-1 '>
                <div className='d-flex flex-column gap-2'>
                  {/* <LinkButton
                    title='CONTINUE TO APPLY'
                    underlined={true}
                    required={true}
                    handleOnClick={() => {
                      setClickedButton("continueToApply");
                      handleSubmit();
                    }}
                  /> */}
                  <AUDButton
                    text='CONTINUE TO APPLY'
                    type='submit'
                    required={true}
                    handleOnClick={() => {
                      setClickedButton("continueToApply");
                      handleSubmit();
                    }}
                  />
                  <LinkButton
                    title='LOGIN HERE'
                    handleOnClick={() => {
                      setShowLoginModal(true);
                    }}
                    // linkTo='/register'
                    // underlined={true}
                    required={true}
                    color='#1B224C'
                  />
                </div>

                <AUDButton
                  text='Submit Form'
                  type='submit'
                  required={true}
                  handleOnClick={() => {
                    setClickedButton("submitForm");
                    handleSubmit();
                  }}
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ShowInterestForm;
