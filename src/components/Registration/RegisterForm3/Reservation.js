import React from "react";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import SectionTitle from "../../Texts/SectionTitle";
import { useFormikContext } from "formik";

const Reservation = ({ handleClick }) => {
  const formik = useFormikContext();
  return (
    <>
      {" "}
      <div className='form-subcontainers'>
        <SectionTitle title='RESERVATION AND ENROLLMENT AGREEMENT' />
        <div className='d-flex'>
          <SquareCheckBox
            text='I hereby acknowledge the terms and conditions of the agreement listed'
            name='TermAndConditionCheck'
            value={formik.values.TermAndConditionCheck}
            onChange={(checked) => {
              formik.setFieldValue("TermAndConditionCheck", checked);
            }}
            policy='here'
            href='https://www.aud.edu/media/q2acttic/graduate-re-agreement-terms.pdf'
            errors={formik.errors?.TermAndConditionCheck}
            touched={formik.errors?.TermAndConditionCheck}
          />
        </div>
      </div>
    </>
  );
};

export default Reservation;
