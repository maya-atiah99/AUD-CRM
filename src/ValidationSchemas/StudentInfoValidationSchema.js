import * as Yup from "yup";

const getStudentInfoValidationSchema = (applicationStart, applingAs) => {
  const baseSchema = {
    isSaved: Yup.boolean(),
    NextActiveStep: Yup.number(),
    residenceVisa: Yup.boolean().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Residence visa is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    housingRequired: Yup.boolean().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Housing is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    college: Yup.array().of(
      Yup.object().shape({
        NameOfCollege: Yup.string().when("isSaved", {
          is: (isSaved) => isSaved,
          then: (schema) => schema.required("Name of college is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
        YearsAttended: Yup.number().when("isSaved", {
          is: (isSaved) => isSaved,
          then: (schema) => schema.required("Years attended is required"),
          otherwise: (schema) => schema.notRequired(),
        }),
      })
    ),
    otherInvolvement: Yup.string().when("isSaved", {
      is: (isSaved) => isSaved,
      then: (schema) => schema.required("Other involvement is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  };

  return Yup.object().shape(baseSchema);
};
export default getStudentInfoValidationSchema;
