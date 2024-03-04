import React from "react";
import TextBox from "../../Inputs/TextBox";
import SectionTitle from "../../Texts/SectionTitle";
import { useFormikContext } from "formik";
import Dropdown from "../../../components/Inputs/DropDown";
const MailingAddress = ({ isView }) => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle
        title={
          formik.values?.ApplicationStart === 2
            ? "PERSONAL ADDRESS (TO BE USED FOR ALL ADMISSIONS CORRESPONDENCE)"
            : "MAILING ADDRESS (TO BE USED FOR ALL ADMISSIONS CORRESPONDENCE)"
        }
      />
      <TextBox
        width='100%'
        label='Address'
        required={true}
        name='Address1'
        value={formik.values.Address1}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.Address1}
        touched={formik.touched?.Address1}
        disabled={isView}
      />
      <div className='grid-mailing-cont'>
        <Dropdown
          width='100%'
          label='Country'
          required={true}
          type='9'
          name='Country'
          value={formik.values.Country}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
            formik.setFieldValue("CityState", "");
          }}
          errors={formik.errors?.Country}
          touched={formik.touched?.Country}
          disabled={isView}
        />
        <Dropdown
          width='100%'
          label='City/State'
          type='10'
          parent={formik.values.Country}
          required={true}
          name='CityState'
          value={formik.values.CityState}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.CityState}
          touched={formik.touched?.CityState}
          disabled={isView}
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
          name='Pobox'
          value={formik.values.Pobox}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.Pobox}
          touched={formik.touched?.Pobox}
          disabled={isView}
        />
        <TextBox
          width='100%'
          label='Zip Code'
          name='ZipCode'
          value={formik.values.ZipCode}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.ZipCode}
          touched={formik.touched?.ZipCode}
          disabled={isView}
        />
      </div>
    </div>
  );
};

export default MailingAddress;
