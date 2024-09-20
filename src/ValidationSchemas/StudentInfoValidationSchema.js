// import * as Yup from "yup";

// const getStudentInfoValidationSchema = (applicationStart, applingAs) => {
//   const baseSchema = {
//     ResidenceVisa: Yup.boolean().notRequired(),
//     HousingRequired: Yup.boolean().notRequired(),
//     collage: Yup.array().of(
//       Yup.object().shape({
//         NameOfCollege: Yup.string().notRequired(),
//         YearsAttended: Yup.number().notRequired(),
//       })
//     ),
//     Involvement: Yup.string().notRequired(),
//   };

//   return Yup.object().shape(baseSchema);
// };
// export default getStudentInfoValidationSchema;

import * as Yup from "yup";

const StudentInfoValidationSchema = Yup.object().shape({
  residenceVisa: Yup.boolean().required("Residence visa is required"),
  housingRequired: Yup.boolean().required("Housing Field is required"),
  college: Yup.array().of(
    Yup.object().shape({
      NameOfCollege: Yup.string().required(),
      YearsAttended: Yup.number().required(),
    })
  ),
  otherInvolvement: Yup.string().required("Other involvement is required"),
});

export default StudentInfoValidationSchema;
