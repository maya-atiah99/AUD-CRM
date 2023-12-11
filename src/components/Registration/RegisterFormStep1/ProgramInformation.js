import React, { useEffect, useState } from "react";
import SectionTitle from "../../Texts/SectionTitle";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import DropDown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import { useFormikContext } from "formik";
import { useFetchApplyingAs } from "../../../Hooks/Appplicant";

const ProgramInformation = ({ fetchedData }) => {
  const formik = useFormikContext();
  const [applyingAsOptions, setApplyingAsOptions] = useState([]);
  const [applicationStartValue, setApplicationStartValue] = useState();
  const { data: applyingAsData, refetch: refetchApplyinAs } =
    useFetchApplyingAs(applicationStartValue);

  const startYourApplicationOptions = [
    { label: "Undergraduate", value: "0" },
    { label: "Graduate", value: "1" },
    { label: "Visiting", value: "2" },
  ];

  const formattedApplyingAsOptions = applyingAsData?.data
    ? applyingAsData?.data?.map((option) => ({
        value: option.applyingAsId,
        label: option.applyingAsText,
      }))
    : [];

  useEffect(() => {
    setApplicationStartValue(
      fetchedData?.data?.applicationStart ||
        fetchedData?.data?.stage1?.applicationStart
    );
    setApplyingAsOptions(formattedApplyingAsOptions);
  }, [fetchedData, applyingAsData]);

  useEffect(() => {
    setApplicationStartValue(formik.values.ApplicationStart);
  }, [formik.values.ApplicationStart, applyingAsData]);

  useEffect(() => {
    setApplyingAsOptions(formattedApplyingAsOptions);
  }, [applyingAsData]);

 
  useEffect(() => {
    refetchApplyinAs(applicationStartValue);
  }, []);

  useEffect(() => {
    refetchApplyinAs(applicationStartValue);
  }, [fetchedData, applicationStartValue]);

  const onRadioChange = (name, value) => {
    formik.setFieldValue(name, value);
  };

  console.log("formik.values.ApplingAs", formik.values.ApplingAs);
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PROGRAM INFORMATION' dotted={true} />
      <RadioButtonGroup
        options={startYourApplicationOptions}
        name='ApplicationStart'
        selectedValue={formik.values.ApplicationStart}
        label='Start Your Application'
        required={true}
        onRadioChange={onRadioChange}
      />
      {formik.errors?.ApplicationStart && formik.touched?.ApplicationStart ? (
        <span className='span-required'>
          Start Your Application is required
        </span>
      ) : (
        ""
      )}

      <RadioButtonGroup
        options={applyingAsOptions}
        name='ApplingAs'
        selectedValue={formik.values.ApplingAs}
        label='Applying As'
        required={true}
        onRadioChange={onRadioChange}
      />
      {formik.errors?.ApplingAs && formik.touched?.ApplingAs ? (
        <span className='span-required'>Applying as is required</span>
      ) : (
        ""
      )}
      <div className='grid-programInfo-cont'>
        <DropDown
          width='100%'
          label='Program Of Interest'
          required={true}
          name='ProgramOfInterest'
          type='5'
          value={formik.values.ProgramOfInterest}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.ProgramOfInterest}
          touched={formik.touched?.ProgramOfInterest}
        />
        <DropDown
          width='100%'
          label='Selected Term'
          required={true}
          name='SelectedTerm'
          isAcademic={true}
          value={formik.values.SelectedTerm}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.SelectedTerm}
          touched={formik.touched?.SelectedTerm}
        />

        {(formik.values.ApplicationStart === "0" &&
          formik.values.ApplingAs === 1) ||
        (formik.values.ApplicationStart === "1" &&
          formik.values.ApplingAs === 1) ? (
          <TextBox
            width='100%'
            label='Your Current Place Of Study'
            required={true}
            name='CurrentPlaceOfStudy'
            value={
              (formik.values.ApplicationStart === "0" &&
                formik.values.ApplingAs === 1) ||
              (formik.values.ApplicationStart === "1" &&
                formik.values.ApplingAs === 1)
                ? formik.values.CurrentPlaceOfStudy
                : ""
            }
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.CurrentPlaceOfStudy}
            touched={formik.touched?.CurrentPlaceOfStudy}
          />
        ) : null}
      </div>

      {formik.values.ApplicationStart === "2" ? (
        <>
          <div className='grid-personal1-cont'>
            <DropDown
              width='100%'
              label='Level of Study'
              required={true}
              name='Visiting_LevelOfStudy'
              type='13'
              value={formik.values.Visiting_LevelOfStudy}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.Visiting_LevelOfStudy}
              touched={formik.touched?.Visiting_LevelOfStudy}
            />
            <DropDown
              width='100%'
              label='Do You Require A Student Visa?'
              bolean={true}
              required={true}
              name='StudentVisa'
              value={formik.values.StudentVisa}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.StudentVisa}
              touched={formik.touched?.StudentVisa}
            />
            <DropDown
              width='100%'
              label='Are you a UAE/GCC national or UAE resident?'
              required={true}
              bolean={true}
              name='UAE_GCC_Resident'
              type='5'
              value={formik.values.UAE_GCC_Resident}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.UAE_GCC_Resident}
              touched={formik.touched?.UAE_GCC_Resident}
            />
            <TextBox
              width='100%'
              label='How many semesters are you planning on attending AUD?'
              required={true}
              name='SemestersAtAUD'
              value={formik.values.SemestersAtAUD}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.SemestersAtAUD}
              touched={formik.touched?.SemestersAtAUD}
            />

            <DropDown
              required={true}
              bolean={true}
              width='100%'
              label='Will you be applying for AUD On-Campus Housing?'
              name='OnHouseCampus'
              value={formik.values.OnHouseCampus}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.OnHouseCampus}
              touched={formik.touched?.OnHouseCampus}
            />
            <DropDown
              bolean={true}
              width='100%'
              label='Do you plan to seek the Certificate in Middle Eastern Studies at AUD?'
              required={true}
              name='MiddleEasternStudies'
              value={formik.values.MiddleEasternStudies}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.MiddleEasternStudies}
              touched={formik.touched?.MiddleEasternStudies}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProgramInformation;
