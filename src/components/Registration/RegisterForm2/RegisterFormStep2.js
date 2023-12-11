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
      setApplyingAs,
    },
    ref
  ) => {
    const { data: applicantStageThree, refetch: refetchStageThree } =
      useFetchApplicantStageThree(applicantId, applicationId, {
        enable: showThree,
      });
    const { mutate: addApplicantStageThree } = useAddApplicantStageThree();
    const { mutate: addFiles } = useAddFiles();
    console.log("app;", applicationStart);
    console.log("app;", applingAs);

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
      DiplomaFile: applicantStageThree?.data?.diploma[0] || "",
      ActivitiesNotEnrolled:
        applicantStageThree?.data?.stage2?.activitiesNotEnrolled || "",
      CurrentUniversityCountry2:
        applicantStageThree?.data?.stage2?.currentUniversityCountry2 || "",
      SchoolCountry2: applicantStageThree?.data?.stage2?.schoolCountry2 || "",
      applicantFiles:
        applicantStageThree?.data?.applicantTest > 0
          ? applicantStageThree?.data?.applicantTest?.map((test) => ({
              testType: test.testType.toString(),
              academicDocument: test.academicDocument || "",
              dateTaken: new Date(test.dateTaken).toISOString().split("T")[0],
              registrationNumber: test.registrationNumber || "",
              totalScore: test.totalScore || "",
            }))
          : [
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
      EmploymentStatus:
        applicantStageThree?.data?.stage2?.employmentStatus || "",
      EmploymentSector:
        applicantStageThree?.data?.stage2?.employmentSector || "",
      CompanyName: applicantStageThree?.data?.stage2?.companyName || "",
      JobTitle: applicantStageThree?.data?.stage2?.jobTitle || "",
      YearsOfExperience:
        applicantStageThree?.data?.stage2?.yearsOfExperience || "",
      ReferanceTitle: applicantStageThree?.data?.stage2?.referanceTitle || "",
      ReferanceName: applicantStageThree?.data?.stage2?.referanceName || "",
      ReferanceEmail: applicantStageThree?.data?.stage2?.referanceEmail || "",
      KnowTheReferance:
        applicantStageThree?.data?.stage2?.knowTheReferance || "",
      SendTheLetterRecomendation:
        applicantStageThree?.data?.stage2?.sendTheLetterRecomendation || "",
      ReadAndUnderstand:
        applicantStageThree?.data?.stage2?.readAndUnderstand || "",
      CV: applicantStageThree?.data?.stage2?.personalStatement || "",
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
        applicantFiles:
          applicantStageThree?.data?.applicantTest > 0
            ? applicantStageThree?.data?.applicantTest?.map((test) => ({
                testType: test.testType.toString(),
                academicDocument: test.academicDocument || "",
                dateTaken: new Date(test.dateTaken).toISOString().split("T")[0],
                registrationNumber: test.registrationNumber || "",
                totalScore: test.totalScore || "",
              }))
            : [
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
        EmploymentStatus:
          applicantStageThree?.data?.stage2?.employmentStatus || "",
        EmploymentSector:
          applicantStageThree?.data?.stage2?.employmentSector || "",
        CompanyName: applicantStageThree?.data?.stage2?.companyName || "",
        JobTitle: applicantStageThree?.data?.stage2?.jobTitle || "",
        YearsOfExperience:
          applicantStageThree?.data?.stage2?.yearsOfExperience || "",
        ReferanceTitle: applicantStageThree?.data?.stage2?.referanceTitle || "",
        ReferanceName: applicantStageThree?.data?.stage2?.referanceName || "",
        ReferanceEmail: applicantStageThree?.data?.stage2?.referanceEmail || "",
        KnowTheReferance:
          applicantStageThree?.data?.stage2?.knowTheReferance || "",
        SendTheLetterRecomendation:
          applicantStageThree?.data?.stage2?.sendTheLetterRecomendation || "",
        ReadAndUnderstand:
          applicantStageThree?.data?.stage2?.readAndUnderstand || "",
        CV: applicantStageThree?.data?.stage2?.personalStatement || "",
      };
      setInit(initialvalues);
    }, [applicantStageThree]);

    const handleAddStageThree = (values) => {
      console.log('valuessssssssssssssssssssssssssssssssss,values',values)
      addApplicantStageThree(values, {
        onSuccess: (data) => {
          console.log("submitteddddddddddddddd");

          setInit({});
        },
        onError: (error) => {
          console.error("An error occurred:", error);
          setInit({});
        },
      });
    };
    console.log("stage3", applicantStageThree);
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
    useEffect(()=>{
      refetchStageThree()
    },[])
    useEffect(() => {
      console.log(init);
    }, [init]);

    const formik = useFormik({
      initialValues: init,
      validationSchema: getValidationSchemaStep2(applicationStart, applingAs),
      enableReinitialize: true,
      onSubmit: (values) => {
        console.log("submit valuesssssssssssssssss", values);
        const formData = new FormData();

        formData.append("ApplicantId", applicantId);
        formData.append("ApplicationId", applicationId);

        if (values.EmploymentSector !== undefined) {
          formData.append("EmploymentSector", values.EmploymentSector);
        }
        if (values.EmploymentStatus !== undefined) {
          formData.append("EmploymentStatus", values.EmploymentStatus);
        }
        if (values.GraduationYear !== undefined) {
          formData.append("GraduationYear", values.GraduationYear);
        }
        if (values.JobTitle !== undefined) {
          formData.append("JobTitle", values.JobTitle);
        }
        if (values.KnowTheReferance !== undefined) {
          formData.append("KnowTheReferance", values.KnowTheReferance);
        }
        if (values.ReadAndUnderstand !== undefined) {
          formData.append("ReadAndUnderstand", values.ReadAndUnderstand);
        }
        if (values.ReferanceEmail !== undefined) {
          formData.append("ReferanceEmail", values.ReferanceEmail);
        }
        if (values.ReferanceTitle !== undefined) {
          formData.append("ReferanceTitle", values.ReferanceTitle);
        }
        if (values.ReferanceName !== undefined) {
          formData.append("ReferanceName", values.ReferanceName);
        }
        if (values.SendTheLetterRecomendation !== undefined) {
          formData.append(
            "SendTheLetterRecomendation",
            values.SendTheLetterRecomendation
          );
        }
        if (values.CV !== undefined) {
          formData.append("CV", values.CV);
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

        /**************form data for files */
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
      setApplyingAs(parseInt(localStorage.getItem("applingAs")));
      setApplicationStart(localStorage.getItem("applicationStart"));
    }, []);
    console.log("formik", formik);
    return (
      <div className='form-subcontainer '>
        <FormikProvider value={formik} innerRef={ref}>
          <SubmitText />
          <AcadamicInformation />
          <AcadamicFiles />
          {applicationStart === "1" ? (
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
