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
            name='academicInformation.acknowledgeTerms'
            onChange={(checked) => {
              formik.setFieldValue(
                "academicInformation.acknowledgeTerms",
                checked
              );
            }}
            errors={formik.errors?.academicInformation?.acknowledgeTerms}
            touched={formik.errors?.academicInformation?.acknowledgeTerms}
          />
          <div className='blue-link' onClick={handleClick}>
            Here
          </div>
        </div>
        <div className='d-flex'>
          <SquareCheckBox
            text='I have read the'
            name='academicInformation.undergraduateProgram'
            onChange={(checked) => {
              formik.setFieldValue(
                "academicInformation.undergraduateProgram",
                checked
              );
            }}
            errors={formik.errors?.academicInformation?.undergraduateProgram}
            touched={formik.errors?.academicInformation?.undergraduateProgram}
          />
          <div className='blue-link'>
            Undergraduate Catalog <span>online</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
