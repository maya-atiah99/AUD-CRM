import React from "react";
import TextComponent from "../../Texts/TextComponent";
import SectionTitle from "../../Texts/SectionTitle";
import BulletedText from "../../Texts/BulletedText";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import TextBox from "../../Inputs/TextBox";
import { useFormikContext } from "formik";
import PhoneNumber from "../../Inputs/PhoneNumber";
import DropDown from "../../Inputs/DropDown";

const Consent = ({ isView }) => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='CONSENT TO RELEASE EDUCATION RECORDS' />
      <TextComponent
        text='The American University in Dubai classifies Directory Information as the following :'
        size='18px'
        font='600'
        classfont='consent-text'
        disabled={isView}
      />
      {/* <TextComponent
        text='Any other education record is classified as non-directory information and can not be disclosed to any party without the student’s '
        size='18px'
        classfont='consent-text'
        font='600'
        disabled={isView}
      /> */}
      <div className=' bulleted-consent-grid'>
        <BulletedText
          items={[{ text: "Student name" }, { text: "Address(es)" }]}
        />
        <BulletedText
          items={[
            { text: "Telephone Number(s)" },
            { text: "E-mail Address(es)" },
          ]}
        />
        <BulletedText
          items={[
            { text: "Birth Date and Place" },
            { text: "Program of Study" },
          ]}
        />
        <BulletedText
          items={[{ text: "Dates of Attendance and Credentials AAwarded." }]}
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
          value={formik.values.AuthorizeToReleaseRecord}
          onChange={(checked) => {
            formik.setFieldValue("AuthorizeToReleaseRecord", checked);
          }}
          errors={formik.errors?.AuthorizeToReleaseRecord}
          touched={formik.errors?.AuthorizeToReleaseRecord}
          disabled={isView}
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
      {formik.errors?.AuthorizeToReleaseRecord &&
      formik.touched?.AuthorizeToReleaseRecord ? (
        <span className='span-required'>
          Authorize To Release Record is required
        </span>
      ) : (
        ""
      )}
      <div className='grid-consent1-cont'>
        <TextBox
          width='100%'
          label='Guardian’s Name'
          required={true}
          name='Authorize_GuardianName'
          value={formik.values.Authorize_GuardianName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["Authorize_GuardianName"]}
          touched={formik.touched["Authorize_GuardianName"]}
          disabled={isView}
        />

        <DropDown
          width='100%'
          label='Guardian Relation'
          type='6'
          required={true}
          name='Authorize_GuardianRelation'
          value={formik.values.Authorize_GuardianRelation}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.Authorize_GuardianRelation}
          touched={formik.touched?.Authorize_GuardianRelation}
          disabled={isView}
        />
        <TextBox
          width='100%'
          label='Address'
          required={true}
          name='Authorize_Address'
          value={formik.values.Authorize_Address}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["Authorize_Address"]}
          touched={formik.touched["Authorize_Address"]}
          disabled={isView}
        />

        <PhoneNumber
          width='100%'
          label='Telephone'
          required={true}
          name='Authorize_Telephone'
          value={formik.values.Authorize_Telephone}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors["Authorize_Telephone"]}
          touched={formik.touched["Authorize_Telephone"]}
          disabled={isView}
        />
      </div>
    </div>
  );
};

export default Consent;
