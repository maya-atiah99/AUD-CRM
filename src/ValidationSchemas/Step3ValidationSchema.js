import * as Yup from "yup";

const Step3ValidationSchema = Yup.object().shape({
  ProgramInformationCheck: Yup.boolean().required(),
  ImportantNotesCheck: Yup.boolean().required(),
  TermAndConditionCheck: Yup.boolean().required(),
  UndergroundCatalogCheck: Yup.boolean().required(),
});

export default Step3ValidationSchema;
