import { FormikProvider, useFormik } from "formik";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import getStudentInfoValidationSchema from "../../../ValidationSchemas/StudentInfoValidationSchema";
import StudentInfo from "./StudentInfo";
import StudentInfoValidationSchema from "../../../ValidationSchemas/StudentInfoValidationSchema";

const StudentInfoStep = forwardRef(
  (
    {
      applicantId,
      applicationId,
      setApplicationStart,
      applingAs,
      applicationStart,
      setApplyingAs,
      activeStep,
      isView,
    },
    ref
  ) => {
    const [init, setInit] = useState({
      ResidenceVisa: "",
      HousingRequired: "",
      collage: [
        {
          NameOfCollege: "",
          YearsAttended: "",
        },
      ],
      Involvement: "",
    });
    const formik = useFormik({
      initialValues: init,
      validationSchema: StudentInfoValidationSchema,
      enableReinitialize: true,
      onSubmit: (value) => {},
    });

    useImperativeHandle(ref, () => ({
      submitForm: () => {
        formik.submitForm();
      },
    }));
    useEffect(() => {
      ref.current = formik;
    }, [ref, formik]);

    console.log("formikkksdcms ", formik);
    return (
      <div className='form-subcontainer'>
        <FormikProvider value={formik} innerRef={ref}   validationSchema={StudentInfoValidationSchema}>
          <StudentInfo />
        </FormikProvider>
      </div>
    );
  }
);
export default StudentInfoStep;
