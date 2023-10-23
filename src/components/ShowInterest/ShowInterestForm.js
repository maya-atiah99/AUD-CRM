import React from "react";
import Dropdown from "../Inputs/DropDown";
import TextBox from "../Inputs/TextBox";
import PhoneNumber from "../Inputs/PhoneNumber";
import LinkButton from "../Buttons/LinkButton";
import AUDButton from "../Buttons/AUDButton";

const ShowInterestForm = () => {
  return (
    <div className='d-flex flex-column gap-2 '>
      <div className='grid-container'>
        <Dropdown width='100%' label='Title' />
        <TextBox width='100%' label='First Name' required={true} />
      </div>
      <div className='grid-container2'>
        <TextBox width='100%' label='Middle Name' required={true} />
        <TextBox width='100%' label='Last Name' required={true} />
      </div>
      <div className='grid-container2 '>
        <TextBox width='100%' label='Email' required={true} />
        <Dropdown width='100%' label='Nationality' required={true} />
      </div>
      <div className='grid-container2 '>
        <PhoneNumber width='50%' label='Mobile' required={true} />
      </div>

      <div className='grid-container2 '>
        <TextBox
          width='100%'
          label='How Did You Hear About Us?'
          required={true}
        />
        <Dropdown width='100%' label='Selected Term' required={true} />
      </div>
      <Dropdown width='50%' label='Field Of Interest' required={true} />
      <div className='d-flex justify-content-between '>
        <LinkButton
          title='CONTINUE TO APPLY'
          linkTo='/register'
          underlined={true}
          required={true}
        />

        <AUDButton text='Submit Form' required={true}  />
      </div>
    </div>
  );
};

export default ShowInterestForm;
