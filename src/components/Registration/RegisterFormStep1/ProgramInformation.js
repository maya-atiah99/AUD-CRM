import React, { useEffect, useState } from "react";
import SectionTitle from "../../Texts/SectionTitle";
import RadioButtonGroup from "../../Inputs/RadioButtonGroup";
import DropDown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import { useFormikContext } from "formik";
import { useFetchApplyingAs } from "../../../Hooks/Appplicant";
import ClintonAgreementModal from "./ClintonAgreementModal";

const ProgramInformation = ({ fetchedData, isView }) => {
  const formik = useFormikContext();
  const [applyingAsOptions, setApplyingAsOptions] = useState([]);
  const [applicationStartValue, setApplicationStartValue] = useState("0");
  const [applicationType, setApplicationType] = useState(null);
  const [isShowClintonModal, setIsShowClintonModal] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState("");
  const { data: applyingAsData, refetch: refetchApplyinAs } =
    useFetchApplyingAs({
      applicationStart: applicationStartValue,
      academicTermId: selectedTerm,
    });
  const startYourApplicationOptions = [
    { label: "Undergraduate", value: "0" },
    { label: "Graduate", value: "1" },
    { label: "Visiting", value: "2" },
  ];

  useEffect(() => {
    const fetchApplyingAsData = async () => {
      await refetchApplyinAs();

      const formattedApplyingAsOptions = applyingAsData?.data
        ? applyingAsData?.data?.map((option) => ({
            value: option.applyingAsId,
            label: option.applyingAsText,
          }))
        : [];
      setApplyingAsOptions(formattedApplyingAsOptions);
    };
    if (
      fetchedData?.data?.application?.startYourApplication !=
      formik.values.ApplicationStart
    ) {
      setApplicationStartValue(formik.values.ApplicationStart);
    } else {
      setApplicationStartValue(
        fetchedData?.data?.application?.startYourApplication
      );
    }
    fetchApplyingAsData();
    setSelectedTerm(fetchedData?.data?.application?.term);
  }, [fetchedData]);

  useEffect(() => {
    setApplicationStartValue(formik.values.ApplicationStart);
  }, [formik.values.ApplicationStart]);

  useEffect(() => {
    const formattedApplyingAsOptions = applyingAsData?.data
      ? applyingAsData?.data?.map((option) => ({
          value: option.applyingAsId,
          label: option.applyingAsText,
        }))
      : [];
    setApplyingAsOptions(formattedApplyingAsOptions);
  }, [applyingAsData]);

  useEffect(() => {
    if (formik.values.ApplicationStart == "0") {
      setApplicationType("00000000-0000-0000-0000-000000000000");
    } else if (formik.values.ApplicationStart == "1") {
      setApplicationType("00000000-0000-0000-0000-000000000001");
    } else {
      setApplicationType("00000000-0000-0000-0000-000000000002");
    }
  }, [formik.values.ApplicationStart]);

  useEffect(() => {
    setSelectedTerm(formik.values.SelectedTerm);
    refetchApplyinAs({
      applicationStart: applicationStartValue,
      academicTermId: selectedTerm,
    });
  }, [formik.values.SelectedTerm]);

  const handleCancelClinton = () => {
    formik.setFieldValue("ApplingAs", "");
    setIsShowClintonModal(false);
  };

  const onRadioChange = (name, value) => {
    if (value == 8) {
      setIsShowClintonModal(true);
    }
    formik.setFieldValue(name, value);
  };

  return (
    <>
      <div className='form-subcontainers'>
        <SectionTitle title='PROGRAM INFORMATION' dotted={true} />
        <div className='grid-programInfo-cont'>
          <DropDown
            width='100%'
            label='Selected Term'
            required={true}
            name='SelectedTerm'
            isAcademic={true}
            value={formik.values.SelectedTerm}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
              formik.setFieldValue("ApplingAs", "");
            }}
            errors={formik.errors?.SelectedTerm}
            touched={formik.touched?.SelectedTerm}
            disabled={isView}
          />
        </div>
        <RadioButtonGroup
          options={startYourApplicationOptions}
          name='ApplicationStart'
          selectedValue={formik.values.ApplicationStart}
          label='Start Your Application'
          required={true}
          onRadioChange={(name, value) => {
            formik.setFieldValue(name, value);
            formik.setFieldValue("ApplingAs", "");
            formik.setFieldValue("ProgramOfInterest", "");
          }}
          disabled={isView}
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
          disabled={isView}
        />
        {formik.errors?.ApplingAs && formik.touched?.ApplingAs ? (
          <span className='span-required'>Applying as is required</span>
        ) : (
          ""
        )}
        <div className='grid-programInfo-cont'>
          <DropDown
            width='100%'
            label='Program'
            required={true}
            parent={applicationType}
            name='ProgramOfInterest'
            type='5'
            value={formik.values.ProgramOfInterest}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.ProgramOfInterest}
            touched={formik.touched?.ProgramOfInterest}
            disabled={isView}
          />

          {(formik.values.ApplicationStart === "0" &&
            formik.values.ApplingAs === 1) ||
          (formik.values.ApplicationStart === "1" &&
            formik.values.ApplingAs === 5) ? (
            <TextBox
              width='100%'
              label='Your Current Place Of Study'
              required={true}
              name='CurrentPlaceOfStudy'
              value={
                (formik.values.ApplicationStart === "0" &&
                  formik.values.ApplingAs === 1) ||
                (formik.values.ApplicationStart === "1" &&
                  formik.values.ApplingAs === 5)
                  ? formik.values.CurrentPlaceOfStudy
                  : ""
              }
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.CurrentPlaceOfStudy}
              touched={formik.touched?.CurrentPlaceOfStudy}
              disabled={isView}
            />
          ) : null}
        </div>

        {formik.values.ApplicationStart === "2" ? (
          <>
            <div className='grid-programInfo-cont'>
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
                disabled={isView}
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
                disabled={isView}
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
                disabled={isView}
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
                disabled={isView}
              />
              <div className='moreInfo-grid'>
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
                  disabled={isView}
                />
                <p>
                  Find out more about the{" "}
                  <a
                    href='https://www.aud.edu/on-aud-campus/accommodation/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Student Accomodation
                  </a>
                </p>
              </div>
              <div className='moreInfo-grid'>
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
                  disabled={isView}
                />
                <p>
                  Find out more about the{" "}
                  <a
                    href='https://www.aud.edu/aud-school/school-of-arts-sciences/departments/department-of-international-and-middle-eastern-studies/department-programs/certificate-in-middle-eastern-studies/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Certificate in Middle Eastern Studies
                  </a>
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {isShowClintonModal ? (
        <ClintonAgreementModal
          onClose={() => setIsShowClintonModal(false)}
          handleCancle={handleCancelClinton}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ProgramInformation;
