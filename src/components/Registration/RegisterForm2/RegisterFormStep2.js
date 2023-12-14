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
      applicationId,
      setApplicationStart,
      applingAs,
      applicationStart,
      setApplyingAs,
      activeStep,
    },
    ref
  ) => {
    const { data: applicantStageThree, refetch: refetchStageThree } =
      useFetchApplicantStageThree(applicantId, applicationId);
    const { mutate: addApplicantStageThree } = useAddApplicantStageThree();
    const { mutate: addFiles } = useAddFiles();

    const [init, setInit] = useState({});
    useEffect(() => {
      const initialvalues = {
        isSaved: true,
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
          applicantStageThree?.data?.applicantTest.length > 0
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
          applicantStageThree?.data?.applicantReferance?.employmentStatus || "",
        EmploymentSector:
          applicantStageThree?.data?.applicantReferance?.employmentSector || "",
        CompanyName:
          applicantStageThree?.data?.applicantReferance?.companyName || "",
        JobTitle: applicantStageThree?.data?.applicantReferance?.jobTitle || "",
        YearsOfExperience:
          applicantStageThree?.data?.applicantReferance?.yearsOfExperience ||
          "",
        ReferanceTitle:
          applicantStageThree?.data?.applicantReferance?.referanceTitle || "",
        ReferanceName:
          applicantStageThree?.data?.applicantReferance?.referanceName || "",
        ReferanceEmail:
          applicantStageThree?.data?.applicantReferance?.referanceEmail || "",
        KnowTheReferance:
          applicantStageThree?.data?.applicantReferance?.knowTheReferance || "",
        SendTheLetterRecomendation:
          applicantStageThree?.data?.applicantReferance
            ?.sendTheLetterRecomendation || "",
        ReadAndUnderstand:
          applicantStageThree?.data?.applicantReferance?.readAndUnderstand ||
          "",
        CV:
          applicantStageThree?.data?.applicantReferance?.personalStatement ||
          "",
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
    console.log("stage3", applicantStageThree);
    const handleAddFiles = (values) => {
      addFiles(values, {
        onSuccess: (data) => {},
        onError: (error) => {
          console.error("An error occurred:", error);
        },
      });
    };
    useEffect(() => {
      refetchStageThree();
    }, []);

    // useEffect(() => {
    //   console.log(init);
    // }, [init]);

    const formik = useFormik({
      initialValues: init,
      validationSchema: getValidationSchemaStep2(applicationStart, applingAs),
      enableReinitialize: true,
      onSubmit: (values) => {
        console.log("submit valuessssssss", values);
        const formData = new FormData();
        formData.append("ApplicantId", applicantId);
        formData.append("ApplicationId", applicationId);
        formData.append("IsSaved", formik.values.isSaved);
        formData.append("NextActiveStep", activeStep + 1);
        function appendIfDefined(formData, key, value) {
          if (value !== undefined) {
            formData.append(key, value);
          }
        }
        const fieldsToAppend = [
          "CurrentUniversityCountry",
          "SchoolCountry",
          "DiplomaType",
          "GraduationYear",
          "ListAdvancedCources",
          "ActivitiesNotEnrolled",
          "CurrentUniversityCountry2",
          "SchoolCountry2",
          "EmploymentSector",
          "EmploymentStatus",
          "JobTitle",
          "KnowTheReferance",
          "ReadAndUnderstand",
          "ReferanceEmail",
          "ReferanceTitle",
          "ReferanceName",
          "SendTheLetterRecomendation",
          "PersonalStatement",
          "CompanyName",
          "YearsOfExperience",
        ];

        fieldsToAppend.forEach((field) => {
          appendIfDefined(formData, field, values[field]);
        });

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
            `applicantFiles[${index}].applicationId`,
            applicationId
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
        console.log("form data", formData);
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
