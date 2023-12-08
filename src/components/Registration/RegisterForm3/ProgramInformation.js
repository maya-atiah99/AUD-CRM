import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import BulletedText from "../../Texts/BulletedText";
import { useFormikContext } from "formik";
import TextComponent from "../../Texts/TextComponent";
import TextArea from "../../Inputs/TextArea";

const ProgramInformation = () => {
  return (
    <div className='form-subcontainers'>
      <TextComponent
        classfont='classfont-p'
        font='700'
        text='AUD aims to guarantee an integrated and inclusive learning experience for all students. We encourage you to indicate below if you have any health or learning challenge that requires further support.'
      />
      <div className='d-flex gap-1 flex-wrap'>
        <TextComponent
          font='800'
          classfont='classfont-p'
          text='Admitted students are required to provide the full health history information and proof of immunization. Click'
        />
        <div className='blue-link'>
          <a
            href='https://www.aud.edu/university-overview/administrative-offices/health-center/health-history-form/'
            target='_blank'
          >
            here
          </a>
        </div>
     
        <TextComponent font='800'   text='for details'  classfont="classfont-p" />
      </div>
      <SquareCheckBox text='Yes' />
      <TextArea label='Please Provide Details:'  rows='5' />
    </div>
  );
};

export default ProgramInformation;
