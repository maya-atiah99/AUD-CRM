import React from "react";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import SectionTitle from "../../Texts/SectionTitle";

const Reservation = () => {
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='RESERVATION AND ENROLLMENT AGREEMENT' />
      <SquareCheckBox text='I hereby acknowledge the terms and conditions of the agreement listed' />
      <SquareCheckBox text='I have read the' />
    </div>
  );
};

export default Reservation;
