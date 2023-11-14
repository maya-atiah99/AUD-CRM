import React from "react";
import DropDown from "../../Inputs/DropDown";
import SectionTitle from "../../Texts/SectionTitle";
import DateTime from "../../Inputs/DateTime";
import DocumentUpload from "../../Inputs/DocumentUpload";
import TextArea from "../../Inputs/TextArea";
import { useFormikContext } from "formik";
const AcadamicInformation = () => {
  const formik = useFormikContext();
  const applicationStart = localStorage.getItem("applicationStart");

  return (
    <div className='form-subcontainers academic-container'>
      <SectionTitle title='ACADEMIC INFORMATION' />
      <div className='grid-academic-cont'>
        <DropDown
          width='100%'
          label={
            applicationStart === "0"
              ? "Country Your Current University"
              : applicationStart === "1"
              ? "Country you Graduated from "
              : "Country Your Current University "
          }
          required={true}
          type='9'
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
          label={
            applicationStart === "0"
              ? "School/University Name"
              : applicationStart === "1"
              ? "University Name "
              : "School/University "
          }
          required={true}
          type='11'
          parent={formik.values.CurrentUniversityCountry}
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
          label={
            applicationStart === "0"
              ? "High School Diploma"
              : applicationStart === "1"
              ? "Bachelor Diploma Type"
              : "HS Diploma Type/ Bachelor Diploma Type"
          }
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
        {applicationStart !== "2" && (
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
        )}
      </div>
      <div className='grid-academic2-cont'>
        {applicationStart === "0" && (
          <>
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
            />{" "}
          </>
        )}
      </div>
      {applicationStart === "0" && (
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
      )}
    </div>
  );
};

export default AcadamicInformation;
