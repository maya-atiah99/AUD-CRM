import React from "react";
import Dropdown from "../Inputs/DropDown";
import TextBox from "../Inputs/TextBox";
import PhoneNumber from "../Inputs/PhoneNumber";
import LinkButton from "../Buttons/LinkButton";
import AUDButton from "../Buttons/AUDButton";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

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
const ShowInterestForm = () => {
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

  const handleSubmit = () => {
    console.log("hi");
  };
  // const formik = useFormik({
  //   initialValues,
  //   validationSchema: validationSchema,
  //   onSubmit: handleSubmit,
  // });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
       {({ submitForm, isSubmitting }) => (
        <Form>
      <div className='d-flex flex-column  '>
        <div className='grid-container'>
          <Field name='title'>
            {({ field }) => (
              <Dropdown
                width='100%'
                label='Title'
                type='1'
                // value={field.value}
                // onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          </Field>
          <Field name='firstName'>
            {({ field }) => (
              <TextBox
                width='100%'
                label='First Name'
                required={true}
                // value={field.value}
                // onChange={field.onChange}
                // onBlur={field.onBlur}
              />
            )}
          </Field>
        </div>
        <div className='grid-container2'>
          <Field name='middleName'>
            {({ field }) => (
              <TextBox
                width='100%'
                label='Middle Name'
                required={true}
                // value={field.value}
                // onChange={field.onChange}
              />
            )}
          </Field>
          <Field name='lastName'>
            {({ field }) => (
              <TextBox
                width='100%'
                label='Last Name'
                required={true}
                // value={field.value}
                // onChange={field.onChange}
              />
            )}
          </Field>
        </div>
        <div className='grid-container2 '>
          <Field name='email'>
            {({ field }) => (
              <TextBox
                width='100%'
                label='Email'
                required={true}
                // value={field.value}
                // onChange={field.onChange}
              />
            )}
          </Field>
          <Field name='nationality'>
            {({ field }) => (
              <Dropdown
                width='100%'
                label='Nationality'
                required={true}
                type='4'
                // value={field.value}
                // onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          </Field>
        </div>
        <div className='grid-container2 '>
          <PhoneNumber width='50%' label='Mobile' required={true} />
        </div>

        <div className='grid-container2 '>
          <Field name='hearAboutUs'>
            {({ field }) => (
              <Dropdown
                width='100%'
                label='How Did You Hear About Us?'
                required={true}
                type='2'
                // value={field.value}
                // onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          </Field>
          <Field name='selectedTerm'>
            {({ field }) => (
              <Dropdown
                width='100%'
                label='Selected Term'
                required={true}
                type='2'
                // value={field.value}
                // onChange={field.onChange}
                onBlur={field.onBlur}
              />
            )}
          </Field>
        </div>
        <Field name='fieldOFInterest'>
          {({ field }) => (
            <Dropdown
              width='50%'
              label='Field Of Interest'
              required={true}
              type='8'
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        </Field>
        <div className='d-flex justify-content-between '>
          <LinkButton
            title='CONTINUE TO APPLY'
            linkTo='/register'
            underlined={true}
            required={true}
          />
          <AUDButton
              text='Submit Form'
              handleOnClick={() => {
                if (!isSubmitting) {
                  submitForm();
                }
              }}
            />
        </div>
      </div>
      </Form>
      )}
    </Formik>
  );
};

export default ShowInterestForm;
