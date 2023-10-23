import React, { useState } from "react";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import DropDown from "../../Inputs/DropDown";
import SectionTitle from "../../Texts/SectionTitle";
import ExpandableBox from "../../ExpandableBox";
import TextComponent from "../../Texts/TextComponent";
import BulletedText from "../../Texts/BulletedText";
import DocumentUpload from "../../Inputs/DocumentUpload";
import TextBox from "../../Inputs/TextBox";
import DateTime from "../../Inputs/DateTime";
import RoundedButton from "../../Buttons/RoundedButtons";

const AcadamicFiles = () => {
  const [sections, setSections] = useState(1);
  const details = [
    {
      text: "Students who are native speakers and have obtained a secondary school diploma in the UK, US, Canada, Ireland, New Zealand or Australia;",
    },
    {
      text: "Students with an accredited international American high-school diploma (with at least 2 years of study in this system) or British international GCE/ GCSE (minimum of C on English Language)/A-levels;",
    },
    {
      text: "Students with the International Baccalaureate (IB) diploma (with English as medium of instruction and minimum score of 4 for English), or European Baccalaureate with English as first or second language (minimum score of 6 for English); or",
    },
  ];
  const test = [
    { label: "IELTS", value: "IELTS" },
    { label: "TOEFL", value: "TOEFL" },
    { label: "EMSAT", value: "EMSAT" },
    { label: "PTE", value: "PTE" },
    { label: "SAT", value: "EMSAT" },
  ];
  const collapsed = () => {
    return (
      <div className='d-flex flex-column'>
        <TextComponent text='Further Details' size='20px' font='800' />
      </div>
    );
  };
  const expanded = () => {
    return (
      <div className='d-flex flex-column'>
        <TextComponent text='Further Details' size='20px' font='800' />
        <TextComponent text='Phone Number' size='18px' font='600' />
        <BulletedText items={details} />
      </div>
    );
  };
  const addSection = () => {
    setSections(sections + 1);
  };
  return (
    <div className='form-subcontainers'>
      <SectionTitle
        title='ACADEMIC IELTS/TOEFL/EMSAT/PTE SCORE/SAT'
        isTaken={true}
      />
      <ExpandableBox
        // isRounded={true}
        collapsed={collapsed()}
        expanded={expanded()}
      />
      <div className='form-subcontainers'>
        <RadioButtonGroup label='Choose Test :' options={test} />
        <DocumentUpload
          text='Upload The Academic Document'
          required={true}
          height='100px'
          label='Upload Document'
        />
        <div className='grid-acd-cont'>
          <DateTime width='100%' label='Date Taken' required={true} />
          <TextBox width='100%' label='Registration No' required={true} />
          <TextBox width='100%' label='Total Score' required={true} />
        </div>
        <RoundedButton
          icon='/images/plusicon.svg'
          text='Add More'
          handleOnClick={addSection}
        />
      </div>

      {[...Array(sections)].map((_, index) => (
        <div key={index} className='form-subcontainers'>
          <RadioButtonGroup label='Choose Test :' options={test} />
          <DocumentUpload
            text='Upload The Academic Document'
            required={true}
            height='100px'
            label='Upload Document'
          />
          <div className='grid-acd-cont'>
            <DateTime width='100%' label='Date Taken' required={true} />
            <TextBox width='100%' label='Registration No' required={true} />
            <TextBox width='100%' label='Total Score' required={true} />
          </div>
          <RoundedButton
            icon='/images/plusicon.svg'
            text='Add More'
            handleOnClick={addSection}
          />
        </div>
      ))}
    </div>
  );
};

export default AcadamicFiles;
