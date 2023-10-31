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
          name='academicInformation.countryUniversity'
          value={formik.values.academicInformation.countryUniversity}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.academicInformation?.countryUniversity}
          touched={formik.touched?.academicInformation?.countryUniversity}
        />
        <DropDown
          width='100%'
          label='School/University Name'
          required={true}
          type='4'
          name='academicInformation.universityName'
          value={formik.values.academicInformation.universityName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.academicInformation?.universityName}
          touched={formik.touched?.academicInformation?.universityName}
        />
        <DropDown
          width='100%'
          label='High School Diploma'
          required={true}
          type='7'
          name='academicInformation.highSchoolDiploma'
          value={formik.values.academicInformation.highSchoolDiploma}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.academicInformation?.highSchoolDiploma}
          touched={formik.touched?.academicInformation?.highSchoolDiploma}
        />
        <DateTime
          width='100%'
          label='Graduation Year'
          required={true}
          name='academicInformation.graduationYear'
          value={formik.values.academicInformation.graduationYear}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.academicInformation?.graduationYear}
          touched={formik.touched?.academicInformation?.graduationYear}
        />
      </div>
      <div className='grid-academic2-cont'>
        <TextArea
          label='Please List Any Advanced Courses Such As: ‘A’ Levels, Ap.'
          rows='4'
          cols='3'
          name='academicInformation.advancedCourse'
          value={formik.values.academicInformation.advancedCourse}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.academicInformation?.advancedCourse}
          touched={formik.touched?.academicInformation?.advancedCourse}
        />

        <DocumentUpload
          text='Upload The Academic Document'
          required={true}
          height='100px'
          label='Upload Document'
          name='academicInformation.academicDocument'
          errors={formik.errors?.academicInformation?.academicDocument}
          touched={formik.touched?.academicInformation?.academicDocument}
        />
      </div>
      <TextArea
        label='If You Are Not Currently Enrolled In A School, Please Describe Your Activities Since You Last Attended.'
        rows='4'
        cols='3'
        name='academicInformation.activitiesAttended'
        value={formik.values.academicInformation.activitiesAttended}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.academicInformation?.activitiesAttended}
        touched={formik.touched?.academicInformation?.activitiesAttended}
      />
    </div>
  );
};

export default AcadamicInformation;
