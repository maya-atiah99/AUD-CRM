import React from "react";
import TextBox from "../../Inputs/TextBox";
import SectionTitle from "../../Texts/SectionTitle";
import { useFormikContext } from "formik";
import Dropdown from "../../../components/Inputs/DropDown";
const MailingAddress = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='MAILING ADDRESS (TO BE USED FOR ALL ADMISSIONS CORRESPONDENCE)' />
      <TextBox
        width='100%'
        label='Address'
        required={true}
        name='address'
        value={formik.values.address}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.address}
        touched={formik.touched?.address}
      />
      <div className='grid-mailing-cont'>
        <Dropdown
          width='100%'
          label='Country'
          required={true}
          type='9'
          name='country'
          value={formik.values.country}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.country}
          touched={formik.touched?.country}
        />
        <Dropdown
          width='100%'
          label='City/State'
          type='10'
          parent={formik.values.country}
          required={true}
          name='cityState'
          value={formik.values.cityState}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.cityState}
          touched={formik.touched?.cityState}
        />
        {/* <TextBox
          width='100%'
          label='City/State'
          required={true}
          name='cityState'
          value={formik.values.cityState}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.cityState}
          touched={formik.touched?.cityState}
        /> */}
        <TextBox
          width='100%'
          label='P.O. Box'
          required={true}
          name='pobox'
          value={formik.values.pobox}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.pobox}
          touched={formik.touched?.pobox}
        />
        <TextBox
          width='100%'
          label='Zip Code'
          required={true}
          name='zipCode'
          value={formik.values.zipCode}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.zipCode}
          touched={formik.touched?.zipCode}
        />
        
      </div>
    </div>
  );
};

export default MailingAddress;
