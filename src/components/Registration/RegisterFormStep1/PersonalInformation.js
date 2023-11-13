import React, { useEffect, useState } from "react";
import SectionTitle from "../../Texts/SectionTitle";
import Dropdown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import DateTime from "../../Inputs/DateTime";
import PhoneNumber from "../../Inputs/PhoneNumber";
import { useFormikContext } from "formik";

const PersonalInformation = () => {
  const formik = useFormikContext();
  const [teststate, setTest] = useState(false);

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PERSONAL INFORMATION OF THE APPLICANT' />
      <div className='grid-personal1-cont'>
        <Dropdown
          width='100%'
          label='Title'
          type='1'
          name='titleId'
          value={formik.values.titleId}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
        />
        <TextBox
          width='100%'
          label='First Name'
          required={true}
          name='firstName'
          value={formik.values.firstName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.firstName}
          touched={formik.touched?.firstName}
        />
        <TextBox
          width='100%'
          label='Middle Name'
          required={true}
          name='middleName'
          value={formik.values.middleName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.middleName}
          touched={formik.touched?.middleName}
        />
        <TextBox
          width='100%'
          label='Last Name'
          name='lastName'
          required={true}
          value={formik.values.lastName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.lastName}
          touched={formik.touched?.lastName}
        />
      </div>
      <div className='grid-personal2-cont'>
        <TextBox
          width='100%'
          label='Email'
          required={true}
          name='email'
          value={formik.values.email}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.email}
          touched={formik.touched?.email}
        />
        <DateTime
          width='100%'
          label='Date Of Birth'
          required={true}
          name='dob'
          value={formik.values.dob}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.dob}
          touched={formik.touched?.dob}
        />
        <Dropdown
          width='100%'
          label='Gender'
          required={true}
          type='3'
          name='gender'
          value={formik.values.gender}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.gender}
          touched={formik.touched?.gender}
        />
        <Dropdown
          width='100%'
          label='Nationality'
          required={true}
          type='4'
          name='nationality'
          value={formik.values.nationality}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.nationality}
          touched={formik.touched?.nationality}
        />
      </div>
      <div className='grid-personal2-cont'>
        <PhoneNumber
          width='50%'
          label='Mobile'
          required={true}
          name='mobile'
          value={formik.values.mobile}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.mobile}
          touched={formik.touched?.mobile}
        />
        <PhoneNumber
          width='100%'
          label='Telephone'
          name='applicantTelephone'
          required={true}
          value={formik.values.applicantTelephone}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.applicantTelephone}
          touched={formik.touched.telephone}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
