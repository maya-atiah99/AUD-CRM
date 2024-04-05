import * as Yup from "yup";

const getStep3ValidationSchema = (reApply) => {
  const baseSchema = {
    isSaved: Yup.boolean(),
    NextActiveStep: Yup.number(),
    HealthChalenges: Yup.boolean().notRequired(),
    ProgramInformationCheck: Yup.boolean(),
    ImportantNotesCheck: Yup.boolean(),
    HealthComments: Yup.mixed().when("HealthChalenges", {
      is: (HealthChalenges) => HealthChalenges,
      then: (schema) => schema.required("HealthChalenges is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    TermAndConditionCheck: Yup.boolean(),
    UndergroundCatalogCheck: Yup.boolean(),
    AcceptResponsibilitiesCheck: Yup.boolean(),
    RecordsCheck: Yup.boolean(),
    courseworkAwareness: Yup.boolean(),
  };

  if (reApply) {
    baseSchema.courseworkAwareness = baseSchema.courseworkAwareness.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema
            .required("courseworkAwareness is required")
            .oneOf([true], "This field is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
    baseSchema.ProgramInformationCheck =
      baseSchema.ProgramInformationCheck.notRequired();
    baseSchema.ImportantNotesCheck =
      baseSchema.ImportantNotesCheck.notRequired();
    baseSchema.TermAndConditionCheck =
      baseSchema.TermAndConditionCheck.notRequired();
    baseSchema.UndergroundCatalogCheck =
      baseSchema.UndergroundCatalogCheck.notRequired();
    baseSchema.AcceptResponsibilitiesCheck =
      baseSchema.AcceptResponsibilitiesCheck.notRequired();
    baseSchema.RecordsCheck = baseSchema.RecordsCheck.notRequired();
  } else {
    baseSchema.courseworkAwareness =
      baseSchema.courseworkAwareness.notRequired();

    baseSchema.ProgramInformationCheck =
      baseSchema.ProgramInformationCheck.when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema
            .required("ProgramInformationCheck is required")
            .oneOf([true], "This field is required"),
        otherwise: (schema) => schema.notRequired(),
      });
    baseSchema.ImportantNotesCheck = baseSchema.ImportantNotesCheck.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema
            .required("ImportantNotesCheck is required")
            .oneOf([true], "This field is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
    baseSchema.TermAndConditionCheck = baseSchema.TermAndConditionCheck.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema
            .required("TermAndConditionCheck is required")
            .oneOf([true], "This field is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
    baseSchema.UndergroundCatalogCheck =
      baseSchema.UndergroundCatalogCheck.when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema
            .required("UndergroundCatalogCheck is required")
            .oneOf([true], "This field is required"),
        otherwise: (schema) => schema.notRequired(),
      });
    baseSchema.AcceptResponsibilitiesCheck =
      baseSchema.AcceptResponsibilitiesCheck.when("isSaved", {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema
            .required("AcceptResponsibilitiesCheck is required")
            .oneOf([true], "This field is required"),
        otherwise: (schema) => schema.notRequired(),
      });
    baseSchema.RecordsCheck = baseSchema.RecordsCheck.when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) =>
        schema
          .required("RecordsCheck is required")
          .oneOf([true], "This field is required"),
      otherwise: (schema) => schema.notRequired(),
    });
  }
  return Yup.object().shape(baseSchema);
};
export default getStep3ValidationSchema;
