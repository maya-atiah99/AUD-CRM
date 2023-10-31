import * as Yup from "yup";

const Step3ValidationSchema = Yup.object().shape({
  programInformation: Yup.object().shape({
    acceptance: Yup.boolean().required(),

  }),
  importantNotices: Yup.object().shape({
    acceptance: Yup.boolean().required(),

  }),
  academicInformation: Yup.object().shape({
    acknowledgeTerms: Yup.boolean().required(),
    undergraduateProgram: Yup.boolean().required(),

  }),
});

export default Step3ValidationSchema;
