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
import getStep3ValidationSchema from "../../../ValidationSchemas/Step3ValidationSchema";
const RegisterFormStep3 = forwardRef(
  (
    {
      applicantId,
      applicationId,
      applingAs,
      applicationStart,
      activeStep,
      isView,
      reApply,
    },
    ref
  ) => {
    const { data: applicantStageFour, refetch: refetchStageFour } =
      useFetchApplicantStageFour(applicantId, applicationId);
    const [showModal, setShowModal] = useState(false);
    const { mutate: addApplicantStageFour } = useAddApplicantStageFour();
    const [init, setInit] = useState({});

    useEffect(() => {
      const initialvalues = {
        isSaved: null,
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
        AcceptResponsibilitiesCheck:
          applicantStageFour?.data?.stage2?.acceptResponsibilitiesCheck ||
          false,
        RecordsCheck: applicantStageFour?.data?.stage2?.recordsCheck || false,
        courseworkAwareness:false
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

    // useEffect(() => {
    //   console.log("init", init);
    // }, [init]);

    const formik = useFormik({
      initialValues: init,
      validationSchema: getStep3ValidationSchema(reApply),
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
          "AcceptResponsibilitiesCheck",
          values.AcceptResponsibilitiesCheck
        );
        formData.append("RecordsCheck", values.RecordsCheck);

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
        handleAddStageFour(formData);
      },
    });
    console.log("formik step 3 isSaved", formik?.values?.isSaved);
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
    console.log("formik", formik);
    return (
      <>
        <div className='form-subcontainer'>
          <FormikProvider
            value={formik}
            innerRef={ref}
            validationSchema={getStep3ValidationSchema(reApply)}
          >
            <ProgramInformation isView={isView} />
            <Declaration
              applingAs={applingAs}
              applicationStart={applicationStart}
              isView={isView}
              reApply={reApply}
            />
            {!reApply && (
              <>
                <ImportantNotices isView={isView} />
                <Reservation
                  handleClick={() => setShowModal(true)}
                  isView={isView}
                />{" "}
              </>
            )}
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
