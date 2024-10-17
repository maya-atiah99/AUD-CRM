import { FormikProvider, useFormik } from "formik";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import StudentInfo from "./StudentInfo";
import StudentInfoValidationSchema from "../../../ValidationSchemas/StudentInfoValidationSchema";
import {
  useAddStudentInfo,
  useFetchApplicantStageTwo,
} from "../../../Hooks/Appplicant";
import toast from "react-hot-toast";
import Loader from "../../Loader/Loader";
import getStudentInfoValidationSchema from "../../../ValidationSchemas/StudentInfoValidationSchema";

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
      setApplicationId,
    },
    ref
  ) => {
    const {
      data: applicantStageTwo,
      refetch: refetchStageTwo,
      isLoading: isStageTwoLoading,
    } = useFetchApplicantStageTwo(applicantId, applicationId, false);
    const { mutate: addStudentInfo, isLoading } = useAddStudentInfo();

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
      isSaved: true,
      NextActiveStep: "",
    });

    useEffect(() => {
      if (applicantStageTwo?.data?.reapplication) {
        const { residenceVisa, housingRequired, otherInvolvement } =
          applicantStageTwo.data.reapplication;

        const colleges = [];
        for (let i = 1; i <= 3; i++) {
          const collegeName =
            applicantStageTwo.data.reapplication[`collegeUniversity${i}`];
          const yearsAttended =
            applicantStageTwo.data.reapplication[`yearsAttended${i}`];
          if (collegeName) {
            colleges.push({
              NameOfCollege: collegeName,
              YearsAttended: yearsAttended,
            });
          }
        }

        setInit({
          residenceVisa: residenceVisa || false,
          housingRequired: housingRequired || false,
          college:
            colleges.length > 0
              ? colleges
              : [{ NameOfCollege: "", YearsAttended: null }],
          otherInvolvement: otherInvolvement || "",
          isSaved: true,
          NextActiveStep: "",
        });
      }
    }, [applicantStageTwo]);

    const handleAddStudentInfo = (values) => {
      addStudentInfo(values, {
        onSuccess: () => {
          setActiveStep((prev) => prev + 1);
          window.scrollTo(0, 0);
        },
        onError: () => {
          toast.error("Something went wrong");
          window.scrollTo(0, 0);
        },
      });
    };

    const formik = useFormik({
      initialValues: init,
      validationSchema: getStudentInfoValidationSchema(),
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
          applicationId: localStorage.getItem("applicationId"),
          applicantId: applicantId,
          residenceVisa: value?.residenceVisa,
          housingRequired: value?.housingRequired,
          otherInvolvement: value?.otherInvolvement,
          isSaved: value?.isSaved,
          nextActiveStep: value?.NextActiveStep,
        };
        handleAddStudentInfo(valuesToSend);
      },
    });

    useEffect(() => {
      if (!applicationId) {
        const storedApplicationId = localStorage.getItem("applicationId");
        if (storedApplicationId) {
          setApplicationId(storedApplicationId);
        }
      }
    }, [formik?.values?.housingRequired]);

    useImperativeHandle(ref, () => ({
      submitForm: () => {
        formik.submitForm();
      },
    }));

    useEffect(() => {
      ref.current = formik;
    }, [ref, formik]);

    if (isLoading || isStageTwoLoading) {
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
