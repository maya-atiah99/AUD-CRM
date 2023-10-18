import React, { useState } from "react";
import RadioButtonGroup from "./components/RadioButtonGroup";
import AudButton from "./components/AUDButton";
import TextBox from "./components/TextBox";
import { Dropdown } from "bootstrap";
import DropDown from "./components/DropDown";
import SectionTitle from "./components/SectionTitle";
import ModalComponent from "./components/ModalComponent";
import ExpandableBox from "./components/ExpandableBox";
import DateTime from "./components/DateTime";
import PhoneNumber from "./components/PhoneNumber";
import SquareCheckBox from "./components/SquareCheckBox";
import DocumentUpload from "./components/DocumentUpload";
import RoundedButton from "./components/RoundedButtons";
import TextArea from "./components/TextArea";
import BulletedText from "./components/BulletedText";
import TextComponent from "./components/TextComponent";
import StepButton from "./components/StepButton";

const TestComponents = () => {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [selectedValue, setSelectedValue] = useState("");
  const [ isOpen,setIsOpen]=useState(false)
  const radioOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];
  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const data=[{
email:"maya@gmail.com",
phone:"0325065980"
  }]

  const testData = [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
  ];
  
  const datatest = [
    { text: 'Item 1' },
    {
      text: 'Item 2',
      items: [
        { text: 'Subitem 2.1' },
        { text: 'Subitem 2.2' },
      ],
    },
    { text: 'Item 3' },
  ];
  return (
    <div className="d-flex flex-column justify-content-center mt-5 p-5 gap-5">
      <RadioButtonGroup
        options={radioOptions}
        selectedValue={selectedOption}
        onRadioChange={handleRadioChange}
      />

      <AudButton text="Submit Form" />
      <AudButton text="Done" />
      <AudButton text="Continue To The Next Step" />

      <div className=" d-flex flex-wrap w-100">
        <TextBox label="First Name" required="true" />

        <TextBox label="First Name" required="true" />
        <TextBox label="First Name" required="true" />
      </div>

      <DropDown
        label="Select an option"
        isRequired={true}
        // value={selectedValue}
        // setValue={setSelectedValue}
        // data={options}
        // placeholder="Select an option"
       
      />

      <SectionTitle title="BASIC INFORMATION"/>

{/* <ModalComponent  title="Sent Successfully" description="Before we continue the application we need to authenticate the email and the phone number you provided">
  <ExpandableBox type="phone" isRounded={true}  data={data[0].phone}/>
  <ExpandableBox type="email" isRounded={true}  data={data[0].email} />
</ModalComponent> */}

<DateTime/>
<PhoneNumber/>
<SquareCheckBox text="test"/>
<DocumentUpload text="test" />

<RoundedButton icon='/images/plusicon.svg' text="Add More"/>
<TextArea cols="12" rows="5" required={true} label="The Personal Statement Is An Opportunity To Highlight Aspects Of Your Background To Support Your Application" />
<BulletedText items={datatest} />
<SectionTitle title="hjbjhbjb" dotted={true}/>

<AudButton icon='/images/homeicon.svg' text="Back To Main" />

<TextComponent text="Please fill all the required fields (*) and click the Save & Continue button to continue to the next step."
icon='/images/warning-sign.svg'
opacity="0.56"
color="#1B224C"
font="600"
size="20px"
/>
{/* <StepButton/> */}
    </div>
  );
};

export default TestComponents;
