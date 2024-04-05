import React, { useState } from "react";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import TextBox from "../../Inputs/TextBox";
import DropDown from "../../Inputs/DropDown";
import RoundedButton from "../../Buttons/RoundedButtons";
import TextEditor from "../../Inputs/TextEditor";
import SectionTitle from "../../Texts/SectionTitle";
import { useFormikContext } from "formik";

const options = [
  { label: "Yes", value: "0" },
  { label: "No", value: "1" },
];
const StudentInfo = ({ isView }) => {
  const [sections, setSections] = useState(1);
  const formik = useFormikContext();

  const addSection = () => {
    const newSection = {
      NameOfCollege: "",
      YearsAttended: "",
    };
    formik.setFieldValue("collage", [...formik.values.collage, newSection]);
    setSections(sections + 1);
  };
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='STUDENT’S UPDATED INFORMATION' />
      <div className="d-flex gap-5 align-items-center">
        <RadioButtonGroup
          options={options}
          label='Residence Visa Needed'
          required={true}
          fontWeight="500"
          name='ResidenceVisa'
          selectedValue={formik.values.ResidenceVisa}
          onRadioChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          disabled={isView}
          errors={formik.errors?.ResidenceVisa}
          touched={formik.touched?.ResidenceVisa}
        />
        <RadioButtonGroup
          options={options}
          label='Housing Required'
          required={true}
          fontWeight="500"

          name='HousingRequired'
          selectedValue={formik.values.HousingRequired}
          onRadioChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.HousingRequired}
          touched={formik.touched?.HousingRequired}
        />
      </div>
      {formik.values.collage &&
        formik.values.collage.map((section, index) => {
          return (
            <div className="studentInfo-subCont">
              <TextBox
                width='100%'
                label='Name of college/university attended (if applicable)'
                required={true}
                name={`collage[${index}].NameOfCollege`}
                value={section.NameOfCollege}
                onChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.collage?.[index]?.NameOfCollege}
                touched={formik.touched?.collage?.[index]?.NameOfCollege}
                disabled={isView}
              />
              <DropDown
                width='100%'
                label='Years Attended'
                //  type=""
                required={true}
                name='YearsAttended'
                value={formik.values.YearsAttended}
                onChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.YearsAttended}
                touched={formik.touched?.YearsAttended}
                disabled={isView}
              />{" "}
            </div>
          );
        })}
      <div className='form-subcontainers'>
        <RoundedButton
          icon='/images/plusicon.svg'
          text='Add More'
          handleOnClick={addSection}
        />
      </div>
      <TextEditor
        label='Please specify other involvement since your first application to AUD'
        required={true}
        name='Involvement'
        value={formik.values.Involvement}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.Involvement}
        touched={formik.touched?.Involvement}
        disabled={isView}
      />
    </div>
  );
};

export default StudentInfo;
