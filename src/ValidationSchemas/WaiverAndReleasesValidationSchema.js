import * as Yup from "yup";

const WaiverAndReleasesValidationSchema = Yup.object().shape({
  isSaved: Yup.boolean(),
  RemainInFullForceCheck: Yup.boolean().when("isSaved", {
    is: (isSaved) => isSaved,
    then: (schema) =>
      schema
        .required("RemainInFullForceCheck is required")
        .oneOf([true], "This field is required"),
    otherwise: (schema) => schema.notRequired(),
  }),
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
 
});
export default WaiverAndReleasesValidationSchema;
