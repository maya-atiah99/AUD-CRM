import React from "react";
import TextBox from "../../Inputs/TextBox";
import SectionTitle from "../../Texts/SectionTitle";
import { useFormikContext } from "formik";

const MailingAddress = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='MAILING ADDRESS (TO BE USED FOR ALL ADMISSIONS CORRESPONDENCE)' />
      <TextBox
        width='100%'
        label='Address'
        required={true}
        name='mailingAddress.address'
        value={formik.values.mailingAddress.address}
        onChange={(name, value) => {
         formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.mailingAddress?.address}
        touched={formik.touched?.mailingAddress?.address}
      />
      <div className='grid-mailing-cont'>
        <TextBox
          width='100%'
          label='Country'
          required={true}
          name='mailingAddress.country'
          value={formik.values.mailingAddress.country}
          onChange={(name, value) => {
           formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.mailingAddress?.country}
          touched={formik.touched?.mailingAddress?.country}
        />
        <TextBox
          width='100%'
          label='City/State'
          required={true}
          name='mailingAddress.city'
          value={formik.values.mailingAddress.city}
          onChange={(name, value) => {
           formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.mailingAddress?.city}
          touched={formik.touched?.mailingAddress?.city}
        />
        <TextBox
          width='100%'
          label='P.O. Box'
          required={true}
          name='mailingAddress.POBox'
          value={formik.values.mailingAddress.POBox}
          onChange={(name, value) => {
           formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.mailingAddress?.POBox}
          touched={formik.touched?.mailingAddress?.POBox}
        />
        <TextBox
          width='100%'
          label='Zip Code'
          required={true}
          name='mailingAddress.zipCode'
          value={formik.values.mailingAddress.zipCode}
          onChange={(name, value) => {
           formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.mailingAddress?.zipCode}
          touched={formik.touched?.mailingAddress?.zipCode}
        />
      </div>
    </div>
  );
};

export default MailingAddress;
