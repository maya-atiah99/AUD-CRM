import React from "react";
import DropDown from "../../Inputs/DropDown";
import SectionTitle from "../../Texts/SectionTitle";
import DateTime from "../../Inputs/DateTime";
import DocumentUpload from "../../Inputs/DocumentUpload";
import TextArea from "../../Inputs/TextArea";
import { useFormikContext } from "formik";
const AcadamicInformation = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='ACADEMIC INFORMATION' />
      <div className='grid-academic-cont'>
        <DropDown
          width='100%'
          label='Country Your Current University'
          required={true}
          type='4'
          name='CurrentUniversityCountry'
          value={formik.values.CurrentUniversityCountry}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.CurrentUniversityCountry}
          touched={formik.touched?.CurrentUniversityCountry}
        />
        <DropDown
          width='100%'
          label='School/University Name'
          required={true}
          type='4'
          name='SchoolCountry'
          value={formik.values.SchoolCountry}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.SchoolCountry}
          touched={formik.touched?.SchoolCountry}
        />
        <DropDown
          width='100%'
          label='High School Diploma'
          required={true}
          type='7'
          name='DiplomaType'
          value={formik.values.DiplomaType}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.DiplomaType}
          touched={formik.touched?.DiplomaType}
        />
        <DateTime
          width='100%'
          label='Graduation Year'
          required={true}
          name='GraduationYear'
          value={formik.values.GraduationYear}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GraduationYear}
          touched={formik.touched?.GraduationYear}
        />
      </div>
      <div className='grid-academic2-cont'>
        <TextArea
          label='Please List Any Advanced Courses Such As: ‘A’ Levels, Ap.'
          rows='4'
          cols='3'
          name='ListAdvancedCources'
          value={formik.values.ListAdvancedCources}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.ListAdvancedCources}
          touched={formik.touched?.ListAdvancedCources}
        />

        <DocumentUpload
          text='Upload The Academic Document'
          required={true}
          height='100px'
          label='Upload Document'
          name='DiplomaFile'
          errors={formik.errors?.DiplomaFile}
          touched={formik.touched?.DiplomaFile}
        />
      </div>
      <TextArea
        label='If You Are Not Currently Enrolled In A School, Please Describe Your Activities Since You Last Attended.'
        rows='4'
        cols='3'
        name='ActivitiesNotEnrolled'
        value={formik.values.ActivitiesNotEnrolled}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.ActivitiesNotEnrolled}
        touched={formik.touched?.ActivitiesNotEnrolled}
      />
    </div>
  );
};

export default AcadamicInformation;
