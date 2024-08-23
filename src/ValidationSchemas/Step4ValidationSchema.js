import * as Yup from "yup";

const step4ValidationSchema = Yup.object().shape({
  paymentDetails: Yup.object().shape({
    paymentMethod: Yup.string().required("Payment Method is required"),
    cardDetails: Yup.object().shape({
      CardType: Yup.string().required("Card Type is required"),
      EncryptedCardNumber: Yup.mixed().required("Card Number is required"),
      ExpirationYear: Yup.number().required("Expiration Year is required"),
      ExpirationMonth: Yup.number().required("Expiration Month is required"),
      CVV: Yup.number()
        .required("CVV is required")
       
    }),
  }),
});
export default step4ValidationSchema;
