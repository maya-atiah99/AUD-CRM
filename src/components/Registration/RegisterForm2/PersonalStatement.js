import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextArea from "../../Inputs/TextArea";
import { useFormikContext } from "formik";

const PersonalStatement = ({isView}) => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PERSONAL STATEMENT' />
      <TextArea
        label='Personal statement (Minimum of 500 words)'
        rows='4'
        cols='3'
        required={true}
        name='PersonalStatement'
        value={formik.values.PersonalStatement}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.PersonalStatement}
        touched={formik.touched?.PersonalStatement}
        disabled={isView}
      />
    </div>
  );
};

export default PersonalStatement;
