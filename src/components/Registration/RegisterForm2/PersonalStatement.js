import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextArea from "../../Inputs/TextArea";
import { useFormikContext } from "formik";
import TextEditor from "../../Inputs/TextEditor";

const PersonalStatement = ({ isView }) => {
  const formik = useFormikContext();
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PERSONAL STATEMENT' />
      {/* <TextArea
        label='Personal statement (Minimum of 500 words)'
        rows='10'
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
        resize={true}
      /> */}

      <TextEditor
        label='Personal statement (Minimum of 500 words)'
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
