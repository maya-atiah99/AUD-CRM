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
import { useAddStudentInfo } from "../../../Hooks/Appplicant";
import toast from "react-hot-toast";

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
      setActiveStep,
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

    const { mutate: addStudentInfo } = useAddStudentInfo();

    const handleAddStudentInfo = (values) => {
      addStudentInfo(values, {
        onSuccess: () => {
          setActiveStep((prev) => prev + 1);
          window.scrollTo(0, 0);
        },
        onError: () => {
          toast.error("Something wrong");
          window.scrollTo(0, 0);
        },
      });
    };
    const formik = useFormik({
      initialValues: init,
      validationSchema: StudentInfoValidationSchema,
      enableReinitialize: true,
      onSubmit: (value) => {
        handleAddStudentInfo(value);
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
          validationSchema={StudentInfoValidationSchema}
        >
          <StudentInfo />
        </FormikProvider>
      </div>
    );
  }
);
export default StudentInfoStep;
