import * as Yup from "yup";

const step1ValidationSchema = Yup.object().shape({
  personalInformation: Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    middleName: Yup.string().required("Middle Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    nationality: Yup.string().required("Nationality is required"),
    mobile: Yup.string().required("Mobile is required"),
    telephone: Yup.number().required("Telephone is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    gender: Yup.string().required("Gender is required"),
    title: Yup.string().notRequired(),
  }),
  mailingAddress: Yup.object().shape({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City/State is required"),
    country: Yup.string().required("Country is required"),
    POBox: Yup.string().required("P.O.Box is required"),
    zipCode: Yup.string().required("Zip Code is required"),
  }),
  programInformation: Yup.object().shape({
    startYourApp: Yup.string().required("Start your application is required"),
    applyingAs: Yup.string().required("Applyin as is required"),
    programOfInterest: Yup.string().required("Program Of interest is required"),
    currentPlaceOfStudy: Yup.string().required(
      "Current place of study is required"
    ),
  }),
  parentOfGuardian: Yup.object().shape({
    mobile1: Yup.number().required("Mobile is required"),
    gurdianRelation1: Yup.string(),
    guardianName1: Yup.string(),
    emailAddress1: Yup.string().email("Invalid Email"),
    mobile2: Yup.number().required("Mobile is required"),
    gurdianRelation2: Yup.string(),
    guardianName2: Yup.string(),
    emailAddress2: Yup.string().email("Invalid Email"),
  }),
  consent: Yup.object().shape({
    authorize: Yup.string().required("authorize is required"),
    fatherName: Yup.string(),
    motherName: Yup.string(),
    othersName: Yup.string(),
    consentAddress: Yup.string(),
    consentTelephone: Yup.number(),
  }),
});

export default step1ValidationSchema;
