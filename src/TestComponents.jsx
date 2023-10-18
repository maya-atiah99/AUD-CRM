import React, { useState } from "react";
import AudAppHeader from "./components/AudAppHeader";
import RadioButtonGroup from "./components/Inputs/RadioButtonGroup";
import AUDButton from "./components/Buttons/AUDButton";
import TextBox from "./components/Inputs/TextBox";
import TextComponent from "./components/Texts/TextComponent";
import Dropdown from "./components/Inputs/DropDown";
import SectionTitle from "./components/Texts/SectionTitle";
import BulletedText from "./components/Texts/BulletedText";
import TextArea from "./components/Inputs/TextArea";
import RoundedButton from "./components/Buttons/RoundedButtons";
import DocumentUpload from "./components/Inputs/DocumentUpload";
import SquareCheckBox from "./components/Inputs/SquareCheckBox";
import PhoneNumber from "./components/Inputs/PhoneNumber";
import DateTime from "./components/Inputs/DateTime";
import LinkButton from "./components/Buttons/LinkButton";
import ModalComponent from "./components/ModalComponent";
import ExpandableBox from "./components/ExpandableBox"
const TestComponents = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedValue, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const radioOptions = [
    { label: "Undergraduate", value: "Undergraduate" },
    { label: "Graduate", value: "Graduate" },
  ];
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

 const data=[{
  email:"maya@gmail.com",
  phone:"0362548"
 }]
  const datatest = [
    { text: "Student name" },
    {
      text: "telephone number(s)",
      items: [{ text: "telephone number(s)" }, { text: "Any other education record is classified as non-directory information and can not be disclosed to any party without the student’s consent." }],
    },
    { text: "Student name" },
  ];
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="d-flex flex-column  gap-5 ">
      <AudAppHeader />

      <RadioButtonGroup
        options={radioOptions}
        selectedValue={selectedOption}
        onRadioChange={handleRadioChange}
      />

      <AUDButton text="Submit Form" />
      <AUDButton text="Done" />
      <TextComponent
        text="Please fill all the required fields (*) and click the Save & Continue button to continue to the next step."
        icon="/images/warning-sign.svg"
        opacity="0.56"
        color="#1B224C"
        font="600"
        size="20px"
      />
      <AUDButton text="Continue To The Next Step" handleOnClick={handleClick} />

      <div className=" d-flex flex-wrap w-100">
        <TextBox label="First Name" />

        <TextBox label="First Name" required={true} />
        <TextBox label="First Name" required={true} />
      </div>

      <Dropdown
        label="Select an option"
        isRequired={true}
        width="50%"
        // value={selectedValue}
        // setValue={setSelectedValue}
        // data={options}
        // placeholder="Select an option"
      />

      <SectionTitle title="BASIC INFORMATION" />

      {/* <ModalComponent  title="Sent Successfully" description="Before we continue the application we need to authenticate the email and the phone number you provided">
  <ExpandableBox type="phone" isRounded={true}  data={data[0].phone}/>
  <ExpandableBox type="email" isRounded={true}  data={data[0].email} />
</ModalComponent> */}

      <DateTime  width="50%"/>
      <PhoneNumber width="50%"/>
      <SquareCheckBox text="test" />
      <DocumentUpload text="test" />

      <RoundedButton icon="/images/plusicon.svg" text="Add More" />
      <TextArea
        cols="5"
        rows="5"
        required={true}
        label="The Personal Statement Is An Opportunity To Highlight Aspects Of Your Background To Support Your Application"
      />
      <BulletedText items={datatest} />
      <SectionTitle title="PROGRAM INFORMATION" dotted={true} />

      <AUDButton icon="/images/homeicon.svg" text="Back To Main" />

      <LinkButton title="CONTINUE TO APPLY" underlined={true} linkTo="https://fonts.google.com/specimen/Raleway" />
      <LinkButton title="CONTINUE TO APPLY" linkTo="https://fonts.google.com/specimen/Raleway" />

    </div>
  );
};

export default TestComponents;
