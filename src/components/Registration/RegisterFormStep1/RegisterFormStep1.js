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
import ValidationSchema from "../../../ValidationSchemas/Step1ValidationSchema";
import { FormikProvider, useFormik } from "formik";
import step1ValidationSchema from "../../../ValidationSchemas/Step1ValidationSchema";
import { useAddApplicantStageTwo } from "../../../Hooks/Appplicant";

const RegisterFormStep1 = forwardRef(
  ({ fetchedData, applicantId, showInterest }, ref) => {
    const [init, setInit] = useState({});
    const { mutate: addApplicantStagetwo } = useAddApplicantStageTwo();
    useEffect(() => {
      if (showInterest) {
        const initialOne = {
          firstName: fetchedData?.data?.firstName || "",
          middleName: fetchedData?.data?.middleName || "",
          lastName: fetchedData?.data?.lastName || "",
          email: fetchedData?.data?.email || "",
          nationality: fetchedData?.data?.nationalityId || "",
          mobile: fetchedData?.data?.phoneNumber || "",
          telephone: fetchedData?.data?.telephone || "",
          dob: fetchedData?.data?.dob || "",
          gender: "",
          titleId: fetchedData?.data?.titleId || "",
          address: "",
          cityState: "",
          country: "",
          pobox: "",
          zipCode: "",
          applingAs: "",
          programOfInterest: "",
          currentPlaceOfStudy: "",
          guardianMobile1: "",
          guardianRelation1: "",
          guardianName1: "",
          guardianEmail1: "",
          guardianMobile2: "",
          guardianRelation2: "",
          guardianName2: "",
          guardianEmail2: "",
          authorizeToReleaseRecord: "",
          fathersName: "",
          mothersName: "",
          othersName: "",
          address1: "",
          phone1: "",
        };
        setInit(initialOne);
      } else {
        const initialStage2 = {
          firstName: fetchedData?.data?.stage1?.firstName || "",
          middleName: fetchedData?.data?.stage1?.middleName || "",
          lastName: fetchedData?.data?.stage1?.lastName || "",
          email: fetchedData?.data?.stage1?.email || "",
          nationality: fetchedData?.data?.stage1?.nationalityId || "",
          mobile: fetchedData?.data?.stage1?.mobile || "",
          telephone: fetchedData?.data?.stage1?.telephone || "",
          dob: fetchedData?.data?.stage1?.dob
            ? new Date(fetchedData?.data?.stage1?.dob)
                .toISOString()
                .split("T")[0]
            : "",
          gender: fetchedData?.data?.stage1?.gender || "",
          titleId: fetchedData?.data?.stage1?.titleId || "",
          address: fetchedData?.data?.stage2?.address || "",
          cityState: fetchedData?.data?.address?.cityState || "",
          country: fetchedData?.data?.address?.country || "",
          pobox: fetchedData?.data?.address?.pobox || "",
          zipCode: fetchedData?.data?.address?.zipCode || "",
          applingAs: fetchedData?.data?.stage2?.applingAs || "",
          programOfInterest: fetchedData?.data?.stage2?.programOfInterest || "",
          currentPlaceOfStudy:
            fetchedData?.data?.stage2?.currentPlaceOfStudy || "",
          guardianMobile1: fetchedData?.data?.stage2?.guardianMobile1 || "",
          guardianRelation1: fetchedData?.data?.stage2?.guardianRelation1 || "",
          guardianName1: fetchedData?.data?.stage2?.guardianName1 || "",
          guardianEmail1: fetchedData?.data?.stage2?.guardianEmail1 || "",
          guardianMobile2: fetchedData?.data?.stage2?.guardianMobile2 || "",
          guardianRelation2: fetchedData?.data?.stage2?.guardianRelation2 || "",
          guardianName2: fetchedData?.data?.stage2?.guardianName2 || "",
          guardianEmail2: fetchedData?.data?.stage2?.guardianEmail2 || "",
          authorizeToReleaseRecord:
            fetchedData?.data?.stage2?.authorizeToReleaseRecord || "",
          fathersName: fetchedData?.data?.stage2?.fathersName || "",
          mothersName: fetchedData?.data?.stage2?.mothersName || "",
          othersName: fetchedData?.data?.stage2?.othersName || "",
          address1: fetchedData?.data?.address?.address1 || "",
          phone1: fetchedData?.data?.address?.phone1 || "",
        };
        setInit(initialStage2);
      }
    }, [fetchedData]);

    const handleAddStageTwo = (values) => {
      addApplicantStagetwo(
        {
          ...values,
          applicantId: applicantId,
        },
        {
          onSuccess: (data) => {
            console.log("A dataa:", data);
            setInit({});
          },
          onError: (error) => {
            console.error("An error occurred:", error);
            setInit({});
          },
        }
      );
    };

    useEffect(() => {
      console.log(init);
    }, [init]);

    const formik = useFormik({
      initialValues: init,
      validationSchema: ValidationSchema,
      enableReinitialize: true,
      onSubmit: (values) => {
        handleAddStageTwo(values);
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
