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
import {
  useAddApplicantStageThree,
  useAddFiles,
  useFetchApplicantStageThree,
} from "../../../Hooks/Appplicant";
import getValidationSchemaStep2 from "../../../ValidationSchemas/Step2ValidationSchema";

const RegisterFormStep2 = forwardRef(({ applicantId, showThree }, ref) => {
  const { data: applicantStageThree, refetch: refetchStageThree } =
    useFetchApplicantStageThree(applicantId, { enable: showThree });
  const { mutate: addApplicantStageThree } = useAddApplicantStageThree();
  const { mutate: addFiles } = useAddFiles();
  const applicationStart = localStorage.getItem("applicationStart");
  const applingAS = localStorage.getItem("applingAs");
  console.log("applicantStageThree", applicantStageThree);
  const [init, setInit] = useState({
    CurrentUniversityCountry:
      applicantStageThree?.data?.stage2?.currentUniversityCountry || "",
    SchoolCountry: applicantStageThree?.data?.stage2?.schoolCountry || "",
    CurrentUniversityCountry2:
      applicantStageThree?.data?.stage2?.currentUniversityCountry2 || "",
    SchoolCountry2: applicantStageThree?.data?.stage2?.schoolCountry2 || "",
    DiplomaType: applicantStageThree?.data?.stage2?.diplomaType || "",
    GraduationYear: applicantStageThree?.data?.stage2?.graduationYear
      ? new Date(applicantStageThree?.data?.stage2?.graduationYear)
          .toISOString()
          .split("T")[0]
      : "",
    ListAdvancedCources:
      applicantStageThree?.data?.stage2?.listAdvancedCources || "",
    DiplomaFile: applicantStageThree?.data?.diploma[0] || "",
    ActivitiesNotEnrolled:
      applicantStageThree?.data?.stage2?.activitiesNotEnrolled || "",
    applicantFiles: (applicantStageThree?.data?.applicantTest || []).map(
      (test) => ({
        testType: test.testType.toString(),
        academicDocument: test.academicDocument || "",
        dateTaken: new Date(test.dateTaken).toISOString().split("T")[0], 
        registrationNumber: test.registrationNumber || "",
        totalScore: test.totalScore || "",
      })
    ),

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
      DiplomaFile: applicantStageThree?.data?.diploma[0] || "",
      ActivitiesNotEnrolled:
        applicantStageThree?.data?.stage2?.activitiesNotEnrolled || "",
      CurrentUniversityCountry2:
        applicantStageThree?.data?.stage2?.currentUniversityCountry2 || "",
      SchoolCountry2: applicantStageThree?.data?.stage2?.schoolCountry2 || "",
      applicantFiles: (applicantStageThree?.data?.applicantTest || []).map(
        (test) => ({
          testType: test.testType.toString(),
          academicDocument: test.academicDocument || "",
          dateTaken: new Date(test.dateTaken).toISOString().split("T")[0],
          registrationNumber: test.registrationNumber || "",
          totalScore: test.totalScore || "",
        })
      ),

      PersonalStatement:
        applicantStageThree?.data?.stage2?.personalStatement || "",
      applingAs: localStorage.getItem("applyingAs"),
    };
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

  const handleAddFiles = (values) => {
    addFiles(values, {
      onSuccess: (data) => {
        console.log("submitteddddddddddddddddd");
      },
      onError: (error) => {
        console.error("An error occurred:", error);
      },
    });
  };
  useEffect(() => {
    console.log(init);
  }, [init]);

  const formik = useFormik({
    initialValues: init,
    validationSchema: getValidationSchemaStep2(applicationStart, applingAS),
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log("hiiii", values);
      const formData = new FormData();

      formData.append("ApplicantId", applicantId);

      if (values.CurrentUniversityCountry !== undefined) {
        formData.append(
          "CurrentUniversityCountry",
          values.CurrentUniversityCountry
        );
      }

      if (values.SchoolCountry !== undefined) {
        formData.append("SchoolCountry", values.SchoolCountry);
      }

      if (values.DiplomaType !== undefined) {
        formData.append("DiplomaType", values.DiplomaType);
      }

      if (values.GraduationYear !== undefined) {
        formData.append("GraduationYear", values.GraduationYear);
      }

      if (values.CurrentUniversityCountry2 !== undefined) {
        formData.append(
          "CurrentUniversityCountry2",
          values.CurrentUniversityCountry2
        );
      }
      if (values.SchoolCountry2 !== undefined) {
        formData.append("SchoolCountry2", values.SchoolCountry2);
      }

      if (values.ListAdvancedCources !== undefined) {
        formData.append("ListAdvancedCources", values.ListAdvancedCources);
      }

      if (values.ActivitiesNotEnrolled !== undefined) {
        formData.append("ActivitiesNotEnrolled", values.ActivitiesNotEnrolled);
      }
      if (values.PersonalStatement !== undefined) {
        formData.append("PersonalStatement", values.PersonalStatement);
      }

      // formData.append("DiplomaFile", values.DiplomaFile);

      if (values.DiplomaFile && "documentContent" in values.DiplomaFile) {
        const diplomaFileContent = values.DiplomaFile.documentContent;
        const blob = new Blob([atob(diplomaFileContent)], {
          type: values.DiplomaFile.contentType,
        });
        const file = new File([blob], values.DiplomaFile.fileName, {
          type: values.DiplomaFile.contentType,
        });

        formData.append("DiplomaFile", file);
      } else {
        formData.append("DiplomaFile", values.DiplomaFile);
      }

      const formDataFile = new FormData();

      values.applicantFiles.forEach((file, index) => {
        formDataFile.append(
          `applicantFiles[${index}].applicantId`,
          applicantId
        );
        formDataFile.append(`applicantFiles[${index}].testType`, file.testType);
        formDataFile.append(
          `applicantFiles[${index}].academicDocument`,
          file.academicDocument
        );
        formDataFile.append(
          `applicantFiles[${index}].dateTaken`,
          file.dateTaken
        );
        formDataFile.append(
          `applicantFiles[${index}].registrationNumber`,
          file.registrationNumber
        );
        formDataFile.append(
          `applicantFiles[${index}].totalScore`,
          file.totalScore
        );
      });

      handleAddFiles(formDataFile);
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
  console.log("step3333333333333333333", formik.values);
  return (
    <div className='form-subcontainer '>
      <FormikProvider value={formik} innerRef={ref}>
        <SubmitText />
        <AcadamicInformation />
        <AcadamicFiles />
        <PersonalStatement />
      </FormikProvider>
    </div>
  );
});

export default RegisterFormStep2;
