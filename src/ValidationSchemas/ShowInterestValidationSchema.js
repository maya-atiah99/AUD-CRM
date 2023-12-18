import * as Yup from "yup";

const showInterestValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, "First Name must be at most 50 characters")
    .required("First Name is required"),
  middleName: Yup.string()
    .max(50, "Middle Name must be at most 50 characters")
    .required("Middle Name is required"),
  lastName: Yup.string()
    .max(50, "Last Name must be at most 50 characters")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  nationality: Yup.string().required("Nationality is required"),
  mobile: Yup.string().required("Mobile is required"),
  titleId: Yup.string().nullable(),
  howDidYouHear: Yup.string().required("How did you hear about us is required"),
  selectedTerm: Yup.string().required("Selected term is required"),
  fieldOfInterest: Yup.string().required("Field of interest is required"),
  applicationStart: Yup.string().required("Start your application is required"),
});

export default showInterestValidationSchema;
