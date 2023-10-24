import React, { useState } from "react";
import SectionTitle from "../../Texts/SectionTitle";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import DropDown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";

const ProgramInformation = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const startYourApplicationOptions = [
    { label: "Undergraduate", value: "Undergraduate" },
    { label: "Graduate", value: "Graduate" },
    { label: "Visiting", value: "Visiting" },
  ];
  const ApplyingAsOptions = [
    { label: "Visiting Student", value: "Visiting Student" },
    { label: "Exchange Student", value: "Exchange Student" },
    { label: "Clinton Scholar", value: "Clinton Scholar" },
  ];

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PROGRAM INFORMATION' dotted={true} />
      <RadioButtonGroup
        options={startYourApplicationOptions}
        selectedValue={selectedOption}
        onRadioChange={handleRadioChange}
        label='Start Your Application'
        required={true}
      />
      <RadioButtonGroup
        options={ApplyingAsOptions}
        selectedValue={selectedOption}
        onRadioChange={handleRadioChange}
        label='Applying As'
        required={true}
      />
      <div className='grid-programInfo-cont'>
        <DropDown width='100%' label='Program Of Interest' required={true} />
        <TextBox
          width='100%'
          label='Your Current Place Of Study (Transfer Students)'
          required={true}
        />
      </div>
    </div>
  );
};

export default ProgramInformation;
