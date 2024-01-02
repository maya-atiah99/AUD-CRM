import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import DropDown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import { useFormikContext } from "formik";
import DocumentUpload from "../../Inputs/DocumentUpload";
import DateTime from "../../Inputs/DateTime";

const WorkExperience = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='WORK EXPERIENCE' />
      <div className='grid-personal1-cont'>
        <DropDown
          type='14'
          required={true}
          width='100%'
          label='Employment Status'
          name='EmploymentStatus'
          value={formik.values.EmploymentStatus}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.EmploymentStatus}
          touched={formik.touched?.EmploymentStatus}
        />

        <DropDown
          type='15'
          required={true}
          width='100%'
          label='Employment Sector'
          name='EmploymentSector'
          value={formik.values.EmploymentSector}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.EmploymentSector}
          touched={formik.touched?.EmploymentSector}
        />

        <TextBox
          required={true}
          width='100%'
          label='Company Name'
          name='CompanyName'
          value={formik.values.CompanyName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.CompanyName}
          touched={formik.touched?.CompanyName}
        />
        <TextBox
          required={true}
          width='100%'
          label='Job Title'
          name='JobTitle'
          value={formik.values.JobTitle}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.JobTitle}
          touched={formik.touched?.JobTitle}
        />
      </div>
      <div className='grid-programInfo-cont'>
        <TextBox
          required={true}
          width='100%'
          label='Year of Experience'
          name='YearsOfExperience'
          value={formik.values.YearsOfExperience}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.YearsOfExperience}
          touched={formik.touched?.YearsOfExperience}
        />
        <DocumentUpload
        label="Upload CV"
          text='Choose File'
          height='35px'
          size="50"
          smallImage={true}
          required={true}
          name='CV'
          value={formik.values.CV}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.CV}
          touched={formik.touched?.CV}
        />{" "}
      </div>
    </div>
  );
};

export default WorkExperience;
