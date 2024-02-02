import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import { useFormikContext } from "formik";

const ImportantNotices = ({isView}) => {
  const formik = useFormikContext();
  return (
    <div className='form-subcontainers important-notices-container'>
      <SectionTitle title='IMPORTANT NOTICES' />
      <div className="d-flex gap-1">
      <SquareCheckBox
        text='A deposit (non-refundable) of AED 2,000, which is fully applied toward tuition, is required upon acceptance for admissions. The full balance of tuition is required at least one month prior to the beginning of the term of enrollment. No full refunds will be given after Drop/Add week. Refunds will be processed as per terms and conditions stated in our '
        name='ImportantNotesCheck'
        policy='Policy'
        href='https://www.aud.edu/university-overview/administrative-offices/office-of-finance/refunds/'
        value={formik.values.ImportantNotesCheck}
        onChange={(checked) => {
          formik.setFieldValue("ImportantNotesCheck", checked);
        }}
        errors={formik.errors?.ImportantNotesCheck}
        touched={formik.errors?.ImportantNotesCheck}
        disabled={isView}
      />
     
      </div>
    
    </div>
  );
};

export default ImportantNotices;
