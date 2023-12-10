import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import BulletedText from "../../Texts/BulletedText";
import { useFormikContext } from "formik";
import TextComponent from "../../Texts/TextComponent";
import TextArea from "../../Inputs/TextArea";

const ProgramInformation = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
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
        name='FullHealthCheck'
        value={formik.values.FullHealthCheck}
        onChange={(checked) => {
          formik.setFieldValue("FullHealthCheck", checked);
        }}
        errors={formik.errors?.FullHealthCheck}
        touched={formik.errors?.FullHealthCheck}
      />
      <TextArea
        label='Please Provide Details:'
        rows='5'
        name='Details'
        value={formik.values.Details}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.Details}
        touched={formik.touched?.Details}
      />
    </div>
  );
};

export default ProgramInformation;
