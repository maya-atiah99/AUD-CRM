import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import Dropdown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import DateTime from "../../Inputs/DateTime";
import PhoneNumber from "../../Inputs/PhoneNumber";

const PersonalInformation = () => {
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PERSONAL INFORMATION OF THE APPLICANT' />
      <div className='grid-personal1-cont'>
        <Dropdown width='100%' label='Title' type='1' />
        <TextBox width='100%' label='First Name' required={true} />
        <TextBox width='100%' label='Middle Name' required={true} />
        <TextBox width='100%' label='Last Name' required={true} />
      </div>
      <div className='grid-personal2-cont'>
        <TextBox width='100%' label='Email' required={true} />
        <DateTime width='100%' label='Date Of Birth' required={true} />
        <Dropdown width='100%' label='Gender' required={true} type='3' />
        <Dropdown width='100%' label='Nationality' required={true} type='4' />
      </div>
      <div className='grid-personal2-cont'>
        <PhoneNumber width='50%' label='Mobile' required={true} />
        <TextBox width='100%' label='Telephone' required={true} />
      </div>
    </div>
  );
};

export default PersonalInformation;
