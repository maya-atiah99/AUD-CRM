import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import Dropdown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import DateTime from "../../Inputs/DateTime";
import PhoneNumber from "../../Inputs/PhoneNumber";
import { useFormikContext } from "formik";

const PersonalInformation = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PERSONAL INFORMATION OF THE APPLICANT' />
      <div className='grid-personal1-cont'>
        <Dropdown
          width='100%'
          label='Title'
          type='1'
          name='personalInformation.title'
          value={formik.values.personalInformation.title}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
        />
        <TextBox
          width='100%'
          label='First Name'
          required={true}
          name='personalInformation.firstName'
          value={formik.values.personalInformation.firstName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.firstName}
          touched={formik.touched?.personalInformation?.firstName}
        />
        <TextBox
          width='100%'
          label='Middle Name'
          required={true}
          name='personalInformation.middleName'
          value={formik.values.personalInformation.middleName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.middleName}
          touched={formik.touched?.personalInformation?.middleName}
        />
        <TextBox
          width='100%'
          label='Last Name'
          name='personalInformation.lastName'
          required={true}
          value={formik.values.personalInformation.lastName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.lastName}
          touched={formik.touched?.personalInformation?.lastName}
        />
      </div>
      <div className='grid-personal2-cont'>
        <TextBox
          width='100%'
          label='Email'
          required={true}
          name='personalInformation.email'
          value={formik.values.personalInformation.email}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.email}
          touched={formik.touched?.personalInformation?.email}
        />
        <DateTime
          width='100%'
          label='Date Of Birth'
          required={true}
          name='personalInformation.dateOfBirth'
          value={formik.values.personalInformation.dateOfBirth}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.dateOfBirth}
          touched={formik.touched?.personalInformation?.dateOfBirth}
        />
        <Dropdown
          width='100%'
          label='Gender'
          required={true}
          type='3'
          name='personalInformation.gender'
          value={formik.values.personalInformation.gender}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.gender}
          touched={formik.touched?.personalInformation?.gender}
        />
        <Dropdown
          width='100%'
          label='Nationality'
          required={true}
          type='4'
          name='personalInformation.nationality'
          value={formik.values.personalInformation.nationality}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.nationality}
          touched={formik.touched?.personalInformation?.nationality}
        />
      </div>
      <div className='grid-personal2-cont'>
        <PhoneNumber
          width='50%'
          label='Mobile'
          required={true}
          name='personalInformation.mobile'
          value={formik.values.personalInformation.mobile}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.mobile}
          touched={formik.touched?.personalInformation?.mobile}
        />
        <PhoneNumber
          width='100%'
          label='Telephone'
          name='personalInformation.telephone'
          required={true}
          value={formik.values.personalInformation.telephone}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.personalInformation?.telephone}
          touched={formik.touched.personalInformation?.telephone}
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
