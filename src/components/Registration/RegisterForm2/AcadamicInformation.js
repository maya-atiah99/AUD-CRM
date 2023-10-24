import React from "react";
import DropDown from "../../Inputs/DropDown";
import SectionTitle from "../../Texts/SectionTitle";
import DateTime from "../../Inputs/DateTime";
import DocumentUpload from "../../Inputs/DocumentUpload";
import TextArea from "../../Inputs/TextArea";
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
        <DropDown width='100%' label='High School Diploma' required={true} />
        <DateTime width='100%' label='Graduation Year' required={true} />
      </div>
      <div className='grid-academic2-cont'>
        <TextArea
          label='Please List Any Advanced Courses Such As: ‘A’ Levels, Ap, Clep, Ib Diploma.'
          rows='4'
          cols='3'
        />
        <DocumentUpload
          text='Upload The Academic Document'
          required={true}
          height='100px'
          label='Upload Document'
        />
      </div>
      <TextArea
        label='If You Are Not Currently Enrolled In A School, Please Describe Your Activities Since You Last Attended.'
        rows='4'
        cols='3'
      />
    </div>
  );
};

export default AcadamicInformation;
