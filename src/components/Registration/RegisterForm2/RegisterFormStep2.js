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
import TranscriptMailingAddress from "./TranscriptMailingAddress";
import AttachCV from "./AttachCV";

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
      isView,
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
        NextActiveStep: "",
        CurrentUniversityCountry:
          applicantStageThree?.data?.stage2?.currentUniversityCountry || "",
        SchoolCountry: applicantStageThree?.data?.stage2?.schoolCountry || "",
        DiplomaType: applicantStageThree?.data?.stage2?.diplomaType || "",
        GraduationYear: applicantStageThree?.data?.stage2?.graduationYear
          ? applicantStageThree?.data?.stage2?.graduationYear?.substring(0, 10)
          : "",
        ListAdvancedCources:
          applicantStageThree?.data?.stage2?.listAdvancedCources || "",
        DiplomaFile:
          (applicantStageThree?.data?.diploma &&
            applicantStageThree?.data?.diploma[0]) ||
          "",
        ActivitiesNotEnrolled:
          applicantStageThree?.data?.stage2?.activitiesNotEnrolled || "",
        CurrentUniversityCountry2:
          applicantStageThree?.data?.stage2?.currentUniversityCountry2 || "",
        SchoolCountry2: applicantStageThree?.data?.stage2?.schoolCountry2 || "",
        applicantFiles:
          applicantStageThree?.data?.applicantTest &&
          applicantStageThree?.data?.applicantTest.length > 0
            ? applicantStageThree?.data?.applicantTest?.map((test) => ({
                testType: test.testType.toString(),
                academicDocument:
                  test.files && test.files[0] ? test.files[0] : null,
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
        CV: applicantStageThree?.data?.cv || "",
        StudyBoardAdvisor:
          applicantStageThree?.data?.stage2?.studyBoardAdvisor || "",
        RegistrarEmail: applicantStageThree?.data?.stage2?.registrarEmail || "",
        RegistrarPhone: applicantStageThree?.data?.stage2?.registrarPhone || "",
        SchoolState: applicantStageThree?.data?.stage2?.schoolState || "",
      };
      setInit(initialvalues);
    }, [applicantStageThree]);

    const handleAddStageThree = (values) => {
      console.log("entered handleAddStageThree")
      
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
      console.log("sncdjkcnkds", values);
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

    useEffect(() => {
      console.log(init);
    }, [init]);
    console.log("applicant33333333", applicantStageThree);
    const formik = useFormik({
      initialValues: init,
      validationSchema: getValidationSchemaStep2(applicationStart, applingAs),
      enableReinitialize: true,
      onSubmit: (values) => {
        console.log("entered submit")
        const formData = new FormData();
        formData.append("ApplicantId", applicantId);
        formData.append("ApplicationId", applicationId);
        formData.append("IsSaved", formik.values.isSaved);
        formData.append("NextActiveStep", formik.values.NextActiveStep);

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
          "GraduationYear",
          "StudyBoardAdvisor",
          "RegistrarEmail",
          "RegistrarPhone",
          "SchoolState",
        ];

        fieldsToAppend.forEach((field) => {
          formData.append(field, values[field]);
        });

        const hasStageThreeData = Object.values(fieldsToAppend).some(
          (field) => !!values[field]
        );
        // Handle CV

        if (!values.CV.fileName) {
          formData.append("CV", values.CV);
        }
        // Handle DiplomaFile
        // if (values.DiplomaFile && "documentContent" in values.DiplomaFile) {
        //   const diplomaFileContent = values.DiplomaFile.documentContent;
        //   const blob = new Blob([atob(diplomaFileContent)], {
        //     type: values.DiplomaFile.contentType,
        //   });
        //   const file = new File([blob], values.DiplomaFile.fileName, {
        //     type: values.DiplomaFile.contentType,
        //   });

        //   formData.append("DiplomaFile", file);
        // } else {
        //   formData.append("DiplomaFile", values.DiplomaFile);
        // }
        if (!values?.DiplomaFile?.fileName) {
          formData.append("DiplomaFile", values.DiplomaFile);
        }
        /*********************Appliacnt files post */
        if (
          values.applicantFiles?.length > 0 &&
          values.applicantFiles.some((file) => !!file.testType)
        ) {
          const formDataFiles = new FormData();
          values.applicantFiles.forEach((file, index) => {
            formDataFiles.append(
              `applicantFiles[${index}].applicantId`,
              applicantId
            );
            formDataFiles.append(
              `applicantFiles[${index}].applicationId`,
              applicationId
            );
            formDataFiles.append(
              `applicantFiles[${index}].testType`,
              file.testType
            );

            if (!file.academicDocument.fileName) {
              formDataFiles.append(
                `applicantFiles[${index}].academicDocument`,
                file.academicDocument
              );
            }
            formDataFiles.append(
              `applicantFiles[${index}].dateTaken`,
              file.dateTaken
            );
            formDataFiles.append(
              `applicantFiles[${index}].registrationNumber`,
              file.registrationNumber
            );
            formDataFiles.append(
              `applicantFiles[${index}].totalScore`,
              file.totalScore
            );
          });

          handleAddFiles(formDataFiles);
        }

        if (hasStageThreeData) {
          handleAddStageThree(formData);
        }
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
    console.log(
      "values?.DiplomaFile?.fileName",
      formik.values?.DiplomaFile?.fileName
    );
    console.log("formik stage three", formik);
    return (
      <div className='form-subcontainer'>
        <FormikProvider value={formik} innerRef={ref}>
          <SubmitText />
          <AcadamicInformation isView={isView} data={applicantStageThree} />
          {applingAs == 6 || applingAs == 8 ? (
            <TranscriptMailingAddress isView={isView} />
          ) : (
            ""
          )}
          {applingAs !== 8 ? (
            <>
              <AcadamicFiles isView={isView} />
            </>
          ) : (
            ""
          )}

          {applicationStart === "1" ? (
            <>
              <WorkExperience isView={isView} />
              <Reference isView={isView} applingAs={applingAs} />
            </>
          ) : (
            ""
          )}

          {applingAs === 8 ? (
            <>
              <AttachCV isView={isView} />
              <Reference isView={isView} applingAs={applingAs} />
            </>
          ) : (
            ""
          )}

          {/* {applingAs !== 0 && applingAs !== 7 ? (
            <PersonalStatement isView={isView} />
          ) : (
            ""
          )} */}
          <PersonalStatement isView={isView} />
        </FormikProvider>
      </div>
    );
  }
);

export default RegisterFormStep2;
