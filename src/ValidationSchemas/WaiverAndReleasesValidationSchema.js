import * as Yup from "yup";
const getValidationSchemaWaiverAndRelease = (applicationStart, applingAs) => {
  let baseSchema = {
    isSaved: Yup.boolean(),
    RemainInFullForceCheck: Yup.boolean(),
    AgreementTermsCheck: Yup.boolean().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) =>
        schema
          .required("AgreementTermsCheck is required")
          .oneOf([true], "This field is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    HealthInsurance: Yup.boolean().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) =>
        schema
          .required("HealthInsurance is required")
          .oneOf([true], "This field is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    AcknowledgeAndPolicies: Yup.boolean().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) =>
        schema
          .required("AcknowledgeAndPolicies is required")
          .oneOf([true], "This field is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  };
  if (applingAs === 8) {
    baseSchema.RemainInFullForceCheck = baseSchema.RemainInFullForceCheck.when(
      "isSaved",
      {
        is: (isSaved) => isSaved,
        then: (schema) =>
          schema
            .required("RemainInFullForceCheck is required")
            .oneOf([true], "This field is required"),
        otherwise: (schema) => schema.notRequired(),
      }
    );
  }else {
    baseSchema.RemainInFullForceCheck = baseSchema.RemainInFullForceCheck.notRequired();
  }
  return Yup.object().shape(baseSchema);
};

export default getValidationSchemaWaiverAndRelease;
