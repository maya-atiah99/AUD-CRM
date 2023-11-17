import React from "react";
import TextComponent from "../../Texts/TextComponent";
import SectionTitle from "../../Texts/SectionTitle";
import BulletedText from "../../Texts/BulletedText";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import LinkButton from "../../Buttons/LinkButton";
import TextBox from "../../Inputs/TextBox";
import { useFormikContext } from "formik";
import PhoneNumber from "../../Inputs/PhoneNumber";

const Consent = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='CONSENT TO RELEASE EDUCATION RECORDS' />
      <TextComponent
        text='The American University in Dubai classifies Directory Information as the following :'
        size='18px'
        font='600'
        classfont='consent-text'
      />
      <TextComponent
        text='Any other education record is classified as non-directory information and can not be disclosed to any party without the student’s '
        size='18px'
        classfont='consent-text'
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
        classfont='consent-text'
        text='Any other education record is classified as non-directory information and can not be disclosed to any party without the student’s consent.'
      />
      <div className='d-flex'>
        <SquareCheckBox
          value={formik.values.authorizeToReleaseRecord}
          onChange={(checked) => {
            formik.setFieldValue("authorizeToReleaseRecord", checked);
          }}
          errors={formik.errors?.consent?.authorizeToReleaseRecord}
          touched={formik.errors?.consent?.authorizeToReleaseRecord}
        />
        {/* <LinkButton title='I Authorize ' /> */}
        <TextComponent
          authorize='I Authorize'
          size='18px'
          font='600'
          classfont='consent-text'
          text='to release my education records (e.g., grades, GPA, ID, schedule, statement of fees) to the following:'
        />
      </div>
      <div className='grid-consent1-cont'>
        <TextBox
          width='100%'
          label='Father’s Name'
          // required={true}
          name='fathersName'
          value={formik.values.fathersName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["fathersName"]}
          touched={formik.touched["fathersName"]}
        />
        <TextBox
          width='100%'
          label='Mother’s Name'
          // required={true}
          name='mothersName'
          value={formik.values.mothersName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["mothersName"]}
          touched={formik.touched["mothersName"]}
        />
        <TextBox
          width='100%'
          label='Other’s Name'
          // required={true}
          name='othersName'
          value={formik.values.othersName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["othersName"]}
          touched={formik.touched["othersName"]}
        />
      </div>
      <div className='grid-consent2-cont'>
        <TextBox
          width='100%'
          label='Address'
          // required={true}
          name='address1'
          value={formik.values.address1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["address1"]}
          touched={formik.touched["address1"]}
        />
        <PhoneNumber
          width='100%'
          label='Telephone'
          required={true}
          name='phone1'
          value={formik.values.phone1}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          // errors={formik.errors?.mobile}
          // touched={formik.touched?.mobile}
        />
      </div>
    </div>
  );
};

export default Consent;
