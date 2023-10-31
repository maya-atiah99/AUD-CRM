import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextBox from "../../Inputs/TextBox";
import DropDown from "../../Inputs/DropDown";
import PhoneNumber from "../../Inputs/PhoneNumber";
import { useFormikContext } from "formik";

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
          name='parentOfGuardian.gurdianRelation1'
          value={formik.values.parentOfGuardian.gurdianRelation1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.parentOfGuardian?.gurdianRelation1}
          touched={formik.touched?.parentOfGuardian?.gurdianRelation1}
        />
        <TextBox
          width='100%'
          label='Guardian Name'
          name='parentOfGuardian.guardianName1'
          value={formik.values.parentOfGuardian.guardianName1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.parentOfGuardian?.guardianName1}
          touched={formik.touched?.parentOfGuardian?.guardianName1}
        />
        <PhoneNumber
          width='50%'
          label='Mobile'
          name='parentOfGuardian.mobile1'
          value={formik.values.parentOfGuardian.mobile1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.parentOfGuardian?.mobile1}
          touched={formik.touched?.parentOfGuardian?.mobile1}
        />
        <TextBox
          width='100%'
          label='Email Address'
          name='parentOfGuardian.emailAddress1'
          value={formik.values.parentOfGuardian.emailAddress1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.parentOfGuardian?.emailAddress1}
          touched={formik.touched?.parentOfGuardian?.emailAddress1}
        />
      </div>
      <div className='grid-personal1-cont'>
        <DropDown
          width='100%'
          label='Guardian Relation'
          type='6'
          name='parentOfGuardian.gurdianRelation2'
          value={formik.values.parentOfGuardian.gurdianRelation2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.parentOfGuardian?.gurdianRelation2}
          touched={formik.touched?.parentOfGuardian?.gurdianRelation2}
        />
        <TextBox
          width='100%'
          label='Guardian Name'
          name='parentOfGuardian.guardianName2'
          value={formik.values.parentOfGuardian.guardianName2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.parentOfGuardian?.guardianName2}
          touched={formik.touched?.parentOfGuardian?.guardianName2}
        />
        <PhoneNumber
          width='50%'
          label='Mobile'
          name='parentOfGuardian.mobile2'
          value={formik.values.parentOfGuardian.mobile2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.parentOfGuardian?.mobile2}
          touched={formik.touched?.parentOfGuardian?.mobile2}
        />
        <TextBox
          width='100%'
          label='Email Address'
          name='parentOfGuardian.emailAddress2'
          value={formik.values.parentOfGuardian.emailAddress2}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.parentOfGuardian?.emailAddress2}
          touched={formik.touched?.parentOfGuardian?.emailAddress2}
        />
      </div>
    </div>
  );
};

export default ParentInformation;
