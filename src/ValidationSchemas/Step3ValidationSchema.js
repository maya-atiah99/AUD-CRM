import * as Yup from "yup";

const Step3ValidationSchema = Yup.object().shape({
  isSaved: Yup.boolean(),
  NextActiveStep: Yup.number(),
  HealthChalenges: Yup.boolean().notRequired(),
  ProgramInformationCheck: Yup.boolean()
    .required()
    .oneOf([true], "This field is required"),
  ImportantNotesCheck: Yup.boolean()
    .required()
    .oneOf([true], "This field is required"),
  HealthComments: Yup.mixed().notRequired(),
  TermAndConditionCheck: Yup.boolean()
    .required()
    .oneOf([true], "This field is required"),
  UndergroundCatalogCheck: Yup.boolean()
    .required()
    .oneOf([true], "This field is required"),
  AcceptResponsibilitiesCheck: Yup.boolean()
    .required()
    .oneOf([true], "This field is required"),
  RecordsCheck: Yup.boolean()
    .required()
    .oneOf([true], "This field is required"),
});

export default Step3ValidationSchema;
