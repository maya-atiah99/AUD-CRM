import * as Yup from "yup";

const Step3ValidationSchema = Yup.object().shape({
  isSaved: Yup.boolean(),
  NextActiveStep: Yup.number(),
  HealthChalenges: Yup.boolean().notRequired(),
  ProgramInformationCheck: Yup.boolean().when("isSaved", {
    is: (isSaved) => isSaved,
    then: (schema) =>
      schema
        .required("ProgramInformationCheck is required")
        .oneOf([true], "This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  ImportantNotesCheck: Yup.boolean().when("isSaved", {
    is: (isSaved) => isSaved,
    then: (schema) =>
      schema
        .required("ImportantNotesCheck is required")
        .oneOf([true], "This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  HealthComments: Yup.mixed().when("HealthChalenges", {
    is: (HealthChalenges) => HealthChalenges,
    then: (schema) =>
      schema
        .required("HealthChalenges is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  TermAndConditionCheck: Yup.boolean().when("isSaved", {
    is: (isSaved) => isSaved,
    then: (schema) =>
      schema
        .required("TermAndConditionCheck is required")
        .oneOf([true], "This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  UndergroundCatalogCheck: Yup.boolean().when("isSaved", {
    is: (isSaved) => isSaved,
    then: (schema) =>
      schema
        .required("UndergroundCatalogCheck is required")
        .oneOf([true], "This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  AcceptResponsibilitiesCheck: Yup.boolean().when("isSaved", {
    is: (isSaved) => isSaved,
    then: (schema) =>
      schema
        .required("AcceptResponsibilitiesCheck is required")
        .oneOf([true], "This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
  RecordsCheck: Yup.boolean().when("isSaved", {
    is: (isSaved) => isSaved,
    then: (schema) =>
      schema
        .required("RecordsCheck is required")
        .oneOf([true], "This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
});

export default Step3ValidationSchema;
