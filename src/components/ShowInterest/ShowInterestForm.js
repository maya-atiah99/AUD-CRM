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

const startYourApplicationOptions = [
  { label: "Undergraduate", value: "Undergraduate" },
  { label: "Graduate", value: "Graduate" },
  { label: "Visiting", value: "Visiting" },
];
const ShowInterestForm = ({ setShowLoginModal, openVerifiedModal }) => {
  const initialValues = {
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
  };

  const { mutate: addApplicant } = useAddApplicantToShowInterest();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={showInterestValidationSchema}
      onSubmit={(values) => {
        console.log("test", values);
        // addApplicant(values, {
        //   onSuccess: () => {
        //     console.log("submitted");
        //     toast.success("Form submittes successfully");
        //     setshowVerifiedModal(true);
        //   },
        //   onError: (error) => {
        //     console.error("An error occured:", error);
        //   },
        // });
        openVerifiedModal("Submit");
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
                  name='startYourApp'
                  selectedValue={values.startYourApp}
                  label='Start Your Application'
                  required={true}
                  onRadioChange={(name, value) => {
                    setFieldValue(name, value);
                  }}
                />
              </div>

              <div className='d-flex justify-content-between mt-3'>
                <div className='d-flex flex-column gap-2'>
                  <LinkButton
                    title='CONTINUE TO APPLY'
                    handleOnClick={() => {
                      openVerifiedModal("Continue");
                    }}
                    // linkTo='/register'
                    underlined={true}
                    required={true}
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
                  handleOnClick={() => handleSubmit()}
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
