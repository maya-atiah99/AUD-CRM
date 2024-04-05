import React from "react";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import { useFormikContext } from "formik";
import TextComponent from "../../Texts/TextComponent";
import TextArea from "../../Inputs/TextArea";
import SectionTitle from "../../Texts/SectionTitle";

const ProgramInformation = ({ isView, reApply }) => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      {reApply && <SectionTitle title='HEALTH SECTION' />}

      <TextComponent
        classfont='classfont-p'
        font='700'
        text='AUD aims to guarantee an integrated and inclusive learning experience for all students. We encourage you to indicate below if you have any health or learning challenge that requires further support.'
      />
      <div className='d-flex gap-1 flex-wrap'>
        <p className='classfont-p' style={{ fontWeight: "800" }}>
          Admitted students are required to provide the full health history
          information and proof of immunization. Click
          <span className='blue-link'>
            <a
              href='https://www.aud.edu/university-overview/administrative-offices/health-center/health-history-form/'
              target='_blank'
            >
              here
            </a>
          </span>
          <span> </span>
          for details
        </p>
      </div>
      <SquareCheckBox
        text='Yes'
        name='HealthChalenges'
        value={formik.values.HealthChalenges}
        onChange={(checked) => {
          formik.setFieldValue("HealthChalenges", checked);
        }}
        errors={formik.errors?.HealthChalenges}
        touched={formik.errors?.HealthChalenges}
        disabled={isView}
      />
      {formik.values.HealthChalenges == true && (
        <TextArea
          label='Please Provide Details:'
          rows='5'
          name='HealthComments'
          value={formik.values.HealthComments}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.HealthComments}
          touched={formik.touched?.HealthComments}
          disabled={isView}
        />
      )}
    </div>
  );
};

export default ProgramInformation;
