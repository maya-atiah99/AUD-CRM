import * as Yup from "yup";


const WaiverAndReleasesValidationSchema = Yup.object().shape({
    RemainInFullForceCheck: Yup.boolean().required().oneOf([true], "This field is required"),
    AgreementTermsCheck: Yup.boolean().required().oneOf([true], "This field is required"),
    HealthInsurance: Yup.boolean().required().oneOf([true], "This field is required"),
    AcknowledgeAndPolicies: Yup.boolean().required().oneOf([true], "This field is required"),
  });
  export default WaiverAndReleasesValidationSchema;
  