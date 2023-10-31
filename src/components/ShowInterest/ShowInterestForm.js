import React, { useState } from "react";
import Dropdown from "../Inputs/DropDown";
import TextBox from "../Inputs/TextBox";
import PhoneNumber from "../Inputs/PhoneNumber";
import LinkButton from "../Buttons/LinkButton";
import AUDButton from "../Buttons/AUDButton";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import TextComponent from "../Texts/TextComponent";
import VerificationModal from "./VerificationModal";

const ShowInterestForm = ({ setshowVerifiedModal }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    middleName: Yup.string().required("Middle Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    nationality: Yup.string().required("Nationality is required"),
    mobile: Yup.string().required("Mobile is required"),
    title: Yup.string().notRequired(),
    hearAboutUs: Yup.string().required("How did you hear about us is required"),
    selectedTerm: Yup.string().required("Selected term is required"),
    fieldOFInterest: Yup.string().required("Field of interest  is required"),
  });

  const initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    nationality: "",
    mobile: "",
    title: "",
    hearAboutUs: "",
    selectedTerm: "",
    fieldOFInterest: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("test", values);
        setshowVerifiedModal(true);
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
      }) => (
        <Form>
          <div className='d-flex flex-column  '>
            <div className='grid-container'>
              <Dropdown
                width='100%'
                label='Title'
                type='1'
                styleType='formField'
                name='title'
                value={values.title}
                onChange={(name, value) => {
                  setFieldValue(name, value);
                }}
              />
              <ErrorMessage name='firstitleName' />

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
                name='hearAboutUs'
                value={values.hearAboutUs}
                onChange={(name, value) => {
                  setFieldValue(name, value);
                }}
                errors={errors.hearAboutUs}
                touched={touched.hearAboutUs}
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
              name='fieldOFInterest'
              value={values.fieldOFInterest}
              onChange={(name, value) => {
                setFieldValue(name, value);
              }}
              errors={errors.fieldOFInterest}
              touched={touched.fieldOFInterest}
            />

            <div className='d-flex justify-content-between '>
              <LinkButton
                title='CONTINUE TO APPLY'
                linkTo='/register'
                underlined={true}
                required={true}
              />
              <AUDButton
                text='Submit Form'
                type='submit'
                required={true}
                handleOnClick={() => handleSubmit()}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ShowInterestForm;
