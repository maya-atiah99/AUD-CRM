import React, { useState } from "react";
import PaymentDetails from "./PaymentDetails";
import Invoice from "./Invoice";
import { FormikProvider, useFormik } from "formik";
import step4ValidationSchema from "../../../ValidationSchemas/Step4ValidationSchema";
import { usePayment } from "../../../Hooks/Appplicant";
import VerifiedCheckModal from "../../ShowInterest/VerifiedCheckModal";
import { useNavigate } from "react-router-dom";

const RegisterFormStep4 = ({ applicantId, applicationId, isView }) => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { mutate: payment } = usePayment();

  const formik = useFormik({
    initialValues: {
      paymentDetails: {
        paymentMethod: "card",
        cardDetails: {
          CardType: "visa",
          EncryptedCardNumber: "",
          ExpirationYear: "",
          ExpirationMonth: "",
          CVV: "",
        },
      },
    },
    validationSchema: step4ValidationSchema,
    onSubmit: (values) => {
      console.log("Form Values", values);
      const formData = new FormData();
      formData.append("ApplicantId", applicantId);
      formData.append("ApplicationId", applicationId);
      formData.append(
        "EncryptedCardNumber",
        values.paymentDetails.cardDetails.EncryptedCardNumber.replace(
          /[\s-]/g,
          ""
        )
      );
      formData.append("CardType", values.paymentDetails.cardDetails.CardType);
      formData.append(
        "ExpirationYear",
        values.paymentDetails.cardDetails.ExpirationYear
      );
      formData.append(
        "ExpirationMonth",
        values.paymentDetails.cardDetails.ExpirationMonth
      );
      formData.append("CVV", values.paymentDetails.cardDetails.CVV);
      formData.append("Amount", 500);
      payment(formData, {
        onSuccess: () => {
          setIsSubmitted(true);

          setTimeout(() => {
            setIsSubmitted(false);
            navigate("/");
            localStorage.clear();
          }, 3500);
        },
        onErrorr: () => {},
      });
    },
  });
  console.log("formik", formik);
  return (
    <>
      <div className='payment-container'>
        <FormikProvider value={formik} validationSchema={step4ValidationSchema}>
          <PaymentDetails isView={isView} />
          <div className='payment-verticalline'>
            <div className='verticalPayment-container'>
              <div className='verticalLine'></div>
            </div>
          </div>
          <Invoice isView={isView} />
        </FormikProvider>
      </div>
      {isSubmitted && (
        <VerifiedCheckModal
          text='You will receive an email from us very soon'
          title='Paid Successfully'
          close={() => setIsSubmitted(false)}
        />
      )}
    </>
  );
};

export default RegisterFormStep4;
