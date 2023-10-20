import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextBox from "../../Inputs/TextBox";
import DropDown from "../../Inputs/DropDown";
import PhoneNumber from "../../Inputs/PhoneNumber";

const ParentInformation = () => {
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PARENT OR GUARDIAN INFORMATION' />
      <div className='grid-personal1-cont'>
        <DropDown width='100%' label='Guardian Relation' />
        <TextBox width='100%' label='Guardian Name' />
        <PhoneNumber width='50%' label='Mobile' />
        <TextBox width='100%' label='Email Address' />
      </div>
      <div className='grid-personal1-cont'>
        <DropDown width='100%' label='Guardian Relation' />
        <TextBox width='100%' label='Guardian Name' />
        <PhoneNumber width='50%' label='Mobile' />
        <TextBox width='100%' label='Email Address' />
      </div>
    </div>
  );
};

export default ParentInformation;
