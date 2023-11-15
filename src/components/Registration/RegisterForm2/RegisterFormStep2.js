import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import SubmitText from "./SubmitText";
import AcadamicFiles from "./AcadamicFiles";
import AcadamicInformation from "./AcadamicInformation";
import PersonalStatement from "./PersonalStatement";
import { FormikProvider, useFormik } from "formik";
import Step2ValidationSchema from "../../../ValidationSchemas/Step2ValidationSchema";
import {
  useAddApplicantStageThree,
  useFetchApplicantStageThree,
} from "../../../Hooks/Appplicant";

const RegisterFormStep2 = forwardRef(({ applicantId, showThree }, ref) => {
  const { data: applicantStageThree, refetch: refetchStageThree } =
    useFetchApplicantStageThree(applicantId, { enable: showThree });
  const { mutate: addApplicantStageThree } = useAddApplicantStageThree();

  console.log("applicantStageThree 1", applicantStageThree);
  const [init, setInit] = useState({
    CurrentUniversityCountry:
      applicantStageThree?.data?.stage2?.currentUniversityCountry || "",
    SchoolCountry: applicantStageThree?.data?.stage2?.schoolCountry || "",
    DiplomaType: applicantStageThree?.data?.stage2?.diplomaType || "",
    GraduationYear: applicantStageThree?.data?.stage2?.graduationYear
      ? new Date(applicantStageThree?.data?.stage2?.graduationYear)
          .toISOString()
          .split("T")[0]
      : "",
    ListAdvancedCources:
      applicantStageThree?.data?.stage2?.listAdvancedCources || "",
    DiplomaFile: applicantStageThree?.data?.diploma?.fileName || "",
    ActivitiesNotEnrolled:
      applicantStageThree?.data?.stage2?.activitiesNotEnrolled || "",
    applicantFiles: applicantStageThree?.data?.stage2?.applicantFiles || [
      {
        testType: "",
        academicDocument: "",
        dateTaken: "",
        registrationNumber: "",
        totalScore: "",
      },
    ],
    PersonalStatement:
      applicantStageThree?.data?.stage2?.personalStatement || "",
    applingAs: localStorage.getItem("applyingAs"),
  });

  useEffect(() => {
    const initialvalues = {
      CurrentUniversityCountry:
        applicantStageThree?.data?.stage2?.currentUniversityCountry || "",
      SchoolCountry: applicantStageThree?.data?.stage2?.schoolCountry || "",
      DiplomaType: applicantStageThree?.data?.stage2?.diplomaType || "",
      GraduationYear: applicantStageThree?.data?.stage2?.graduationYear
        ? new Date(applicantStageThree?.data?.stage2?.graduationYear)
            .toISOString()
            .split("T")[0]
        : "",
      ListAdvancedCources:
        applicantStageThree?.data?.stage2?.listAdvancedCources || "",
      DiplomaFile: applicantStageThree?.data?.diploma?.fileName || "" || "",
      ActivitiesNotEnrolled:
        applicantStageThree?.data?.stage2?.activitiesNotEnrolled || "",
      applicantFiles: applicantStageThree?.data?.stage2?.applicantFiles || [
        {
          testType: "",
          academicDocument: "",
          dateTaken: "",
          registrationNumber: "",
          totalScore: "",
        },
      ],
      PersonalStatement:
        applicantStageThree?.data?.stage2?.personalStatement || "",
      applingAs: localStorage.getItem("applyingAs"),
    };
    console.log("cdscscsdcdscdsc", initialvalues);
    setInit(initialvalues);
  }, [applicantStageThree]);

  const handleAddStageThree = (values) => {
    addApplicantStageThree(values, {
      onSuccess: (data) => {
        setInit({});
      },
      onError: (error) => {
        console.error("An error occurred:", error);
        setInit({});
      },
    });
  };
  useEffect(() => {
    console.log(init);
  }, [init]);

  const formik = useFormik({
    initialValues: init,
    validationSchema: Step2ValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("hiiii", values);
      const formData = new FormData();
      formData.append("ApplicantId", applicantId);
      formData.append(
        "CurrentUniversityCountry",
        values.CurrentUniversityCountry
      );
      formData.append("SchoolCountry", values.SchoolCountry);
      formData.append("DiplomaType", values.DiplomaType);
      formData.append("GraduationYear", values.GraduationYear);
      if (values.ListAdvancedCources === "") {
        formData.append("ListAdvancedCources", undefined);
      } else {
        formData.append("ListAdvancedCources", values.ListAdvancedCources);
      }
      if (values.ActivitiesNotEnrolled === "") {
        formData.append("ActivitiesNotEnrolled", undefined);
      } else {
        formData.append("ActivitiesNotEnrolled", values.ActivitiesNotEnrolled);
      }
      if (values.DiplomaFile === "") {
        formData.append("DiplomaFile", undefined);
      } else {
        formData.append("DiplomaFile", values.DiplomaFile);
      }
      if (values.PersonalStatement === "") {
        formData.append("PersonalStatement", undefined);
      } else {
        formData.append("PersonalStatement", values.PersonalStatement);
      }
      formData.append("applicantFiles", values.applicantFiles);
      // var i = 0;
      // //someting.map{}
      // formData.append(`applicantFiles[${i}].academicDocument`, values.DiplomaFile);
      // formData.append(`applicantFiles[${i}].academicDocument`, values.DiplomaFile);
      // formData.append(`applicantFiles[${i}].academicDocument`, values.DiplomaFile);
      // formData.append(`applicantFiles[${i}].academicDocument`, values.DiplomaFile);
      // formData.append(`applicantFiles[${i}].academicDocument`, values.DiplomaFile);
      handleAddStageThree(formData);
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

  // useEffect(() => {
  //   refetchStageThree();
  // }, []);
  console.log("formik step 2", formik.values);
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
