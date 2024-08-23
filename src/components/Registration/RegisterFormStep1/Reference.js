import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextBox from "../../Inputs/TextBox";
import { useFormikContext } from "formik";
import DropDown from "../../Inputs/DropDown";
import SquareCheckBox from "../../Inputs/SquareCheckBox";

const Reference = ({ isView, applingAs }) => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='Reference' />
      <div className='grid-personal1-cont'>
        <DropDown
          type='1'
          width='100%'
          label='Title'
          name='ReferanceTitle'
          required={applingAs == 8 ? true : false}
          value={formik.values.ReferanceTitle}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.ReferanceTitle}
          touched={formik.touched?.ReferanceTitle}
          disabled={isView}
        />
        <TextBox
          width='100%'
          label='Name'
          required={applingAs == 8 ? true : false}
          name='ReferanceName'
          value={formik.values.ReferanceName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.ReferanceName}
          touched={formik.touched?.ReferanceName}
          disabled={isView}
        />
        <TextBox
          width='100%'
          label='Email'
          required={applingAs == 8 ? true : false}
          name='ReferanceEmail'
          value={formik.values.ReferanceEmail}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.ReferanceEmail}
          touched={formik.touched?.ReferanceEmail}
          disabled={isView}
        />
        <TextBox
          width='100%'
          label='How do you know the reference?'
          name='KnowTheReferance'
          value={formik.values.KnowTheReferance}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.KnowTheReferance}
          touched={formik.touched?.KnowTheReferance}
          disabled={isView}
        />
      </div>
      <SquareCheckBox
        text='A request of "Letter of Recommendation" will be sent via email to the reference you provided us'
        name='SendTheLetterRecomendation'
        value={formik.values.SendTheLetterRecomendation}
        onChange={(checked) => {
          formik.setFieldValue("SendTheLetterRecomendation", checked);
        }}
        errors={formik.errors?.SendTheLetterRecomendation}
        touched={formik.errors?.SendTheLetterRecomendation}
        disabled={isView}
      />
      <SquareCheckBox
        text='I have read and understood the above information'
        name='ReadAndUnderstand'
        value={formik.values.ReadAndUnderstand}
        onChange={(checked) => {
          formik.setFieldValue("ReadAndUnderstand", checked);
        }}
        errors={formik.errors?.ReadAndUnderstand}
        touched={formik.errors?.ReadAndUnderstand}
        disabled={isView}
      />
    </div>
  );
};

export default Reference;
