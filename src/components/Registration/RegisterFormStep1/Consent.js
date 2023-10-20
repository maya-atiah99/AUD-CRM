import React from "react";
import TextComponent from "../../Texts/TextComponent";
import SectionTitle from "../../Texts/SectionTitle";
import BulletedText from "../../Texts/BulletedText";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import LinkButton from "../../Buttons/LinkButton";
import TextBox from "../../Inputs/TextBox";

const Consent = () => {
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='CONSENT TO RELEASE EDUCATION RECORDS' />
      <TextComponent
        text='The American University in Dubai classifies Directory Information as the following :'
        size='18px'
        font='600'
      />
      <TextComponent
        text='Any other education record is classified as non-directory information and can not be disclosed to any party without the student’s consent.'
        size='18px'
        font='600'
      />
      <div className='d-flex justify-content-between'>
        <BulletedText
          items={[{ text: "Student name" }, { text: "address(es)" }]}
        />
        <BulletedText
          items={[
            { text: "telephone number(s)" },
            { text: "e-mail address(es)" },
          ]}
        />
        <BulletedText
          items={[
            { text: "birth date and place" },
            { text: "program of study" },
          ]}
        />
        <BulletedText
          items={[{ text: "dates of attendance and credentials awarded." }]}
        />
      </div>
      <div className='d-flex'>
        <SquareCheckBox />
        <LinkButton title='I AUThorize ' />
        <TextComponent
          size='18px'
          font='600'
          text='to release my education records (e.g., grades, GPA, ID, schedule, statement of fees) to the following:'
        />
      </div>
      <div className='grid-consent1-cont'>
        <TextBox width='100%' label='Father’s Name' required={true} />
        <TextBox width='100%' label='Mother’s Name' required={true} />
        <TextBox width='100%' label='Other’s Name' required={true} />
      </div>
      <div className='grid-consent2-cont'>
        <TextBox width='100%' label='Address' required={true} />
        <TextBox width='100%' label='Telephone' required={true} />
      </div>
    </div>
  );
};

export default Consent;
