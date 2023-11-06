import * as Yup from "yup";

const step4ValidationSchema = Yup.object().shape({
  paymentDetails: Yup.object().shape({
    paymentMethod: Yup.string().required("Payment Method is required"),
    cardDetails: Yup.object().shape({
      cardType: Yup.string().required("Card Type is required"),
      cardNumber: Yup.string().required("Card Number is required"),
      expirationYear: Yup.string().required("Expiration Year is required"),
      expirationMonth: Yup.string().required("Expiration Month is required"),
      cvv: Yup.string().required("CVV is required"),
    }),
  }),
});
export default step4ValidationSchema;
