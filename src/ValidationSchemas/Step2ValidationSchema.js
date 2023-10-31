import * as Yup from "yup";

const Step2ValidationSchema = Yup.object().shape({
  academicInformation: Yup.object().shape({
    countryUniversity: Yup.string().required("Country is required"),
    universityName: Yup.string().required("University Name is required"),
    highSchoolDiploma: Yup.string().required("High school diploma is required"),
    graduationYear: Yup.date().required("Graduation year is required"),
    advancedCourse: Yup.string(),
    academicDocument: Yup.string().required("Academic is required"),
    activitiesAttended: Yup.string(),
  }),
  academicFiles: Yup.array().of(
    Yup.object().shape({
      chosenTest: Yup.string().required("Chosen test is required"),
      academicDocument: Yup.string().required("Academic document is required"),
      dateTaken: Yup.date().required("Date taken is required"),
      registrationNumber: Yup.number().required(
        "Registration number is required"
      ),
      totalScore: Yup.number().required("Total score is required"),
    })
  ),
  personalStatement: Yup.object().shape({
    personalStatement: Yup.mixed(),
  }),
});

export default Step2ValidationSchema;
