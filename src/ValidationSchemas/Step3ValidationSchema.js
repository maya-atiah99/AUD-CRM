import * as Yup from "yup";

const Step3ValidationSchema = Yup.object().shape({
  ProgramInformationCheck: Yup.string().required(),
  ImportantNotesCheck: Yup.string().required(),
  TermAndConditionCheck: Yup.string().required(),
  UndergroundCatalogCheck: Yup.string().required(),
});

export default Step3ValidationSchema;
