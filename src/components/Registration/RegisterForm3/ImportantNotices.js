import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import BulletedText from "../../Texts/BulletedText";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import { useFormikContext } from "formik";
const details = [
  {
    text: "I understand that it is my responsibility to consult with the U.A.E. Ministry of Education for the requirements of high school equivalency prior to commencing studies at AUD.",
  },
  {
    text: "Please note that upon graduation from AUD, attestation of your degree will be linked to the high school equivalency. I understand that a letter of equivalency is required from the U.A.E. Ministry of Education.",
  },
  {
    text: "Students should be aware that all records, letters and other original documents provided to AUD as part of the admissions process will remain university property.",
  },
  {
    text: "The university reserves the right to evaluate the adequacy to all credentials submitted for admissions. Students who are not granted admission to AUD or who withdrew their application should collect their documents within two (2) years; otherwise, their physical records will be discarded.",
  },
  {
    text: "A deposit (non-refundable) of AED 5,000, which is fully applied toward tuition, is required upon acceptance for admissions.",
  },
  {
    text: "The full balance of tuition is required at least one month prior to the beginning of the term of enrollment.",
  },
  {
    text: "No full refunds will be given after Drop/Add week. Refunds will be processed as per terms and conditions stated in our policy.",
  },
];
const ImportantNotices = () => {
  const formik = useFormikContext();

  return (
    <div className='form-subcontainers important-notices-container'>
      <SectionTitle title='IMPORTANT NOTICES' />
      <BulletedText items={details} size='18px' font='600' />
      <SquareCheckBox
        text='If I am accepted by The American University in Dubai (AUD),'
        name='ImportantNotesCheck'
        value={formik.values.ImportantNotesCheck}
        onChange={(checked) => {
          formik.setFieldValue("ImportantNotesCheck", checked);
        }}
        errors={formik.errors?.ImportantNotesCheck}
        touched={formik.errors?.ImportantNotesCheck}
      />
    </div>
  );
};

export default ImportantNotices;
