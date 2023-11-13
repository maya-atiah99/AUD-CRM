import * as Yup from "yup";

const Step2ValidationSchema = Yup.object().shape({
  CurrentUniversityCountry: Yup.string().required("Country is required"),
  SchoolCountry: Yup.string().required("University Name is required"),
  DiplomaType: Yup.string().required("High school diploma is required"),
  GraduationYear: Yup.date().required("Graduation year is required"),
  ListAdvancedCources: Yup.string().notRequired(),
  DiplomaFile: Yup.string().notRequired(),
  ActivitiesNotEnrolled: Yup.string().notRequired(),
  applicantFiles: Yup.array().of(
    Yup.object().shape({
      testType: Yup.string().required("Chosen test is required"),
      academicDocument: Yup.string().required("Academic document is required"),
      dateTaken: Yup.date().required("Date taken is required"),
      registrationNumber: Yup.number().required(
        "Registration number is required"
      ),
      totalScore: Yup.number().required("Total score is required"),
    })
  ),
  PersonalStatement: Yup.mixed(),
  applingAs:Yup.string().notRequired()
});

export default Step2ValidationSchema;
