// import * as Yup from "yup";

// const step1ValidationSchema = Yup.object().shape({
//   firstName: Yup.string().required("First Name is required"),
//   middleName: Yup.string().required("Middle Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   email: Yup.string().email("Invalid Email").required("Email is required"),
//   nationality: Yup.string().required("Nationality is required"),
//   mobile: Yup.string().required("Mobile is required"),
//   applicantTelephone: Yup.number().required("Telephone is required"),
//   dob: Yup.date().required("Date of Birth is required"),
//   gender: Yup.string().required("Gender is required"),
//   titleId: Yup.string().notRequired(),
//   address: Yup.string().required("Address is required"),
//   cityState: Yup.string().required("City/State is required"),
//   country: Yup.string().required("Country is required"),
//   pobox: Yup.string().required("P.O.Box is required"),
//   zipCode: Yup.number().required("Zip Code is required"),
//   applicationStart: Yup.string().required("Start your application is required"),
//   applingAs: Yup.string().required("Applying as is required"),
//   programOfInterest: Yup.string().required("Program Of interest is required"),
//   currentPlaceOfStudy: Yup.string().notRequired(),
//   guardianMobile1: Yup.number().notRequired(),
//   guardianRelation1: Yup.string(),
//   guardianName1: Yup.string(),
//   guardianEmail1: Yup.string().email("Invalid Email"),
//   guardianMobile2: Yup.number().notRequired(),
//   guardianRelation2: Yup.string(),
//   guardianName2: Yup.string(),
//   guardianEmail2: Yup.string().email("Invalid Email"),
//   authorizeToReleaseRecord: Yup.boolean().required().oneOf([true], "This field is required"),
//   fathersName: Yup.string(),
//   mothersName: Yup.string(),
//   othersName: Yup.string(),
//   address1: Yup.string(),
//   phone1: Yup.number(),
// });

// export default step1ValidationSchema;

import * as Yup from "yup";

const getValidationSchemaStep1 = (applicationStart, applingAs) => {
  let baseSchema = {
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
    cityState: Yup.string().required("City/State is required"),
    country: Yup.string().required("Country is required"),
    pobox: Yup.string().required("P.O.Box is required"),
    zipCode: Yup.number().required("Zip Code is required"),
    applicationStart: Yup.string().required(
      "Start your application is required"
    ),
    applingAs: Yup.string().required("Applying as is required"),
    programOfInterest: Yup.string().required("Program Of interest is required"),
    currentPlaceOfStudy: Yup.string().notRequired(),
    guardianMobile1: Yup.number().notRequired(),
    guardianRelation1: Yup.string(),
    guardianName1: Yup.string(),
    guardianEmail1: Yup.string().email("Invalid Email"),
    guardianMobile2: Yup.number().notRequired(),
    guardianRelation2: Yup.string(),
    guardianName2: Yup.string(),
    guardianEmail2: Yup.string().email("Invalid Email"),
    authorizeToReleaseRecord: Yup.boolean()
      .required()
      .oneOf([true], "This field is required"),
    fathersName: Yup.string(),
    mothersName: Yup.string(),
    othersName: Yup.string(),
    address1: Yup.string(),
    phone1: Yup.number(),
  };

  if (
    (applicationStart === "0" && applingAs === "1") ||
    (applicationStart === "1" && applingAs === "1")
  ) {
    baseSchema.currentPlaceOfStudy = baseSchema.currentPlaceOfStudy.required(
      "Graduation Year is required"
    );
  } else {
    baseSchema.currentPlaceOfStudy =
      baseSchema.currentPlaceOfStudy.notRequired();
  }

  return Yup.object().shape(baseSchema);
};

export default getValidationSchemaStep1;
