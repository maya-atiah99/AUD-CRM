import React, { useEffect, useState } from "react";
import SectionTitle from "../../Texts/SectionTitle";
import Dropdown from "../../Inputs/DropDown";
import TextBox from "../../Inputs/TextBox";
import DateTime from "../../Inputs/DateTime";
import PhoneNumber from "../../Inputs/PhoneNumber";
import { useFormikContext } from "formik";
import HorizantalLine from "../../Texts/HorizantalLine";
import DocumentUpload from "../../Inputs/DocumentUpload";

const PersonalInformation = () => {
  const [showEmirate, setShowEmirate] = useState(false);
  const formik = useFormikContext();
  console.log("hvjhghvhg formik", formik);

  useEffect(() => {
    if (formik.values.Nationality === "dcb9b21c-31bf-42fa-9b60-fab3608a49e6") {
      setShowEmirate(true);
    }
  }, [formik.values.Nationality]);

  console.log('emrirates file',formik.values.EmiratesId_File)
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PERSONAL INFORMATION OF THE APPLICANT' />
      <div className='grid-personal1-cont'>
        <Dropdown
          width='100%'
          label='Title'
          type='1'
          name='TitleId'
          value={formik.values.TitleId}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
        />
        <TextBox
          width='100%'
          label='First Name'
          required={true}
          name='FirstName'
          value={formik.values.FirstName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.FirstName}
          touched={formik.touched?.FirstName}
        />
        <TextBox
          width='100%'
          label='Middle Name'
          required={true}
          name='MiddleName'
          value={formik.values.MiddleName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.MiddleName}
          touched={formik.touched?.MiddleName}
        />
        <TextBox
          width='100%'
          label='Last Name'
          name='LastName'
          required={true}
          value={formik.values.LastName}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.LastName}
          touched={formik.touched?.LastName}
        />
      </div>
      <div className='grid-personal2-cont'>
        <TextBox
          width='100%'
          label='Email'
          required={true}
          name='Email'
          value={formik.values.Email}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.Email}
          touched={formik.touched?.Email}
          disabled={true}
        />
        <DateTime
          width='100%'
          label='Date Of Birth'
          required={true}
          name='DOB'
          value={formik.values.DOB}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.DOB}
          touched={formik.touched?.DOB}
        />
        <Dropdown
          width='100%'
          label='Gender'
          required={true}
          type='3'
          name='Gender'
          value={formik.values.Gender}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.Gender}
          touched={formik.touched?.Gender}
        />
        <Dropdown
          width='100%'
          label='Nationality'
          required={true}
          type='4'
          name='Nationality'
          value={formik.values.Nationality}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.Nationality}
          touched={formik.touched?.Nationality}
        />
      </div>
      <div className='grid-personal2-cont'>
        <PhoneNumber
          width='50%'
          label='Mobile'
          required={true}
          name='Mobile'
          value={formik.values.Mobile}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.Mobile}
          touched={formik.touched?.Mobile}
          disabled={true}
        />
        <PhoneNumber
          width='100%'
          label='Telephone'
          name='ApplicantTelephone'
          required={true}
          value={formik.values.ApplicantTelephone}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.ApplicantTelephone}
          touched={formik.touched.ApplicantTelephone}
        />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <HorizantalLine width='100%' />
      </div>

      <div style={{ paddingTop: "0.5rem" }}>
        <div className='grid-personal-emirates-cont'>
          <TextBox
            width='100%'
            label='Passport No.'
            name='PassportNumber'
            value={formik.values.PassportNumber}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.PassportNumber}
            touched={formik.touched?.PassportNumber}
          />
          <DocumentUpload
            label='Upload Passport'
            text='Choose File'
            height='38px'
            imageHeight='30px'
            size='5'
            name='Passport_File'
            value={formik.values.Passport_File}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            fileName={formik.values.Passport_File}
            errors={formik.errors?.Passport_File}
            touched={formik.touched?.Passport_File}
          />{" "}
          <TextBox
            width='100%'
            label='Emirates ID No.'
            name='EmiratesId'
            value={formik.values.EmiratesId}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            errors={formik.errors?.EmiratesId}
            touched={formik.touched?.EmiratesId}
          />
          <DocumentUpload
            label='Upload Emirates ID (Front & Back)'
            text='Choose File'
            height='38px'
            imageHeight='30px'
            size='5'
            name='EmiratesId_File'
            value={formik.values.EmiratesId_File}
            onChange={(name, value) => {
              formik.setFieldValue(name, value);
            }}
            fileName={formik.values.EmiratesId_File}
            errors={formik.errors?.EmiratesId_File}
            touched={formik.touched?.EmiratesId_File}
          />{" "}
        </div>
        {showEmirate ? (
          <div className='grid-personal1-cont' style={{ paddingTop: "0.5rem" }}>
            <TextBox
              width='100%'
              label='Family Book No.'
              name='FamilyBookNumber'
              value={formik.values.FamilyBookNumber}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.FamilyBookNumber}
              touched={formik.touched?.FamilyBookNumber}
            />
            <DocumentUpload
              label='Upload Family Book'
              text='Choose File'
              height='38px'
              imageHeight='30px'
              size='5'
              name='FamilyBook_File'
              value={formik.values.FamilyBook_File}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              fileName={formik.values.FamilyBook_File}
              errors={formik.errors?.FamilyBook_File}
              touched={formik.touched?.FamilyBook_File}
            />{" "}
            <TextBox
              width='100%'
              label='Ethbara No.'
              name='EtibharaNo'
              value={formik.values.EtibharaNo}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.EtibharaNo}
              touched={formik.touched?.EtibharaNo}
            />
            <TextBox
              width='100%'
              label='Family No.'
              name='FamilyNo'
              value={formik.values.FamilyNo}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.FamilyNo}
              touched={formik.touched?.FamilyNo}
            />
          </div>
        ) : (
          ""
        )}
        {showEmirate ? (
          <div className='grid-personal1-cont'>
            <TextBox
              width='100%'
              label='City No.'
              name='CityNo'
              value={formik.values.CityNo}
              onChange={(name, value) => {
                formik.setFieldValue(name, value);
              }}
              errors={formik.errors?.CityNo}
              touched={formik.touched?.CityNo}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PersonalInformation;
