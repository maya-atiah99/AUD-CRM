import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextArea from "../../Inputs/TextArea";
import { useFormikContext } from "formik";

const PersonalStatement = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PERSONAL STATEMENT' />
      <TextArea
        label='The Personal Statement Is An Opportunity To Highlight Aspects Of Your Background To Support Your Application'
        rows='4'
        cols='3'
        name='personalStatement.personalStatement'
        value={formik.values.personalStatement.personalStatement}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.personalStatement?.personalStatement}
        touched={formik.touched?.personalStatement?.personalStatement}
      />
    </div>
  );
};

export default PersonalStatement;
