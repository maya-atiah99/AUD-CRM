import React from "react";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import DropDown from "../../Inputs/DropDown";
import SectionTitle from "../../Texts/SectionTitle";
import DateTime from "../../Inputs/DateTime";
import DocumentUpload from "../../Inputs/DocumentUpload"
import TextArea from "../../Inputs/TextArea"
const AcadamicInformation = () => {
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='ACADEMIC INFORMATION' />
      <div className='grid-academic-cont'>
        <DropDown
          width='100%'
          label='Country Your Current University'
          required={true}
        />
        <DropDown width='100%' label='School/University Name' required={true} />
        <DropDown
          width='100%'
          label='High School Diploma / Bachelor Diploma Type'
          required={true}
        />
        <DateTime width='100%' label='Graduation Year' required={true} />
      </div>
      <div className="grid-academic2-cont">
        <TextArea
         label="Please List Any Advanced Courses Such As: ‘A’ Levels, Ap, Clep, Ib Diploma."
         rows="5"
         cols="3"
         
         />
        <DocumentUpload 
        text="Upload The Academic Document"
        required={true}
        
        />
      </div>
    </div>
  );
};

export default AcadamicInformation;
