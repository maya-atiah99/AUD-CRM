import React from "react";
import TextComponent from "../../Texts/TextComponent";
import SectionTitle from "../../Texts/SectionTitle";
import BulletedText from "../../Texts/BulletedText";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import LinkButton from "../../Buttons/LinkButton";
import TextBox from "../../Inputs/TextBox";
import { useFormikContext } from "formik";

const Consent = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='CONSENT TO RELEASE EDUCATION RECORDS' />
      <TextComponent
        text='The American University in Dubai classifies Directory Information as the following :'
        size='18px'
        font='600'
        classfont="consent-text"
      />
      <TextComponent
        text='Any other education record is classified as non-directory information and can not be disclosed to any party without the student’s consent.'
        size='18px'
        classfont="consent-text"
        font='600'
      />
      <div className='d-flex justify-content-between'>
        <BulletedText
          items={[{ text: "Student name" }, { text: "address(es)" }]}
        />
        <BulletedText
          items={[
            { text: "telephone number(s)" },
            { text: "e-mail address(es)" },
          ]}
        />
        <BulletedText
          items={[
            { text: "birth date and place" },
            { text: "program of study" },
          ]}
        />
        <BulletedText
          items={[{ text: "dates of attendance and credentials awarded." }]}
        />
      </div>
      <TextComponent
        size='18px'
        font='600'
        classfont="consent-text"
        text='Any other education record is classified as non-directory information and can not be disclosed to any party without the student’s consent.'
      />
      <div className='d-flex'>
        <SquareCheckBox
          value={formik.values.consent.authorize}
          onChange={(checked) => {
            formik.setFieldValue("consent.authorize", checked);
          }}
          errors={formik.errors?.consent?.authorize}
          touched={formik.errors?.consent?.authorize}
        />
        <LinkButton title='I Authorize ' />
        <TextComponent
          size='18px'
          font='600'
        classfont="consent-text"
          text='to release my education records (e.g., grades, GPA, ID, schedule, statement of fees) to the following:'
        />
      </div>
      <div className='grid-consent1-cont'>
        <TextBox
          width='100%'
          label='Father’s Name'
          // required={true}
          name='consent.fatherName'
          value={formik.values.consent.fatherName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["consent.fatherName"]}
          touched={formik.touched["consent.fatherName"]}
        />
        <TextBox
          width='100%'
          label='Mother’s Name'
          // required={true}
          name='consent.motherName'
          value={formik.values.consent.motherName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["consent.motherName"]}
          touched={formik.touched["consent.motherName"]}
        />
        <TextBox
          width='100%'
          label='Other’s Name'
          // required={true}
          name='consent.othersName'
          value={formik.values.consent.othersName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["consent.othersName"]}
          touched={formik.touched["consent.othersName"]}
        />
      </div>
      <div className='grid-consent2-cont'>
        <TextBox
          width='100%'
          label='Address'
          // required={true}
          name='consent.consentAddress'
          value={formik.values.consent.consentAddress}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["consent.consentAddress"]}
          touched={formik.touched["consent.consentAddress"]}
        />
        <TextBox
          width='100%'
          label='Telephone'
          // required={true}
          name='consent.consentTelephone'
          value={formik.values.consent.consentTelephone}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["consent.consentTelephone"]}
          touched={formik.touched["consent.consentTelephone"]}
        />
      </div>
    </div>
  );
};

export default Consent;
