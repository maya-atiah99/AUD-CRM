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
import {
  useAddApplicantStageFour,
  useFetchApplicantStageFour,
} from "../../../Hooks/Appplicant";
import Declaration from "./Declaration";
const RegisterFormStep3 = forwardRef(
  (
    { applicantId, applicationId, applingAs, applicationStart, activeStep },
    ref
  ) => {
    const { data: applicantStageFour, refetch: refetchStageFour } =
      useFetchApplicantStageFour(applicantId, applicationId);
    const [showModal, setShowModal] = useState(false);
    const { mutate: addApplicantStageFour } = useAddApplicantStageFour();
    const [init, setInit] = useState({});

    useEffect(() => {
      const initialvalues = {
        isSaved: true,
        NextActiveStep: "",
        ProgramInformationCheck:
          applicantStageFour?.data?.stage2?.programInformationCheck || false,
        ImportantNotesCheck:
          applicantStageFour?.data?.stage2?.importantNotesCheck || false,
        TermAndConditionCheck:
          applicantStageFour?.data?.stage2?.termAndConditionCheck || false,
        UndergroundCatalogCheck:
          applicantStageFour?.data?.stage2?.undergroundCatalogCheck || false,
        HealthComments: applicantStageFour?.data?.stage2?.healthComments || "",
        HealthChalenges:
          applicantStageFour?.data?.stage2?.healthChalenges || false,
        AcceptResponsibilitiesCheck: false,
        RecordsCheck: false,
      };
      setInit(initialvalues);
    }, [applicantStageFour]);

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
      console.log("init", init);
    }, [init]);

    const formik = useFormik({
      initialValues: init,
      validationSchema: Step3ValidationSchema,
      enableReinitialize: true,
      onSubmit: (values) => {
        const formData = new FormData();
        formData.append("ApplicantId", applicantId);
        formData.append("ApplicationId", applicationId);
        formData.append("IsSaved", formik.values.isSaved);
        formData.append("NextActiveStep", formik.values.NextActiveStep);
        formData.append("HealthChalenges", values.HealthChalenges);
        formData.append("HealthComments", values.HealthComments);
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
        for (const key in values) {
          if (values[key] !== undefined || values[key] !== "") {
            formData.append(key, values[key]);
          }
        }
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

    // useEffect(() => {
    //   refetchStageFour();
    // }, []);
    console.log(applicantStageFour);
    return (
      <>
        <div className='form-subcontainer'>
          <FormikProvider
            value={formik}
            innerRef={ref}
            validationSchema={Step3ValidationSchema}
          >
            <ProgramInformation />
            <Declaration
              applingAs={applingAs}
              applicationStart={applicationStart}
            />
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
  }
);

export default RegisterFormStep3;
