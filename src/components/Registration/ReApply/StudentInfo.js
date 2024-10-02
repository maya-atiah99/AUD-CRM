import React, { useState } from "react";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import TextBox from "../../Inputs/TextBox";
import DropDown from "../../Inputs/DropDown";
import RoundedButton from "../../Buttons/RoundedButtons";
import TextEditor from "../../Inputs/TextEditor";
import SectionTitle from "../../Texts/SectionTitle";
import { useFormikContext } from "formik";

const options = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];
const StudentInfo = ({ isView }) => {
  const [sections, setSections] = useState(1);
  const formik = useFormikContext();
  console.log("Cdkmlkdfv", formik?.values);
  const addSection = () => {
    const newSection = {
      NameOfCollege: "",
      YearsAttended: "",
    };
    formik.setFieldValue("college", [...formik.values.college, newSection]);
    setSections(sections + 1);
  };
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='STUDENT’S UPDATED INFORMATION' />
      <div className='residenceCont'>
        <div className='required_residence'>
          <RadioButtonGroup
            options={options}
            label='Residence Visa Needed'
            required={true}
            fontWeight='500'
            name='residenceVisa'
            selectedValue={formik.values.residenceVisa}
            onRadioChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            disabled={isView}
            errors={formik.errors?.residenceVisa}
            touched={formik.touched?.residenceVisa}
          />{" "}
          {formik.errors?.residenceVisa && formik.touched?.residenceVisa ? (
            <span className='span-required'>
              {formik.errors?.residenceVisa}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className='required_residence'>
          <RadioButtonGroup
            options={options}
            label='Housing Required'
            required={true}
            fontWeight='500'
            name='housingRequired'
            selectedValue={formik.values.housingRequired}
            onRadioChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.housingRequired}
            touched={formik.touched?.housingRequired}
          />{" "}
          {formik.errors?.housingRequired && formik.touched?.housingRequired ? (
            <span className='span-required'>
              {formik.errors?.housingRequired}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      {formik.values.college &&
        formik.values.college.map((section, index) => {
          return (
            <div className='studentInfo-subCont'>
              <TextBox
                width='100%'
                label='Name of college/university attended (if applicable)'
                required={true}
                name={`college[${index}].NameOfCollege`}
                value={section.NameOfCollege}
                onChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.college?.[index]?.NameOfCollege}
                touched={formik.touched?.college?.[index]?.NameOfCollege}
                disabled={isView}
              />
              <TextBox
                width='100%'
                label='Years Attended'
                //  type=""
                required={true}
                name={`college[${index}].YearsAttended`}
                value={section.YearsAttended}
                onChange={(name, value) => {
                  formik.setFieldValue(name, value);
                }}
                errors={formik.errors?.college?.[index]?.YearsAttended}
                touched={formik.touched?.college?.[index]?.YearsAttended}
                disabled={isView}
                type='number'
              />
            </div>
          );
        })}
      {formik.values?.college?.length <= 2 && (
        <div className='form-subcontainers'>
          <RoundedButton
            icon='/images/plusicon.svg'
            text='Add More'
            handleOnClick={addSection}
          />
        </div>
      )}

      <TextEditor
        label='Please specify other involvement since your first application to AUD'
        required={true}
        name='otherInvolvement'
        value={formik.values.otherInvolvement}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.otherInvolvement}
        touched={formik.touched?.otherInvolvement}
        disabled={isView}
      />
    </div>
  );
};

export default StudentInfo;
