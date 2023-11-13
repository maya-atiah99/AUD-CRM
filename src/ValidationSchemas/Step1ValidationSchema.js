import * as Yup from "yup";

const step1ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string().required("Middle Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  nationality: Yup.string().required("Nationality is required"),
  mobile: Yup.string().required("Mobile is required"),
  applicantTelephone: Yup.number().required("Telephone is required"),
  dob: Yup.date().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  titleId: Yup.string().notRequired(),
  address: Yup.string().required("Address is required"),
  cityState: Yup.number().required("City/State is required"),
  country: Yup.string().required("Country is required"),
  pobox: Yup.string().required("P.O.Box is required"),
  zipCode: Yup.number().required("Zip Code is required"),
  // startYourApp: Yup.string().required("Start your application is required"),
  applingAs: Yup.number().required("Applying as is required"),
  programOfInterest: Yup.string().required("Program Of interest is required"),
  currentPlaceOfStudy: Yup.string().required(
    "Current place of study is required"
  ),
  guardianMobile1: Yup.number().required("Mobile is required"),
  guardianRelation1: Yup.string(),
  guardianName1: Yup.string(),
  guardianEmail1: Yup.string().email("Invalid Email"),
  guardianMobile2: Yup.number().required("Mobile is required"),
  guardianRelation2: Yup.string(),
  guardianName2: Yup.string(),
  guardianEmail2: Yup.string().email("Invalid Email"),
  authorizeToReleaseRecord: Yup.string().required("authorize is required"),
  fathersName: Yup.string(),
  mothersName: Yup.string(),
  othersName: Yup.string(),
  address1: Yup.string(),
  phone1: Yup.number(),
});

export default step1ValidationSchema;
