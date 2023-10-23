import React from "react";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import SectionTitle from "../../Texts/SectionTitle";


const Reservation = ({handleClick}) => {

  return (
    <>
      {" "}
      <div className='form-subcontainers'>
        <SectionTitle title='RESERVATION AND ENROLLMENT AGREEMENT' />
        <div className="d-flex">
          <SquareCheckBox text='I hereby acknowledge the terms and conditions of the agreement listed' />
          <div className="blue-link" onClick={handleClick}>Here</div>
        </div>
        <div className="d-flex">
        <SquareCheckBox text='I have read the' />
        <div className="blue-link">Undergraduate Catalog <span>online</span></div>
        </div>
      </div>
    
    </>
  );
};

export default Reservation;
