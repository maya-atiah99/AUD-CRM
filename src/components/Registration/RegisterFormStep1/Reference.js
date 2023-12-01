import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextBox from "../../Inputs/TextBox";
import { useFormikContext } from "formik";
import DropDown from "../../Inputs/DropDown";
import SquareCheckBox from "../../Inputs/SquareCheckBox";

const Reference = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='WORK EXPERIENCE' />
      <div className='grid-personal1-cont'>
        <DropDown
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
          label='Name'
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
          label='Email'
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
          label='How do you know the reference?'
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
      <SquareCheckBox
        text='A request of "Letter of Recommendation" will be sent via email to the reference you provided us'
        name='ProgramInformationCheck'
        value={formik.values.ProgramInformationCheck}
        onChange={(checked) => {
          formik.setFieldValue("ProgramInformationCheck", checked);
        }}
        errors={formik.errors?.ProgramInformationCheck}
        touched={formik.errors?.ProgramInformationCheck}
      />
      <SquareCheckBox
        text='I have read and understand the above information'
        name='ProgramInformationCheck'
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

export default Reference;
