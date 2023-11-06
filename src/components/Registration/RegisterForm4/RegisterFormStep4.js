import React from "react";
import PaymentDetails from "./PaymentDetails";
import Invoice from "./Invoice";
import { FormikProvider, useFormik } from "formik";
import step4ValidationSchema from "../../../ValidationSchemas/Step4ValidationSchema";

const RegisterFormStep4 = () => {
  const formik = useFormik({
    initialValues: {
      paymentDetails: {
        paymentMethod: "card",
        cardDetails: {
          cardType: "visa",
          cardNumber: "",
          expirationYear: "",
          expirationMonth: "",
          cvv: "",
        },
      },
    },
    validationSchema: step4ValidationSchema,
    onSubmit: (values) => {
      console.log("Form Values", values);
    },
  });

  console.log(formik.values);

  return (
    <div className='payment-container'>
      <FormikProvider value={formik} validationSchema={step4ValidationSchema}>
        <PaymentDetails />
        <div className='payment-verticalline'>
          <div className='verticalPayment-container'>
            <div className='verticalLine'></div>
          </div>
        </div>
        <Invoice />
      </FormikProvider>
    </div>
  );
};

export default RegisterFormStep4;
