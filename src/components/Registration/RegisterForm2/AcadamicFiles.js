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
  const [selectedOption, setSelectedOption] = useState("");

  const [formData, setFormData] = useState([
    {
      test: "",
      dateTaken: "",
      registrationNo: "",
      totalScore: "",
    },
  ]);
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
    { label: "SAT", value: "SAT" },
  ];
  const collapsed = () => {
    return (
      <div className='d-flex flex-column title-hover'>
        <TextComponent text='Further Details' size='20px' font='800' />
      </div>
    );
  };
  const expanded = () => {
    return (
      <div className='d-flex flex-column'>
        <TextComponent
          text='Further Details'
          size='20px'
          font='800'
          hover={true}
        />
        <TextComponent text='Phone Number' size='18px' font='600' />
        <BulletedText items={details} />
      </div>
    );
  };
  const addSection = () => {
    setFormData([
      ...formData,
      {
        test: "",
        dateTaken: "",
        registrationNo: "",
        totalScore: "",
      },
    ]);
    setSections(sections + 1);
  };

  const handleFieldChange = (sectionIndex, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[sectionIndex][field] = value;
    setFormData(updatedFormData);
  };
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='form-subcontainers'>
      <SectionTitle
        title='ACADEMIC IELTS/TOEFL/EMSAT/PTE SCORE/SAT'
        isTaken={true}
      />
      <ExpandableBox title='Further Details'>
        <BulletedText items={details} />
      </ExpandableBox>
      {formData.map((section, index) => (
        <div key={index} className='form-subcontainers my-3'>
          <RadioButtonGroup
            label='Choose Test :'
            options={test}
            selectedValue={selectedOption}
            onRadioChange={handleRadioChange}
          />
          <DocumentUpload
            text='Upload The Academic Document'
            required={true}
            height='100px'
            label='Upload Document'
          />
          <div className='grid-acd-cont'>
            <DateTime
              width='100%'
              label='Date Taken'
              required={true}
              value={section.dateTaken}
              onChange={(value) => handleFieldChange(index, "dateTaken", value)}
            />
            <TextBox
              width='100%'
              label='Registration No'
              required={true}
              value={section.registrationNo}
              onChange={(value) =>
                handleFieldChange(index, "registrationNo", value)
              }
            />
            <TextBox
              width='100%'
              label='Total Score'
              required={true}
              value={section.totalScore}
              onChange={(value) =>
                handleFieldChange(index, "totalScore", value)
              }
            />
          </div>
        </div>
      ))}
      {/* "Add More" button in the last section */}
      <div className='form-subcontainers'>
        <RoundedButton
          icon='/images/plusicon.svg'
          text='Add More'
          handleOnClick={addSection}
        />
      </div>
    </div>
  );
};

export default AcadamicFiles;
