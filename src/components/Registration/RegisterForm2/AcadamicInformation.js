import React, { useEffect } from "react";
import DropDown from "../../Inputs/DropDown";
import SectionTitle from "../../Texts/SectionTitle";
import DateTime from "../../Inputs/DateTime";
import DocumentUpload from "../../Inputs/DocumentUpload";
import TextArea from "../../Inputs/TextArea";
import { useFormikContext } from "formik";

const AcadamicInformation = ({ isView }) => {
  const formik = useFormikContext();
  const applicationStart = localStorage.getItem("applicationStart");
  const applingAS = parseInt(localStorage.getItem("applingAs"));

  return (
    <div className='form-subcontainers academic-container'>
      <SectionTitle title='ACADEMIC INFORMATION' />
      {!(applicationStart === "0" && applingAS === 2) && (
        <div className='grid-academic-cont'>
          <DropDown
            width='100%'
            label={
              applicationStart === "0" && applingAS !== 1
                ? "Country You Graduated from"
                : "Country of Your Current University"
            }
            required={true}
            type='9'
            name='CurrentUniversityCountry'
            value={formik.values.CurrentUniversityCountry}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
              formik.setFieldValue("SchoolCountry", "");
            }}
            errors={formik.errors?.CurrentUniversityCountry}
            touched={formik.touched?.CurrentUniversityCountry}
            disabled={isView}
          />

          <DropDown
            width='100%'
            label={
              applicationStart === "0" && (applingAS === 0 || applingAS === 1)
                ? "High School Name"
                : "University Name "
            }
            type={
              applicationStart === "0" && (applingAS === 0 || applingAS === 1)
                ? "12"
                : "11"
            }
            parent={formik.values.CurrentUniversityCountry}
            required={true}
            name='SchoolCountry'
            value={formik.values.SchoolCountry}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.SchoolCountry}
            touched={formik.touched?.SchoolCountry}
            disabled={isView}
          />
          {applingAS !== 8 ? (
            <DropDown
              width='100%'
              label={
                applicationStart === "1" ||
                (applicationStart === "0" && applingAS === 3)
                  ? "Degree Earned Major"
                  : applicationStart === "2" && applingAS == 6
                  ? "Level of study"
                  : "High School Diploma"
              }
              required={true}
              type={applicationStart === "2" ? "13" : "7"}
              name='DiplomaType'
              value={formik.values.DiplomaType}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.DiplomaType}
              touched={formik.touched?.DiplomaType}
              disabled={isView}
            />
          ) : (
            <>
              <DropDown
                width='100%'
                label='State'
                required={true}
                type='10'
                parent='b15bc108-6b46-490a-a387-f2f0b7a42246'
                name='SchoolState'
                value={formik.values.SchoolState}
                onChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.SchoolState}
                touched={formik.touched?.SchoolState}
                disabled={isView}
              />
            </>
          )}

          {applicationStart !== "2" && applingAS !== 5 && applingAS !== 8 && (
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
              disabled={isView}
            />
          )}
        </div>
      )}

      {applicationStart === "0" && applingAS === 1 ? (
        <div className='grid-academic2-cont'>
          <DropDown
            width='100%'
            label={"Country of Your Current University"}
            required={true}
            type='9'
            name='CurrentUniversityCountry2'
            value={formik.values.CurrentUniversityCountry2}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
              formik.setFieldValue("SchoolCountry2", "");
            }}
            errors={formik.errors?.CurrentUniversityCountry2}
            touched={formik.touched?.CurrentUniversityCountry2}
            disabled={isView}
          />

          <DropDown
            width='100%'
            label='University Name'
            required={true}
            name='SchoolCountry2'
            type='11'
            parent={formik.values.CurrentUniversityCountry2}
            value={formik.values.SchoolCountry2}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.SchoolCountry2}
            touched={formik.touched?.SchoolCountry2}
            disabled={isView}
          />
        </div>
      ) : (
        ""
      )}

      <div className='grid-academic4-cont'>
        {applicationStart === "0" && (
          <TextArea
            label='Please List Any Advanced Courses Such As: ‘A’ Levels, Ap, Clep, Ib Diploma. '
            rows='4'
            cols='3'
            name='ListAdvancedCources'
            value={formik.values.ListAdvancedCources}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.ListAdvancedCources}
            touched={formik.touched?.ListAdvancedCources}
            disabled={isView}
          />
        )}

        {applingAS !== 6 && applingAS !== 8  ? (
          <DocumentUpload
            text='Upload Diploma'
            required={true}
            height='100px'
            size='50'
            label='Upload Document'
            name='DiplomaFile'
            // fileName={formik.values.DiplomaFile}
            value={formik.values.DiplomaFile}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.DiplomaFile}
            touched={formik.touched?.DiplomaFile}
            disabled={isView}
          />
        ) : (
          ""
        )}

        {/* <DocumentUpload
          text='Upload The Academic Document'
          required={true}
          height='100px'
          label='Upload Document'
          name='AcademicDocument'
          fileName={formik.values.AcademicDocument}
          errors={formik.errors?.AcademicDocument}
          touched={formik.touched?.AcademicDocument}
        />{" "} */}
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
          disabled={isView}
        />
      )}
    </div>
  );
};

export default AcadamicInformation;
