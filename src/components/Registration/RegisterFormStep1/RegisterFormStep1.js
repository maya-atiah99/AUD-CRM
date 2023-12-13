import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import PersonalInformation from "./PersonalInformation";
import MailingAddress from "./MailingAddress";
import ProgramInformation from "./ProgramInformation";
import ParentInformation from "./ParentInformation";
import Consent from "./Consent";
import { FormikProvider, useFormik } from "formik";
import step1ValidationSchema from "../../../ValidationSchemas/Step1ValidationSchema";
import { useAddApplicantStageTwo } from "../../../Hooks/Appplicant";
import getValidationSchemaStep1 from "../../../ValidationSchemas/Step1ValidationSchema";

const RegisterFormStep1 = forwardRef(
  (
    {
      fetchedData,
      applicantId,
      showInterest,
      applicationId,
      setApplicationStart,
      applingAs,
      applicationStart,
      setApplyingAs,
      activeStep,
      isSaved,
      setIsSaved,
    },
    ref
  ) => {
    const [init, setInit] = useState({});
    const { mutate: addApplicantStagetwo } = useAddApplicantStageTwo();

    useEffect(() => {
      if (showInterest) {
        const initialOne = {
          TitleId: fetchedData?.data?.applicant?.titleId || "",
          FirstName: fetchedData?.data?.applicant?.firstName || "",
          MiddleName: fetchedData?.data?.applicant?.middleName || "",
          LastName: fetchedData?.data?.applicant?.lastName || "",
          Email: fetchedData?.data?.applicant?.email || "",
          Nationality: fetchedData?.data?.applicant?.nationalityId || "",
          DOB: fetchedData?.data?.dob
            ? new Date(fetchedData?.data?.dob).toISOString().split("T")[0]
            : "",
          Gender: "",
          Mobile: fetchedData?.data?.applicant?.phoneNumber || "",
          ApplicantTelephone: "",

          ApplingAs: fetchedData?.data?.applicant?.applyingAs || "",
          SelectedTerm: "",
          ApplicationStart: "",
          ProgramOfInterest: "",
          CurrentPlaceOfStudy: "",
          GuardianRelation1: "",
          GuardianName1: "",
          GuardianMobile1: "",
          GuardianEmail1: "",
          GuardianRelation2: "",
          GuardianName2: "",
          GuardianMobile2: "",
          GuardianEmail2: "",
          AuthorizeToReleaseRecord: false,
          Authorize_GuardianName: "",
          Authorize_GuardianRelation: "",
          Authorize_Address: "",
          Authorize_Telephone: "",
          Address1: "",
          Country: "",
          CityState: "",
          Pobox: "",
          ZipCode: "",
          LegacyApplicant: false,
          LegacyFatherName: "",
          LegacyFatherProgram: "",
          LegacyFatherGraduationYear: "",
          LegacyFatherMobile: "",
          LegacyMotherName: "",
          LegacyMotherProgram: "",
          LegacyMotherGraduationYear: "",
          LegacyMotherMobile: "",
          PassportNumber: "",
          EmiratesId: "",
          Passport_File: "",
          EmiratesId_File: "",
          FamilyBook_File: "",
          EtibharaNo: "",
          FamilyBookNumber: "",
          FamilyNo: "",
          CityNo: "",
          Visiting_LevelOfStudy: "",
          StudentVisa: "",
          UAE_GCC_Resident: "",
          OnHouseCampus: "",
          MiddleEasternStudies: "",
          SemestersAtAUD: "",
        };
        setInit(initialOne);
      } else {
        const initialStage2 = {
          TitleId: fetchedData?.data?.stage1?.titleId || "",
          FirstName: fetchedData?.data?.stage1?.firstName || "",
          MiddleName: fetchedData?.data?.stage1?.middleName || "",
          LastName: fetchedData?.data?.stage1?.lastName || "",
          Email: fetchedData?.data?.stage1?.email || "",
          Nationality: fetchedData?.data?.stage1?.nationalityId || "",
          DOB: fetchedData?.data?.stage1?.dob
            ? new Date(fetchedData?.data?.stage1?.dob)
                .toISOString()
                .split("T")[0]
            : "",
          Gender: fetchedData?.data?.stage1?.gender || "",
          Mobile: fetchedData?.data?.stage1?.phoneNumber || "",
          ApplicantTelephone: fetchedData?.data?.stage1?.mobile || "",
          ApplingAs: fetchedData?.data?.application?.applyingAs || "",
          SelectedTerm: fetchedData?.data?.application?.term || "",
          ApplicationStart:
            fetchedData?.data?.application?.startYourApplication?.toString() ||
            "",
          ApplingAs: fetchedData?.data?.application?.applyingAs || "",
          ProgramOfInterest:
            fetchedData?.data?.stage2?.programApplicationId || "",
          CurrentPlaceOfStudy:
            fetchedData?.data?.stage2?.currentPlaceOfStudy || "",
          GuardianRelation1: fetchedData?.data?.stage2?.guardianRelation1 || "",
          GuardianName1: fetchedData?.data?.stage2?.guardianName1 || "",
          GuardianMobile1: fetchedData?.data?.stage2?.guardianMobile1 || "",
          GuardianEmail1: fetchedData?.data?.stage2?.guardianEmail1 || "",
          GuardianRelation2: fetchedData?.data?.stage2?.guardianRelation2 || "",
          GuardianName2: fetchedData?.data?.stage2?.guardianName2 || "",
          GuardianMobile2: fetchedData?.data?.stage2?.guardianMobile2 || "",
          GuardianEmail2: fetchedData?.data?.stage2?.guardianEmail2 || "",
          AuthorizeToReleaseRecord:
            fetchedData?.data?.stage2?.authorizeToReleaseRecord || "",
          Authorize_GuardianName:
            fetchedData?.data?.stage2?.authorize_GuardianName || "",
          Authorize_GuardianRelation:
            fetchedData?.data?.stage2?.authorize_GuardianRelation || "",
          Authorize_Address: fetchedData?.data?.stage2?.authorize_Address || "",
          Authorize_Telephone:
            fetchedData?.data?.stage2?.authorize_Telephone || "",
          Address1: fetchedData?.data?.address?.address1 || "",
          Country: fetchedData?.data?.address?.country || "",
          CityState: fetchedData?.data?.address?.cityState || "",
          Pobox: fetchedData?.data?.address?.pobox || "",
          ZipCode: fetchedData?.data?.address?.zipCode || "",
          LegacyApplicant: fetchedData?.data?.stage2?.legacyApplicant || "",
          LegacyFatherName: fetchedData?.data?.stage2?.legacyFatherName || "",
          LegacyFatherProgram:
            fetchedData?.data?.stage2?.legacyFatherProgram || "",
          LegacyFatherGraduationYear:
            fetchedData?.data?.stage2?.legacyFatherGraduationYear || "",
          LegacyFatherMobile:
            fetchedData?.data?.stage2?.legacyFatherMobile || "",
          LegacyMotherName: fetchedData?.data?.stage2?.legacyMotherName || "",
          LegacyMotherProgram:
            fetchedData?.data?.stage2?.legacyMotherProgram || "",
          LegacyMotherGraduationYear:
            fetchedData?.data?.stage2?.legacyMotherGraduationYear || "",
          LegacyMotherMobile:
            fetchedData?.data?.stage2?.legacyMotherMobile || "",
          PassportNumber: fetchedData?.data?.stage2?.legacyApplicant || "",
          EmiratesId: fetchedData?.data?.stage2?.passportNumber || "",
          Passport_File: fetchedData?.data?.stage2?.legacyApplicant || "",
          EmiratesId_File: fetchedData?.data?.stage2?.legacyApplicant || "",
          FamilyBook_File: fetchedData?.data?.stage2?.legacyApplicant || "",
          EtibharaNo: fetchedData?.data?.stage2?.legacyApplicant || "",
          FamilyBookNumber: fetchedData?.data?.stage2?.legacyApplicant || "",
          FamilyNo: fetchedData?.data?.stage2?.legacyApplicant || "",
          CityNo: fetchedData?.data?.stage2?.legacyApplicant || "",
          Visiting_LevelOfStudy:
            fetchedData?.data?.stage2?.visiting_LevelOfStudy || "",
          StudentVisa: fetchedData?.data?.stage2?.studentVisa || "",
          UAE_GCC_Resident: fetchedData?.data?.stage2?.uaE_GCC_Resident || "",
          OnHouseCampus: fetchedData?.data?.stage2?.onHouseCampus || "",
          MiddleEasternStudies:
            fetchedData?.data?.stage2?.middleEasternStudies || "",
          SemestersAtAUD: fetchedData?.data?.stage2?.semestersAtAUD || "",
        };
        setInit(initialStage2);
      }
    }, [fetchedData]);

    const handleAddStageTwo = (values) => {
      console.log("entered hereeeeeeeeeeeeeeeeee");
      console.log(values);
      addApplicantStagetwo(values, {
        onSuccess: (data) => {
          setInit({});
          setIsSaved(true);
        },
        onError: (error) => {
          console.error("An error occurred:", error);
          setInit({});
        },
      });
    };

    useEffect(() => {
      if (showInterest) {
        localStorage.setItem(
          "applicationStart",
          fetchedData?.data?.applicationStart?.toString()
        );
      } else {
        localStorage.setItem(
          "applicationStart",
          fetchedData?.data?.application?.startYourApplication?.toString()
        );
        localStorage.setItem(
          "applingAs",
          fetchedData?.data?.application?.applyingAs
        );
      }
    }, [fetchedData, showInterest]);

    // useEffect(() => {
    //   console.log(init);
    // }, [init]);
    console.log(isSaved);
    const formik = useFormik({
      initialValues: init,
      validationSchema: getValidationSchemaStep1(applicationStart, applingAs),
      enableReinitialize: true,
      onSubmit: (values) => {
        console.log("entered dubmittttttttttttttttttt hereeeeeeeeeeeeeeeeee");

        localStorage.setItem("applingAs", formik.values?.ApplingAs);
        localStorage.setItem(
          "applicationStart",
          formik.values?.ApplicationStart
        );
        setApplicationStart(formik.values?.ApplicationStart);
        setApplyingAs(formik.values?.ApplingAs);
        const formData = new FormData();
        formData.append("ApplicantId", applicantId);
        formData.append("ApplicationId", applicationId);
        formData.append("IsSaved", isSaved);
        formData.append("NextActiveStep", activeStep + 1);
        for (const key in values) {
          if (values[key] !== undefined || values[key] !== "") {
            if (key === "DOB") {
              formData.append(
                key,
                new Date(values[key]).toISOString().split("T")[0]
              );
            } else {
              formData.append(key, values[key]);
            }
          }
        }
        handleAddStageTwo(formData);
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
      localStorage.setItem("applicationStart", formik.values?.applicationStart);
      localStorage.setItem("applingAs", formik.values?.applingAs);
    }, [formik.values]);

    return (
      <div className='form-subcontainer'>
        <FormikProvider
          value={formik}
          innerRef={ref}
          validationSchema={step1ValidationSchema}
        >
          <PersonalInformation />
          <MailingAddress />
          <ProgramInformation fetchedData={fetchedData} />
          <ParentInformation />
          <Consent />
        </FormikProvider>
      </div>
    );
  }
);

export default RegisterFormStep1;
