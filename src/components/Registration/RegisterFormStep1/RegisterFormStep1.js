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
import toast from "react-hot-toast";

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
      isView,
      setActiveStep,
    },
    ref
  ) => {
    const [init, setInit] = useState({});
    const { mutate: addApplicantStagetwo } = useAddApplicantStageTwo();
    console.log("mxkdsjcnkdsc", fetchedData);
    useEffect(() => {
      if (showInterest) {
        const initialOne = {
          isSaved: true,
          NextActiveStep: "",
          TitleId: fetchedData?.data?.applicant?.titleId || "",
          FirstName: fetchedData?.data?.applicant?.firstName || "",
          MiddleName: fetchedData?.data?.applicant?.middleName || "",
          LastName: fetchedData?.data?.applicant?.lastName || "",
          Email: fetchedData?.data?.applicant?.email || "",
          Nationality: fetchedData?.data?.applicant?.nationalityId || "",
          DOB: fetchedData?.data?.dob
            ? fetchedData?.data?.dob?.substring(0, 10)
            : "",
          Gender: "",
          Mobile: fetchedData?.data?.applicant?.mobile || "",
          ApplicantTelephone: "",
          WhatsAppNumber: "",
          ApplingAs: fetchedData?.data?.application?.applyingAs,
          SelectedTerm: "",
          ApplicationStart:
            fetchedData?.data?.application?.startYourApplication.toString() ||
            "",
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
          isSaved: true,
          NextActiveStep: "",
          TitleId: fetchedData?.data?.stage1?.titleId || "",
          FirstName: fetchedData?.data?.stage1?.firstName || "",
          MiddleName: fetchedData?.data?.stage1?.middleName || "",
          LastName: fetchedData?.data?.stage1?.lastName || "",
          Email: fetchedData?.data?.stage1?.email || "",
          Nationality: fetchedData?.data?.stage1?.nationalityId || "",
          DOB: fetchedData?.data?.stage1?.dob
            ? fetchedData?.data?.stage1?.dob?.substring(0, 10)
            : "",
          Gender: fetchedData?.data?.stage1?.gender || "",
          Mobile: fetchedData?.data?.stage1?.mobile || "",
          WhatsAppNumber: fetchedData?.data?.stage1?.whatsAppNumber || "",
          ApplicantTelephone: fetchedData?.data?.stage1?.phoneNumber || "",
          ApplingAs: fetchedData?.data?.application?.applyingAs,
          SelectedTerm: fetchedData?.data?.application?.term || "",
          ApplicationStart:
            fetchedData?.data?.application?.startYourApplication?.toString() ||
            "",
          ProgramOfInterest:
            fetchedData?.data?.application?.programOfInterest || "",
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
          PassportNumber: fetchedData?.data?.stage1?.passportNumber || "",
          EmiratesId: fetchedData?.data?.stage1?.emiratesId || "",
          Passport_File: fetchedData?.data?.passport || "",
          EmiratesId_File: fetchedData?.data?.emiratesID || "",
          FamilyBook_File: fetchedData?.data?.familyBook || "",
          EtibharaNo: fetchedData?.data?.stage1?.etibharaNo || "",
          FamilyBookNumber: fetchedData?.data?.stage1?.familyBookNumber || "",
          FamilyNo: fetchedData?.data?.stage1?.familyNo || "",
          CityNo: fetchedData?.data?.stage1?.cityNo || "",
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
      addApplicantStagetwo(values, {
        onSuccess: (data) => {
        
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setInit({});
          window.scrollTo(0, 0);

        },
        onError: (error) => {
          window.scrollTo(0, 0);
          console.error("An error occurred:", error);
          toast.error("Something went wrong");
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

    const formik = useFormik({
      initialValues: init,
      validationSchema: getValidationSchemaStep1(applicationStart, applingAs),
      enableReinitialize: true,
      onSubmit: (values) => {
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

        const FieldsAppend = [
          "isSaved",
          "NextActiveStep",
          "TitleId",
          "FirstName",
          "MiddleName",
          "LastName",
          "Email",
          "Nationality",
          "DOB",
          "Gender",
          "Mobile",
          "WhatsAppNumber",
          "ApplicantTelephone",
          "SelectedTerm",
          "ApplicationStart",
          "ProgramOfInterest",
          "CurrentPlaceOfStudy",
          "GuardianRelation1",
          "GuardianName1",
          "GuardianMobile1",
          "GuardianEmail1",
          "GuardianRelation2",
          "GuardianName2",
          "GuardianMobile2",
          "GuardianEmail2",
          "AuthorizeToReleaseRecord",
          "Authorize_GuardianName",
          "Authorize_GuardianRelation",
          "Authorize_Address",
          "Authorize_Telephone",
          "Address1",
          "Country",
          "CityState",
          "Pobox",
          "ZipCode",
          "LegacyApplicant",
          "LegacyFatherName",
          "LegacyFatherProgram",
          "LegacyFatherGraduationYear",
          "LegacyFatherMobile",
          "LegacyMotherName",
          "LegacyMotherProgram",
          "LegacyMotherGraduationYear",
          "LegacyMotherMobile",
          "PassportNumber",
          "EmiratesId",
          "EtibharaNo",
          "FamilyBookNumber",
          "FamilyNo",
          "CityNo",
          "Visiting_LevelOfStudy",
          "StudentVisa",
          "UAE_GCC_Resident",
          "OnHouseCampus",
          "MiddleEasternStudies",
          "SemestersAtAUD",
        ];

        FieldsAppend.forEach((field) => {
          if (values[field] !== undefined || values[field] !== "") {
            if (field === "DOB") {
              formData.append(field, values[field].substring(0, 10));
            } else {
              formData.append(field, values[field]);
            }
          }
        });

        const fileToAppend = [
          "FamilyBook_File",
          "EmiratesId_File",
          "Passport_File",
        ];

        fileToAppend.forEach((key) => {
          if (!values[key]?.fileName || values[key] !== "") {
            formData.append(key, values[key]);
          }
        });

        if (values.ApplingAs == null) {
          formData.append("ApplingAs", "");
        } else {
          formData.append("ApplingAs", values.ApplingAs);
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
      localStorage.setItem("applicationStart", formik.values?.ApplicationStart);
      localStorage.setItem("applingAs", formik.values?.ApplingAs);
      setApplicationStart(formik.values?.ApplicationStart);
      setApplyingAs(formik.values?.ApplingAs);
    }, [formik.values?.ApplicationStart, formik.values?.ApplingAs]);
    console.log("formikxsdcsd", formik.values);
    return (
      <div className='form-subcontainer'>
        <FormikProvider
          value={formik}
          innerRef={ref}
          validationSchema={step1ValidationSchema}
        >
          <PersonalInformation isView={isView} />
          <MailingAddress isView={isView} />
          <ProgramInformation fetchedData={fetchedData} isView={isView} />
          <ParentInformation isView={isView} />
          <Consent isView={isView} />
        </FormikProvider>
      </div>
    );
  }
);

export default RegisterFormStep1;
