import React from "react";
import SectionTitle from "../../Texts/SectionTitle";
import DocumentUpload from "../../Inputs/DocumentUpload";
import { useFormikContext } from "formik";

const AttachCV = ({isView}) => {
    const formik = useFormikContext();
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='ATTACH CV' />
      <DocumentUpload
        height='100px'
        size='50'
        label='Please upload your most up-to-date Resume or CV'
        text='Please upload your most up-to-date Resume or CV'
        required={true}
        name='CVAcademic'
        // fileName={formik.values.CVAcademic}
        value={formik.values.CVAcademic}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.CVAcademic}
        touched={formik.touched?.CVAcademic}
        disabled={isView}
      />
    </div>
  );
};

export default AttachCV;
