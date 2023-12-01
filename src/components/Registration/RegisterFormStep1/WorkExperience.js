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
          width='100%'
          label='Employment Status'
          type='6'
          name='guardianRelation1'
          value={formik.values.guardianRelation1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianRelation1}
          touched={formik.touched?.guardianRelation1}
        />

        <DropDown
          width='100%'
          label='Employment Sector'
          type='6'
          name='guardianRelation1'
          value={formik.values.guardianRelation1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianRelation1}
          touched={formik.touched?.guardianRelation1}
        />

        <TextBox
          width='100%'
          label='Company Name'
          name='guardianEmail1'
          value={formik.values.guardianEmail1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianEmail1}
          touched={formik.touched?.guardianEmail1}
        />
        <TextBox
          width='100%'
          label='Job Title'
          name='guardianEmail1'
          value={formik.values.guardianEmail1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianEmail1}
          touched={formik.touched?.guardianEmail1}
        />
      </div>
      <div className='grid-programInfo-cont'>
        <DateTime
          width='100%'
          label='Year of Experience'
          required={true}
          name='dob'
          value={formik.values.dob}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.dob}
          touched={formik.touched?.dob}
        />
        <DocumentUpload
          text='Upload CV'
          height='73px'
          name='DiplomaFile'
          fileName={formik.values.DiplomaFile}
          errors={formik.errors?.DiplomaFile}
          touched={formik.touched?.DiplomaFile}
        />{" "}
      </div>
    </div>
  );
};

export default WorkExperience;
