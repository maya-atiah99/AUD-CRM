import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import DropDown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import { ErrorMessage, useFormikContext } from "formik";

const ProgramInformation = () => {
  const formik = useFormikContext();

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

  const onRadioChange = (name, value) => {
    formik.setFieldValue(name, value);
  };

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PROGRAM INFORMATION' dotted={true} />
      <RadioButtonGroup
        options={startYourApplicationOptions}
        name='programInformation.startYourApp'
        selectedValue={formik.values.programInformation.startYourApp}
        label='Start Your Application'
        required={true}
        onRadioChange={onRadioChange}
      />
      {formik.errors?.programInformation?.startYourApp &&
      formik.touched?.programInformation?.startYourApp ? (
        <span className="span-required">Start Your Application is required</span>
      ) : (
        ""
      )}

      <RadioButtonGroup
        options={ApplyingAsOptions}
        name='programInformation.applyingAs'
        selectedValue={formik.values.programInformation.applyingAs}
        label='Applying As'
        required={true}
        onRadioChange={onRadioChange}
      />
      {formik.errors?.programInformation?.applyingAs &&
      formik.touched?.programInformation?.applyingAs ? (
        <span className="span-required">Applying as is required</span>
      ) : (
        ""
      )}
      <div className='grid-programInfo-cont'>
        <DropDown
          width='100%'
          label='Program Of Interest'
          required={true}
          name='programInformation.programOfInterest'
          type='5'
          value={formik.values.programInformation.programOfInterest}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.programInformation?.programOfInterest}
          touched={formik.touched?.programInformation?.programOfInterest}
        />
        <TextBox
          width='100%'
          label='Your Current Place Of Study'
          required={true}
          name='programInformation.currentPlaceOfStudy'
          value={formik.values.programInformation.currentPlaceOfStudy}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.programInformation?.currentPlaceOfStudy}
          touched={formik.touched?.programInformation?.currentPlaceOfStudy}
        />
      </div>
    </div>
  );
};

export default ProgramInformation;
