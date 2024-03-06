import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import TextBox from "../../Inputs/TextBox";
import DocumentUpload from "../../Inputs/DocumentUpload";
import PhoneNumber from "../../Inputs/PhoneNumber";
import { useFormikContext } from "formik";

const TranscriptMailingAddress = ({ isView }) => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='TRANSCRIPT MAILING ADDRESS' />
      <div className='transcript-mailing-cont'>
        <TextBox
          width='100%'
          label='Study Abroad Advisor / Office Name'
          required={true}
          name='StudyAbroadAdvisor'
          value={formik.values.StudyAbroadAdvisor}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.StudyAbroadAdvisor}
          touched={formik.touched?.StudyAbroadAdvisor}
          disabled={isView}
        />
        <TextBox
          width='100%'
          label='Registrar’s Email'
          required={true}
          name='RegistrarEmail'
          value={formik.values.RegistrarEmail}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.RegistrarEmail}
          touched={formik.touched?.RegistrarEmail}
          disabled={isView}
        />
        <PhoneNumber
          width='100%'
          label='Mobile'
          name='TranscriptMobile'
          required={true}
          value={formik.values.TranscriptMobile}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.TranscriptMobile}
          touched={formik.touched.TranscriptMobile}
          disabled={isView}
        />
        <PhoneNumber
          width='100%'
          label='Telephone'
          required={true}
          name='TranscriptTelephone'
          value={formik.values.TranscriptTelephone}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.TranscriptTelephone}
          touched={formik.touched.TranscriptTelephone}
          disabled={isView}
        />
      </div>
      <DocumentUpload
        height='100px'
        size='50'
        label='Upload Document'
        text='Upload Official Transcript'
        required={true}
        name='OfficialTranscript'
        // fileName={formik.values.OfficialTranscript}
        value={formik.values.OfficialTranscript}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.OfficialTranscript}
        touched={formik.touched?.OfficialTranscript}
        disabled={isView}
      />
    </div>
  );
};

export default TranscriptMailingAddress;
