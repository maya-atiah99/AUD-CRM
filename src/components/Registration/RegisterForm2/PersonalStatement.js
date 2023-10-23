import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextArea from "../../Inputs/TextArea";

const PersonalStatement = () => {
  return (
    <div className='form-subcontainers'>
      <SectionTitle
        title='PERSONAL STATEMENT'
      />
      <TextArea
        label='The Personal Statement Is An Opportunity To Highlight Aspects Of Your Background To Support Your Application'
        rows='4'
        cols='3'
      />
    </div>
  );
};

export default PersonalStatement;
