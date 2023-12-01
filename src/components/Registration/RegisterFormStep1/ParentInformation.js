import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextBox from "../../Inputs/TextBox";
import DropDown from "../../Inputs/DropDown";
import PhoneNumber from "../../Inputs/PhoneNumber";
import { useFormikContext } from "formik";
import SquareCheckBox from "../../Inputs/SquareCheckBox";

const ParentInformation = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PARENT OR GUARDIAN INFORMATION' />
      <div className='grid-personal1-cont'>
        <DropDown
          width='100%'
          label='Guardian Relation'
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
          label='Guardian Name'
          name='guardianName1'
          value={formik.values.guardianName1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianName1}
          touched={formik.touched?.guardianName1}
        />
        <PhoneNumber
          width='50%'
          label='Mobile'
          name='guardianMobile1'
          value={formik.values.guardianMobile1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianMobile1}
          touched={formik.touched?.guardianMobile1}
        />
        <TextBox
          width='100%'
          label='Email Address'
          name='guardianEmail1'
          value={formik.values.guardianEmail1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianEmail1}
          touched={formik.touched?.guardianEmail1}
        />
      </div>
      <div className='grid-personal1-cont'>
        <DropDown
          width='100%'
          label='Guardian Relation'
          type='6'
          name='guardianRelation2'
          value={formik.values.guardianRelation2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianRelation2}
          touched={formik.touched?.guardianRelation2}
        />
        <TextBox
          width='100%'
          label='Guardian Name'
          name='guardianName2'
          value={formik.values.guardianName2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianName2}
          touched={formik.touched?.guardianName2}
        />
        <PhoneNumber
          width='50%'
          label='Mobile'
          name='guardianMobile2'
          value={formik.values.guardianMobile2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianMobile2}
          touched={formik.touched?.guardianMobile2}
        />
        <TextBox
          width='100%'
          label='Email Address'
          name='guardianEmail2'
          value={formik.values.guardianEmail2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.guardianEmail2}
          touched={formik.touched?.guardianEmail2}
        />
      </div>
      <SquareCheckBox
        text='I am a Legacy Applicant. I have a parent who graduated from AUD'
        name='ProgramInformationCheck'
        fontWeight="700"
        value={formik.values.ProgramInformationCheck}
        onChange={(checked) => {
          formik.setFieldValue("ProgramInformationCheck", checked);
        }}
        errors={formik.errors?.ProgramInformationCheck}
        touched={formik.errors?.ProgramInformationCheck}
      />
    </div>
  );
};

export default ParentInformation;
