import React, { useState } from "react";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import SectionTitle from "../../Texts/SectionTitle";
import ExpandableBox from "../../ExpandableBox";
import BulletedText from "../../Texts/BulletedText";
import DocumentUpload from "../../Inputs/DocumentUpload";
import TextBox from "../../Inputs/TextBox";
import DateTime from "../../Inputs/DateTime";
import RoundedButton from "../../Buttons/RoundedButtons";
import { useFormikContext } from "formik";

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

const AcadamicFiles = () => {
  const [sections, setSections] = useState(1);
  const formik = useFormikContext();

  const addSection = () => {
    const newSection = {
      chosenTest: "",
      academicDocument: "",
      dateTaken: "",
      registrationNumber: "",
      totalScore: "",
    };
    formik.setFieldValue("academicFiles", [
      ...formik.values.academicFiles,
      newSection,
    ]);
    setSections(sections + 1);
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
      {formik.values.academicFiles.map((section, index) => (
        <div key={index} className='form-subcontainers my-3'>
          <RadioButtonGroup
            label='Choose Test :'
            options={test}
            name={`academicFiles[${index}].chosenTest`}
            selectedValue={section.chosenTest}
            onRadioChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.academicFiles?.[index]?.chosenTest}
            touched={formik.touched?.academicFiles?.[index]?.chosenTest}
          />
          <DocumentUpload
            text='Upload The Academic Document'
            required={true}
            height='100px'
            label='Upload Document'
            name={`academicFiles[${index}].academicDocument`}
            value={section.academicDocument}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.academicFiles?.[index]?.academicDocument}
            touched={formik.touched?.academicFiles?.[index]?.academicDocument}
          />
          <div className='grid-acd-cont'>
            <DateTime
              width='100%'
              label='Date Taken'
              required={true}
              name={`academicFiles[${index}].dateTaken`}
              value={section.dateTaken}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.academicFiles?.[index]?.dateTaken}
              touched={formik.touched?.academicFiles?.[index]?.dateTaken}
            />
            <TextBox
              width='100%'
              label='Registration No'
              required={true}
              name={`academicFiles[${index}].registrationNumber`}
              value={section.registrationNumber}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.academicFiles?.[index]?.registrationNumber}
              touched={formik.touched?.academicFiles?.[index]?.registrationNumber}
            />
            <TextBox
              width='100%'
              label='Total Score'
              required={true}
              name={`academicFiles[${index}].totalScore`}
              value={section.totalScore}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.academicFiles?.[index]?.totalScore}
              touched={formik.touched?.academicFiles?.[index]?.totalScore}
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
