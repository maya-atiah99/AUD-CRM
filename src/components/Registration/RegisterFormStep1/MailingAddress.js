import React from "react";
import TextBox from "../../Inputs/TextBox";
import SectionTitle from "../../Texts/SectionTitle";

const MailingAddress = () => {
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='MAILING ADDRESS (TO BE USED FOR ALL ADMISSIONS CORRESPONDENCE)' />
      <TextBox width='100%' label='Address' required={true} />
      <div className='grid-mailing-cont'>
        <TextBox width='100%' label='Country' required={true} />
        <TextBox width='100%' label='City/State' required={true} />
        <TextBox width='100%' label='P.O. Box' required={true} />
        <TextBox width='100%' label='Zip Code' required={true} />
      </div>
    </div>
  );
};

export default MailingAddress;
