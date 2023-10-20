import React from "react";
import TextComponent from "../Texts/TextComponent";
import SectionTitle from "../Texts/SectionTitle";
import ShowInterestForm from "./ShowInterestForm";

const ShowInterestFormContainer = () => {
  return (
    <div className='show-interest-form'>
      <div>
        <TextComponent
          text='WELCOME TO THE ONLINE ADMISSIONS PORTAL '
          font='800'
          size='24px'
        />
        <TextComponent
          text='AT THE AMERICAN UNIVERSITY IN DUBAI!'
          font='800'
          size='24px'
        />
      </div>

      <SectionTitle title='BASIC INFORMATION' />
      <ShowInterestForm />
    </div>
  );
};

export default ShowInterestFormContainer;
