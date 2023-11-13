import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import BulletedText from "../../Texts/BulletedText";
import { useFormikContext } from "formik";

const details = [
  {
    text: "I agree to abide by the regulations and policies set forth in the University’s Undergraduate Catalog, Student Handbook, Schedule of Tuition Fees, and Enrollment Agreement and as stated in this application and online.",
  },
  {
    text: "I certify that the information that I have provided in this application is true and complete to the best of my knowledge. I realize that omissions or falsifications of information will be sufficient reason for rejection or dismissal.",
  },
];
const ProgramInformation = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers'>
      <SectionTitle title='PROGRAM INFORMATION' size='18px' font='600' />
      <BulletedText items={details} />
      <SquareCheckBox
        text='If I am accepted by The American University in Dubai (AUD),'
        name='ProgramInformationCheck'
        value={formik.values.ProgramInformationCheck}
        onChange={(checked) => {
          formik.setFieldValue("ProgramInformationCheck", checked);
        }}
        errors={formik.errors?.ProgramInformationCheck}
        touched={formik.errors?.ProgramInformationCheck}
      />
    </div>
  );
};

export default ProgramInformation;
