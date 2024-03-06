import React from "react";
import SquareCheckBox from "../../Inputs/SquareCheckBox";
import SectionTitle from "../../Texts/SectionTitle";
import { useFormikContext } from "formik";

const Declaration = ({ applingAs, applicationStart, isView }) => {
  const formik = useFormikContext();
  return (
    <div className='form-subcontainers'>
      <SectionTitle title='Declaration' size='18px' font='600' />
      <SquareCheckBox
        text='I certify that the information that I have provided in this application is true and complete to the best of my knowledge. I realize that omission or falsification of information will be a sufficient reason for rejection or dismissal.'
        name='ProgramInformationCheck'
        value={formik.values.ProgramInformationCheck}
        onChange={(checked) => {
          formik.setFieldValue("ProgramInformationCheck", checked);
        }}
        errors={formik.errors?.ProgramInformationCheck}
        touched={formik.errors?.ProgramInformationCheck}
        disabled={isView}
      />
      <SquareCheckBox
        text='I am aware that all records, letters, and other original documents provided to AUD as part of the admissions process will remain university property. The university reserves the right to evaluate the adequacy of all credentials submitted for admissions. Students who are not granted admission to AUD or who withdrew their application should collect their documents within two (2) years; otherwise, their physical records will be discarded'
        name='RecordsCheck'
        value={formik.values.RecordsCheck}
        onChange={(checked) => {
          formik.setFieldValue("RecordsCheck", checked);
        }}
        errors={formik.errors?.RecordsCheck}
        touched={formik.errors?.RecordsCheck}
        disabled={isView}
      />
      <SquareCheckBox
        text='I have read and agree to abide by the regulations and policies set forth in the University’s'
        name='UndergroundCatalogCheck'
        value={formik.values.UndergroundCatalogCheck}
        onChange={(checked) => {
          formik.setFieldValue("UndergroundCatalogCheck", checked);
        }}
        policy={
          applicationStart === "0"
            ? "Undergaduate Catalog, "
            : applicationStart === "1"
            ? "Graduate Catalog, "
            : "Undergaduate Catalog, "
        }
        href={
          applicationStart === "0" || applingAs == 8
            ? "https://aud.edu/media/catalogs/undergraduate/index.html"
            : applicationStart === "1"
            ? "https://aud.edu/media/catalogs/graduate/index.html"
            : "https://www.aud.edu/media/catalogs/undergraduate/index.html"
        }
        policy2='Student Handbook,'
        href2='https://aud.edu/media/catalogs/student-handbook/index.html'
        policy3='Schedule of Tuition Fees'
        href3='https://www.aud.edu/university-overview/administrative-offices/office-of-finance/'
        text2=' and Enrollment Agreement and as stated in this application and online.'
        errors={formik.errors?.UndergroundCatalogCheck}
        touched={formik.errors?.UndergroundCatalogCheck}
        disabled={isView}
      />

      <SquareCheckBox
        text={
          applicationStart === 0
            ? "I understand that it is my responsibility to consult with the U.A.E. Ministry of Education for the requirements of high school equivalency prior to commencing studies at AUD. Please note that upon graduation from AUD, attestation of your degree will be linked to the high school equivalency. I understand that a letter of equivalency is required from the U.A.E. Ministry of Education."
            : "I understand that the Certificate of Recognition is required from the U.A.E. Ministry of Education, and it is my responsibility to consult with the Ministry for the requirements of the certificate prior to commencing studies at AUD. Upon my graduation from AUD, attestation of my degree will be linked to the equivalency."
        }
        name='AcceptResponsibilitiesCheck'
        value={formik.values.AcceptResponsibilitiesCheck}
        onChange={(checked) => {
          formik.setFieldValue("AcceptResponsibilitiesCheck", checked);
        }}
        errors={formik.errors?.AcceptResponsibilitiesCheck}
        touched={formik.errors?.AcceptResponsibilitiesCheck}
        disabled={isView}
      />
    </div>
  );
};

export default Declaration;
