import { FormikProvider, useFormik } from "formik";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import StudentInfo from "./StudentInfo";
import StudentInfoValidationSchema from "../../../ValidationSchemas/StudentInfoValidationSchema";
import { useAddStudentInfo } from "../../../Hooks/Appplicant";
import toast from "react-hot-toast";
import Loader from "../../Loader/Loader";

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
      residenceVisa: "",
      housingRequired: "",
      college: [
        {
          NameOfCollege: "",
          YearsAttended: "",
        },
      ],
      otherInvolvement: "",
    });

    const { mutate: addStudentInfo, isLoading } = useAddStudentInfo();
    console.log("vjndfk", applicationId);
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
        const transformCollageData = (collage) => {
          const transformedData = {};

          collage.forEach((item, index) => {
            const collegeIndex = index + 1;
            transformedData[`collegeUniversity${collegeIndex}`] =
              item.NameOfCollege;
            transformedData[`yearsAttended${collegeIndex}`] =
              item.YearsAttended;
          });

          return transformedData;
        };
        const transformedCollegeData = transformCollageData(value.college);
        const valuesToSend = {
          ...transformedCollegeData,
          applicationId: applicationId,
          applicantId: applicantId,
          residenceVisa: value?.residenceVisa,
          housingRequired: value?.housingRequired,
          otherInvolvement: value?.otherInvolvement,
        };
        handleAddStudentInfo(valuesToSend);
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

    if (isLoading) {
      return <Loader />;
    }
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
