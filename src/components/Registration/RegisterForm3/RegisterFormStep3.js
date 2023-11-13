import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import ProgramInformation from "../RegisterForm3/ProgramInformation";
import ImportantNotices from "./ImportantNotices";
import Reservation from "./Reservation";
import ModalComponent from "../../ModalComponent";
import Agreement from "../../Agreements/Agreement";
import { FormikProvider, useFormik } from "formik";
import Step3ValidationSchema from "../../../ValidationSchemas/Step3ValidationSchema";
import { useAddApplicantStageFour } from "../../../Hooks/Appplicant";
const RegisterFormStep3 = forwardRef(({ applicantId, fetchedData }, ref) => {
  const [showModal, setShowModal] = useState(false);
  const { mutate: addApplicantStageFour } = useAddApplicantStageFour();
  const [init, setInit] = useState({
    ProgramInformationCheck:
      fetchedData?.data?.stage2?.programInformationCheck || false,
    ImportantNotesCheck:
      fetchedData?.data?.stage2?.importantNotesCheck || false,
    TermAndConditionCheck:
      fetchedData?.data?.stage2?.termAndConditionCheck || false,
    UndergroundCatalogCheck:
      fetchedData?.data?.stage2?.undergroundCatalogCheck || false,
  });
  useEffect(() => {
    const initialvalues = {
      ProgramInformationCheck:
        fetchedData?.data?.stage2?.programInformationCheck || false,
      ImportantNotesCheck:
        fetchedData?.data?.stage2?.importantNotesCheck || false,
      TermAndConditionCheck:
        fetchedData?.data?.stage2?.termAndConditionCheck || false,
      UndergroundCatalogCheck:
        fetchedData?.data?.stage2?.undergroundCatalogCheck || false,
    };
    setInit(initialvalues);
  }, [fetchedData]);
  const handleAddStageFour = (values) => {
    addApplicantStageFour(values, {
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
    validationSchema: Step3ValidationSchema,
    onSubmit: (values) => {
      console.log("hiiii", values);
      const formData = new FormData();
      formData.append("ApplicantId", applicantId);
      formData.append(
        "ProgramInformationCheck",
        values.ProgramInformationCheck
      );
      formData.append("ImportantNotesCheck", values.ImportantNotesCheck);
      formData.append("TermAndConditionCheck", values.TermAndConditionCheck);
      formData.append(
        "UndergroundCatalogCheck",
        values.UndergroundCatalogCheck
      );
      formData.append("ApplicantId", applicantId);
      handleAddStageFour(formData);
    },
  });

  useEffect(() => {
    if (showModal) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [showModal]);

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      formik.submitForm();
    },
  }));
  useEffect(() => {
    ref.current = formik;
  }, [ref, formik]);

  return (
    <>
      <div className='form-subcontainer'>
        <FormikProvider
          value={formik}
          innerRef={ref}
          validationSchema={Step3ValidationSchema}
        >
          <ProgramInformation />
          <ImportantNotices />
          <Reservation handleClick={() => setShowModal(true)} />
        </FormikProvider>
      </div>
      {showModal && (
        <ModalComponent
          onClose={() => setShowModal(false)}
          width='90%'
          height='100%'
          classFont='modal-title-3font'
          title='American University In Dubai Reservation And Enrollment Agreement & Terms'
        >
          <Agreement />
        </ModalComponent>
      )}
    </>
  );
});

export default RegisterFormStep3;
