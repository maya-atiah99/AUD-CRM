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
  { label: "IELTS", value: "0" },
  { label: "TOEFL", value: "1" },
  { label: "EMSAT", value: "2" },
  { label: "PTE", value: "3" },
  { label: "SAT", value: "4" },
];

const AcadamicFiles = ({ isView }) => {
  const [sections, setSections] = useState(1);
  const formik = useFormikContext();

  const addSection = () => {
    const newSection = {
      testType: "",
      academicDocument: "",
      dateTaken: "",
      registrationNumber: "",
      totalScore: "",
    };
    formik.setFieldValue("applicantFiles", [
      ...formik.values.applicantFiles,
      newSection,
    ]);
    setSections(sections + 1);
  };

  const removeSection = (index) => {
    if (formik.values.applicantFiles.length === 1) {
      formik.setFieldValue("applicantFiles", [
        {
          testType: "",
          academicDocument: "",
          dateTaken: "",
          registrationNumber: "",
          totalScore: "",
        },
      ]);
    } else {
      const newFiles = formik.values.applicantFiles.filter(
        (_, i) => i !== index
      );
      formik.setFieldValue("applicantFiles", newFiles);
      setSections(sections - 1);
    }
  };

  const isAnyFieldFilled = (section) => {
    return Object.values(section).some((value) => value !== "");
  };

  return (
    <div className='form-subcontainers academic-container'>
      <SectionTitle
        title='ACADEMIC IELTS/TOEFL/EMSAT/PTE SCORE/SAT'
      />
      <ExpandableBox title='Further Details' backgroundColor={true}>
        <BulletedText items={details} />
      </ExpandableBox>
      {formik.values.applicantFiles &&
        formik.values.applicantFiles.map((section, index) => (
          <div key={index} className='form-subcontainers'>
            <div className='radioButton_removeIcon_cont'>
              <RadioButtonGroup
                label='Choose Test :'
                options={test}
                name={`applicantFiles[${index}].testType`}
                selectedValue={section.testType}
                onRadioChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.applicantFiles?.[index]?.testType}
                touched={formik.touched?.applicantFiles?.[index]?.testType}
              />
              {(formik.values.applicantFiles.length > 1 || isAnyFieldFilled(section)) && (
                <div className='remove_text' onClick={() => removeSection(index)}>
                  <img
                    src='/images/removeIcon.svg'
                    alt='removeIcon'
                    style={{ width: "1rem", cursor: "pointer" }}
                  />
                  <h6>{formik.values.applicantFiles.length === 1 ? "Clear" : "Remove"}</h6>
                </div>
              )}
            </div>

            {formik.errors?.applicantFiles?.[index]?.testType &&
            formik.touched?.applicantFiles?.[index]?.testType ? (
              <span className='span-required'>Choose Test is required</span>
            ) : (
              ""
            )}
            <DocumentUpload
              text='Upload The Academic Document'
              required={true}
              height='100px'
              imageHeight='50px'
              size='50'
              label='Upload Document'
              name={`applicantFiles[${index}].academicDocument`}
              value={section.academicDocument}
              filName={section.academicDocument}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.applicantFiles?.[index]?.academicDocument}
              touched={formik.touched?.applicantFiles?.[index]?.academicDocument}
              disabled={isView}
            />

            <div className='grid-acd-cont'>
              <DateTime
                width='100%'
                label='Date Taken'
                required={true}
                name={`applicantFiles[${index}].dateTaken`}
                value={section.dateTaken}
                onChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.applicantFiles?.[index]?.dateTaken}
                touched={formik.touched?.applicantFiles?.[index]?.dateTaken}
                disabled={isView}
              />
              <TextBox
                width='100%'
                label='Registration No'
                required={true}
                name={`applicantFiles[${index}].registrationNumber`}
                value={section.registrationNumber}
                onChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.applicantFiles?.[index]?.registrationNumber}
                touched={formik.touched?.applicantFiles?.[index]?.registrationNumber}
                disabled={isView}
              />
              <TextBox
                width='100%'
                label='Total Score'
                required={true}
                name={`applicantFiles[${index}].totalScore`}
                value={section.totalScore}
                onChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.applicantFiles?.[index]?.totalScore}
                touched={formik.touched?.applicantFiles?.[index]?.totalScore}
                disabled={isView}
              />
            </div>
          </div>
        ))}

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
