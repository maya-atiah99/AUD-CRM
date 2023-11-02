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
const RegisterFormStep3 = forwardRef((_, ref) => {
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      programInformation: {
        countryUniversity: "",
      },
      impoortantNotices: {
        acceptance: "",
      },
      academicInformation: {
        acknowledgeTerms: "",
        undergraduateProgram: "",
      },
    },
    validationSchema: Step3ValidationSchema,
    onSubmit: (values) => {
      console.log("hiiii", values);
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
          height='50rem'
         title='American University In Dubai Reservation And Enrollment Agreement & Terms'
        >
          <Agreement />
        </ModalComponent>
      )}
    </>
  );
});

export default RegisterFormStep3;
