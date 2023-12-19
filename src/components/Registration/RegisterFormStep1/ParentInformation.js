import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextBox from "../../Inputs/TextBox";
import DropDown from "../../Inputs/DropDown";
import PhoneNumber from "../../Inputs/PhoneNumber";
import { useFormikContext } from "formik";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import DateTime from "../../Inputs/DateTime";

const ParentInformation = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PARENT OR GUARDIAN INFORMATION' />
      <div className='grid-personal1-cont'>
        <DropDown
          width='100%'
          label='Guardian Relation'
          required={true}
          type='6'
          name='GuardianRelation1'
          value={formik.values.GuardianRelation1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GuardianRelation1}
          touched={formik.touched?.GuardianRelation1}
        />
        <TextBox
          width='100%'
          required={true}
          label='Guardian Name'
          name='GuardianName1'
          value={formik.values.GuardianName1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GuardianName1}
          touched={formik.touched?.GuardianName1}
        />
        <PhoneNumber
          width='50%'
          label='Mobile'
          required={true}
          name='GuardianMobile1'
          value={formik.values.GuardianMobile1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GuardianMobile1}
          touched={formik.touched?.GuardianMobile1}
        />
        <TextBox
          width='100%'
          label='Email Address'
          required={true}
          name='GuardianEmail1'
          value={formik.values.GuardianEmail1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GuardianEmail1}
          touched={formik.touched?.GuardianEmail1}
        />
      </div>
      <div className='grid-personal1-cont'>
        <DropDown
          width='100%'
          label='Guardian Relation'
          type='6'
          name='GuardianRelation2'
          value={formik.values.GuardianRelation2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GuardianRelation2}
          touched={formik.touched?.GuardianRelation2}
        />
        <TextBox
          width='100%'
          label='Guardian Name'
          name='GuardianName2'
          value={formik.values.GuardianName2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GuardianName2}
          touched={formik.touched?.GuardianName2}
        />
        <PhoneNumber
          width='50%'
          label='Mobile'
          name='GuardianMobile2'
          value={formik.values.GuardianMobile2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GuardianMobile2}
          touched={formik.touched?.GuardianMobile2}
        />
        <TextBox
          width='100%'
          label='Email Address'
          name='GuardianEmail2'
          value={formik.values.GuardianEmail2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.GuardianEmail2}
          touched={formik.touched?.GuardianEmail2}
        />
      </div>
      <SquareCheckBox
        text='I am a Legacy Applicant. I have a parent who graduated from AUD'
        name='LegacyApplicant'
        fontWeight='700'
        value={formik.values.LegacyApplicant}
        onChange={(checked) => {
          formik.setFieldValue("LegacyApplicant", checked);
        }}
        errors={formik.errors?.LegacyApplicant}
        touched={formik.errors?.LegacyApplicant}
      />

      {formik.values.LegacyApplicant === true ? (
        <>
          <div className='grid-personal2-cont'>
            <TextBox
              width='100%'
              label='Father Name (as per Passport)'
              name='LegacyFatherName'
              value={formik.values.LegacyFatherName}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyFatherName}
              touched={formik.touched?.LegacyFatherName}
            />
            {/* <TextBox
              width='100%'
              label='Program of Study at AUD'
              name='LegacyFatherProgram'
              value={formik.values.LegacyFatherProgram}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyFatherProgram}
              touched={formik.touched?.LegacyFatherProgram}
            /> */}
            <DropDown
              width='100%'
              label='Program of Study at AUD'
              name='LegacyFatherProgram'
              type='5'
              value={formik.values.LegacyFatherProgram}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyFatherProgram}
              touched={formik.touched?.LegacyFatherProgram}
            />

            {/* <DateTime
              width='100%'
              label='Graduation Year'
              required={true}
              name='LegacyFatherGraduationYear'
              value={formik.values.LegacyFatherGraduationYear}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyFatherGraduationYear}
              touched={formik.touched?.LegacyFatherGraduationYear}
            /> */}
            <TextBox
              width='100%'
              label='Graduation Year'
              name='LegacyFatherGraduationYear'
              value={formik.values.LegacyFatherGraduationYear}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyFatherGraduationYear}
              touched={formik.touched?.LegacyFatherGraduationYear}
            />
            {/* <PhoneNumber
              width='50%'
              label='Mobile'
              name='LegacyFatherMobile'
              value={formik.values.LegacyFatherMobile}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyFatherMobile}
              touched={formik.touched?.LegacyFatherMobile}
            /> */}
          </div>
          <div className='grid-personal2-cont'>
            <TextBox
              width='100%'
              label='Mother Name (as per Passport)'
              name='LegacyMotherName'
              value={formik.values.LegacyMotherName}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyMotherName}
              touched={formik.touched?.LegacyMotherName}
            />
            {/* <TextBox
              width='100%'
              label='Program of Study at AUD'
              name='LegacyMotherProgram'
              value={formik.values.LegacyMotherProgram}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyMotherProgram}
              touched={formik.touched?.LegacyMotherProgram}
            /> */}
            <DropDown
              width='100%'
              label='Program of Study at AUD'
              name='LegacyMotherProgram'
              type='5'
              value={formik.values.LegacyMotherProgram}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyMotherProgram}
              touched={formik.touched?.LegacyMotherProgram}
            />

            {/* 
            <DateTime
              width='100%'
              label='Graduation Year'
              required={true}
              name='LegacyMotherGraduationYear'
              value={formik.values.LegacyMotherGraduationYear}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyMotherGraduationYear}
              touched={formik.touched?.LegacyMotherGraduationYear}
            /> */}
            <TextBox
              width='100%'
              label='Graduation Year'
              name='LegacyMotherGraduationYear'
              value={formik.values.LegacyMotherGraduationYear}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyMotherGraduationYear}
              touched={formik.touched?.LegacyMotherGraduationYear}
            />
            {/* <PhoneNumber
              width='50%'
              label='Mobile'
              name='LegacyMotherMobile'
              value={formik.values.LegacyMotherMobile}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.LegacyMotherMobile}
              touched={formik.touched?.LegacyMotherMobile}
            /> */}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ParentInformation;
