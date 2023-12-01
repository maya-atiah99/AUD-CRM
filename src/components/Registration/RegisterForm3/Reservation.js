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
              formik.setFieldValue(
                "TermAndConditionCheck",
                checked
              );
            }}
            errors={formik.errors?.TermAndConditionCheck}
            touched={formik.errors?.TermAndConditionCheck}
          />
          <div className='blue-link' onClick={handleClick}>
            Here
          </div>
        </div>
        <div className='d-flex'>
          <SquareCheckBox
            text='I have read the'
            name='UndergroundCatalogCheck'
            value={formik.values.UndergroundCatalogCheck}
            onChange={(checked) => {
              formik.setFieldValue(
                "UndergroundCatalogCheck",
                checked
              );
            }}
            errors={formik.errors?.UndergroundCatalogCheck}
            touched={formik.errors?.UndergroundCatalogCheck}
          />
          <div className='blue-link'>
            <a href="https://aud.edu/media/catalogs/undergraduate/index.html" target="_blank"> Undergraduate Catalog </a>
            <span>online</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
