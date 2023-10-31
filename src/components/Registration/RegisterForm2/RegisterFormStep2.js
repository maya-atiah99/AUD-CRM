import React, { forwardRef, useEffect, useImperativeHandle } from "react";
import SubmitText from "./SubmitText";
import AcadamicFiles from "./AcadamicFiles";
import AcadamicInformation from "./AcadamicInformation";
import PersonalStatement from "./PersonalStatement";
import { FormikProvider, useFormik } from "formik";
import Step2ValidationSchema from "../../../ValidationSchemas/Step2ValidationSchema";
const RegisterFormStep2 = forwardRef((_, ref) => {
  const formik = useFormik({
    initialValues: {
      academicInformation: {
        countryUniversity: "",
        universityName: "",
        highSchoolDiploma: "",
        graduationYear: "",
        advancedCourse: "",
        academicDocument: "",
        activitiesAttended: "",
      },
      academicFiles: [
        {
          chosenTest: "",
          academicDocument: "",
          dateTaken: "",
          registrationNumber: "",
          totalScore: "",
        },
      ],
      personalStatement: {
        personalStatement: "",
      },
    },
    validationSchema: Step2ValidationSchema,
    onSubmit: (values) => {
      console.log("hiiii", values);
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

  console.log("twooo", formik);
  return (
    <div className='form-subcontainer '>
      <FormikProvider
        value={formik}
        innerRef={ref}
        validationSchema={Step2ValidationSchema}
      >
        <SubmitText />
        <AcadamicInformation />
        <AcadamicFiles />
        <PersonalStatement />
      </FormikProvider>
    </div>
  );
});

export default RegisterFormStep2;
