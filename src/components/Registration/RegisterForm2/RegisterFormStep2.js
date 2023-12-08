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
import Reference from "../RegisterFormStep1/Reference";
import WorkExperience from "../RegisterFormStep1/WorkExperience";

const RegisterFormStep2 = forwardRef(
  (
    {
      applicantId,
      showThree,
      applicationId,
      setApplicationStart,
      applingAs,
      applicationStart,
      setApplingAs,
    },
    ref
  ) => {
    const { data: applicantStageThree, refetch: refetchStageThree } =
      useFetchApplicantStageThree(applicantId, { enable: showThree });
    const { mutate: addApplicantStageThree } = useAddApplicantStageThree();
    const { mutate: addFiles } = useAddFiles();
    console.log("app;", applicationStart);
    console.log("app;", applingAs);

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
      applicantFiles: applicantStageThree?.data?.applicantTest
        ? applicantStageThree?.data?.applicantTest?.map((test) => ({
            testType: test.testType.toString(),
            academicDocument: test.academicDocument || "",
            dateTaken: new Date(test.dateTaken).toISOString().split("T")[0],
            registrationNumber: test.registrationNumber || "",
            totalScore: test.totalScore || "",
          }))
        : [
            {
              testType: " test.testType.toString()",
              academicDocument: "",
              dateTaken: "",
              registrationNumber: "",
              totalScore: "",
            },
          ],
      PersonalStatement:
        applicantStageThree?.data?.stage2?.personalStatement || "",
      applingAs: localStorage.getItem("applyingAs"),
      EmploymentStatus: "",
      EmploymentSector: "",
      CompanyName: "",
      JobTitle: "",
      YearsOfExperience: "",
      ReferanceTitle: "",
      ReferanceName: "",
      ReferanceEmail: "",
      KnowTheReferance: "",
      SendTheLetterRecomendation: "",
      ReadAndUnderstand: "",
      CV: "",
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
        applicantFiles: applicantStageThree?.data?.applicantTest
          ? applicantStageThree?.data?.applicantTest?.map((test) => ({
              testType: test.testType.toString(),
              academicDocument: test.academicDocument || "",
              dateTaken: new Date(test.dateTaken).toISOString().split("T")[0],
              registrationNumber: test.registrationNumber || "",
              totalScore: test.totalScore || "",
            }))
          : [
              {
                testType: " test.testType.toString()",
                academicDocument: "",
                dateTaken: "",
                registrationNumber: "",
                totalScore: "",
              },
            ],

        PersonalStatement:
          applicantStageThree?.data?.stage2?.personalStatement || "",
        applingAs: localStorage.getItem("applyingAs"),
        EmploymentStatus: "",
        EmploymentSector: "",
        CompanyName: "",
        JobTitle: "",
        YearsOfExperience: "",
        ReferanceTitle: "",
        ReferanceName: "",
        ReferanceEmail: "",
        KnowTheReferance: "",
        SendTheLetterRecomendation: "",
        ReadAndUnderstand: "",
        CV: "",
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
      validationSchema: getValidationSchemaStep2(applicationStart, applingAs),
      enableReinitialize: true,
      onSubmit: (values) => {
        console.log("hiiii", values);
        const formData = new FormData();

        formData.append("ApplicantId", applicantId);
        formData.append("ApplicationId", applicationId);

        for (const key in values) {
          console.log("key", key);
          if (
            (values[key] !== undefined || values[key] !== "") &&
            key !== "DiplomaFile"
          ) {
            formData.append(key, values[key]);
          }
        }

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
          formDataFile.append(
            `applicantFiles[${index}].testType`,
            file.testType
          );
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

    useEffect(() => {
      setApplingAs(parseInt(localStorage.getItem("applingAs")));
      setApplicationStart(localStorage.getItem("applicationStart"));
    }, []);
    
    return (
      <div className='form-subcontainer '>
        <FormikProvider value={formik} innerRef={ref}>
          <SubmitText />
          <AcadamicInformation />
          <AcadamicFiles />
          {applingAs === 5 ? (
            <>
              <WorkExperience />
              <Reference />
            </>
          ) : (
            ""
          )}
          <PersonalStatement />
        </FormikProvider>
      </div>
    );
  }
);

export default RegisterFormStep2;
