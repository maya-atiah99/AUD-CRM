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
import { useAddApplicantStageThree } from "../../../Hooks/Appplicant";
const RegisterFormStep2 = forwardRef(({ applicantId, fetchedData }, ref) => {
  const [init, setInit] = useState({
    CurrentUniversityCountry:
      fetchedData?.data?.stage2?.currentUniversityCountry || "",
    SchoolCountry: fetchedData?.data?.stage2?.schoolCountry || "",
    DiplomaType: fetchedData?.data?.stage2?.diplomaType || "",
    GraduationYear: fetchedData?.data?.stage2?.graduationYear
      ? new Date(fetchedData?.data?.stage2?.graduationYear)
          .toISOString()
          .split("T")[0]
      : "",
    ListAdvancedCources: fetchedData?.data?.stage2?.listAdvancedCources || "",
    DiplomaFile: fetchedData?.data?.stage2?.diplomaDocumentId || "",
    ActivitiesNotEnrolled:
      fetchedData?.data?.stage2?.activitiesNotEnrolled || "",
    applicantFiles: fetchedData?.data?.stage2?.applicantFiles || [
      {
        testType: "",
        academicDocument: "",
        dateTaken: "",
        registrationNumber: "",
        totalScore: "",
      },
    ],
    PersonalStatement: fetchedData?.data?.stage2?.personalStatement || "",
  });
  const { mutate: addApplicantStageThree } = useAddApplicantStageThree();

  useEffect(() => {
    const initialvalues = {
      CurrentUniversityCountry:
        fetchedData?.data?.stage2?.currentUniversityCountry || "",
      SchoolCountry: fetchedData?.data?.stage2?.schoolCountry || "",
      DiplomaType: fetchedData?.data?.stage2?.diplomaType || "",
      GraduationYear: fetchedData?.data?.stage2?.graduationYear
        ? new Date(fetchedData?.data?.stage2?.graduationYear)
            .toISOString()
            .split("T")[0]
        : "",
      ListAdvancedCources: fetchedData?.data?.stage2?.listAdvancedCources || "",
      DiplomaFile: fetchedData?.data?.stage2?.diplomaDocumentId || "",
      ActivitiesNotEnrolled:
        fetchedData?.data?.stage2?.activitiesNotEnrolled || "",
      applicantFiles: fetchedData?.data?.stage2?.applicantFiles || [
        {
          testType: "",
          academicDocument: "",
          dateTaken: "",
          registrationNumber: "",
          totalScore: "",
        },
      ],
      PersonalStatement: fetchedData?.data?.stage2?.personalStatement || "",
    };
    setInit(initialvalues);
  }, [fetchedData]);

  console.log("inirrrrrrrrr", init.CurrentUniversityCountry);
  const handleAddStageThree = (values) => {
    addApplicantStageThree(values, {
      onSuccess: (data) => {
        setInit({});
      },
      onError: (error) => {
        console.error("An error occurred:", error);
        setInit({})
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
      formData.append("ListAdvancedCources", values.ListAdvancedCources);
      formData.append("ActivitiesNotEnrolled", values.ActivitiesNotEnrolled);
      formData.append("PersonalStatement", values.PersonalStatement);
      formData.append("DiplomaFile", values.DiplomaFile);
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

  console.log("twooo", formik.values);
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
