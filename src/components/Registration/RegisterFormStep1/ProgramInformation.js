import React, { useEffect, useState } from "react";
import SectionTitle from "../../Texts/SectionTitle";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import DropDown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import { ErrorMessage, useFormikContext } from "formik";

const ProgramInformation = ({ fetchedData }) => {
  const formik = useFormikContext();
  const [applyingAsOptions, setApplyingAsOptions] = useState([]);
  const startYourApplicationOptions = [
    { label: "Undergraduate", value: "0" },
    { label: "Graduate", value: "1" },
    { label: "Visiting", value: "2" },
  ];

  useEffect(() => {
    if (
      fetchedData?.data?.applicationStart === 0 ||
      fetchedData?.data?.stage1?.applicationStart === 0
    ) {
      setApplyingAsOptions([
        { label: "High School", value: "0" },
        { label: "Transfer", value: "1" },
        { label: "Audit", value: "2" },
        { label: "Non-Degree Seeker", value: "3" },
      ]);
    } else if (
      fetchedData?.data?.applicationStart === 1 ||
      fetchedData?.data?.stage1?.applicationStart === 1
    ) {
      setApplyingAsOptions([
        { label: "Graduate", value: "0" },
        { label: "Transfer", value: "1" },
      ]);
    } else {
      setApplyingAsOptions([
        { label: "Visiting Student", value: "0" },
        { label: "Exchange Student", value: "1" },
        { label: "Clinton Scholar", value: "2" },
      ]);
    }
  }, [fetchedData]);

  useEffect(() => {
    if (formik.values.applicationStart === "0") {
      setApplyingAsOptions([
        { label: "High School", value: "0" },
        { label: "Transfer", value: "1" },
        { label: "Audit", value: "2" },
        { label: "Non-Degree Seeker", value: "3" },
      ]);
    } else if (formik.values.applicationStart === "1") {
      setApplyingAsOptions([
        { label: "Graduate", value: "0" },
        { label: "Transfer", value: "1" },
      ]);
    } else {
      setApplyingAsOptions([
        { label: "Visiting Student", value: "0" },
        { label: "Exchange Student", value: "1" },
        { label: "Clinton Scholar", value: "2" },
      ]);
    }
  }, [formik.values.applicationStart]);

  const onRadioChange = (name, value) => {
    formik.setFieldValue(name, value);
  };

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PROGRAM INFORMATION' dotted={true} />
      <RadioButtonGroup
        options={startYourApplicationOptions}
        name='applicationStart'
        selectedValue={formik.values.applicationStart}
        label='Start Your Application'
        required={true}
        onRadioChange={onRadioChange}
      />
      {formik.errors?.applicationStart && formik.touched?.applicationStart ? (
        <span className='span-required'>
          Start Your Application is required
        </span>
      ) : (
        ""
      )}

      <RadioButtonGroup
        options={applyingAsOptions}
        name='applingAs'
        selectedValue={formik.values.applingAs}
        label='Applying As'
        required={true}
        onRadioChange={onRadioChange}
      />
      {formik.errors?.applingAs && formik.touched?.applingAs ? (
        <span className='span-required'>Applying as is required</span>
      ) : (
        ""
      )}
      <div className='grid-programInfo-cont'>
        <DropDown
          width='100%'
          label='Program Of Interest'
          required={true}
          name='programOfInterest'
          type='5'
          value={formik.values.programOfInterest}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.programOfInterest}
          touched={formik.touched?.programOfInterest}
        />

        {(formik.values.applicationStart === "0" &&
          formik.values.applingAs === "1") ||
        (formik.values.applicationStart === "1" &&
          formik.values.applingAs === "1") ? (
          <TextBox
            width='100%'
            label='Your Current Place Of Study'
            required={true}
            name='currentPlaceOfStudy'
            value={
              (formik.values.applicationStart === "0" &&
                formik.values.applingAs === "1") ||
              (formik.values.applicationStart === "1" &&
                formik.values.applingAs === "1")
                ? formik.values.currentPlaceOfStudy
                : ""
            }
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.currentPlaceOfStudy}
            touched={formik.touched?.currentPlaceOfStudy}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProgramInformation;
