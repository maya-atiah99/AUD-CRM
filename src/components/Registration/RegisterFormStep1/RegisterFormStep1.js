import React, {
  Fragment,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import PersonalInformation from "./PersonalInformation";
import MailingAddress from "./MailingAddress";
import ProgramInformation from "./ProgramInformation";
import ParentInformation from "./ParentInformation";
import Consent from "./Consent";
import ValidationSchema from "../../../ValidationSchemas/Step1ValidationSchema";
import { FormikContext, FormikProvider, useFormik } from "formik";
import { Form } from "react-router-dom";
import step1ValidationSchema from "../../../ValidationSchemas/Step1ValidationSchema";

const RegisterFormStep1 = forwardRef((_, ref) => {
  const formikref = useRef();
  const formik = useFormik({
    initialValues: {
      personalInformation: {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        nationality: "",
        mobile: "",
        telephone: "",
        dateOfBirth: "",
        gender: "",
        title: "",
      },
      mailingAddress: {
        address: "",
        city: "",
        country: "",
        POBox: "",
        zipCode: "",
      },
      programInformation: {
        startYourApp: "",
        applyingAs: "",
        programOfInterest: "",
        currentPlaceOfStudy: "",
      },
      parentOfGuardian: {
        mobile1: "",
        appgurdianRelation1lyingAs: "",
        guardianName1: "",
        emailAddress1: "",
        mobile2: "",
        gurdianRelation2: "",
        guardianName2: "",
        emailAddress2: "",
      },
      consent: {
        authorize: "",
        fatherName: "",
        motherName: "",
        othersName: "",
        consentAddress: "",
        consentTelephone: "",
      },
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      console.log("test", values);
 
    },
  });

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formik.submitForm();
    },
  }));

  useEffect(() => {
    ref.current = formik;
  }, [ref, formik]);

  return (
    <div className='form-subcontainer'>
      <FormikProvider
        value={formik}
        innerRef={ref}
        validationSchema={step1ValidationSchema}
      >
        <PersonalInformation />
        <MailingAddress />
        <ProgramInformation />
        <ParentInformation />
        <Consent />
      </FormikProvider>
    </div>
  );
});

export default RegisterFormStep1;
