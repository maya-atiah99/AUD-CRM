import React from "react";
import TextBox from "../../Inputs/TextBox";
import CardTypeTab from "../../Buttons/CardTypeTab";
import AUDButton from "../../Buttons/AUDButton";
import DropDown from "../../Inputs/DropDown";
import { useFormikContext } from "formik";

const CardDetails = ({ isView }) => {
  const formik = useFormikContext();
  const cardType = formik.values.paymentDetails.cardDetails.CardType;

  return (
    <div className='payment-subcontainer'>
      <div>
        <p>
          Card Type <span className='required'>*</span>
        </p>
        <div className='d-flex gap-1'>
          <CardTypeTab
            active={"visa" === cardType}
            icon='/images/visa.png'
            handleOnClick={() =>
              formik.setFieldValue(
                "paymentDetails.cardDetails.CardType",
                "visa"
              )
            }
          />
          <CardTypeTab
            active={"master card" === cardType}
            icon='/images/masterCard.png'
            handleOnClick={() =>
              formik.setFieldValue(
                "paymentDetails.cardDetails.CardType",
                "master card"
              )
            }
          />
        </div>
      </div>
      <TextBox
        label='Card Number'
        required={true}
        name='paymentDetails.cardDetails.EncryptedCardNumber'
        value={formik.values.paymentDetails.cardDetails.EncryptedCardNumber}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.paymentDetails?.cardDetails?.EncryptedCardNumber}
        touched={
          formik.touched?.paymentDetails?.cardDetails?.EncryptedCardNumber
        }
        disabled={isView}
      />
      <div className='d-flex gap-1'>
        <DropDown
          label='Expiration Year'
          required={true}
          isYear={true}
          name='paymentDetails.cardDetails.ExpirationYear'
          value={formik.values.paymentDetails.cardDetails.ExpirationYear}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.paymentDetails?.cardDetails?.ExpirationYear}
          touched={formik.touched?.paymentDetails?.cardDetails?.ExpirationYear}
          disabled={isView}
        />
        <DropDown
          label='Expiration Month'
          required={true}
          isMonth={true}
          name='paymentDetails.cardDetails.ExpirationMonth'
          value={formik.values.paymentDetails.cardDetails.ExpirationMonth}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.paymentDetails?.cardDetails?.ExpirationMonth}
          touched={formik.touched?.paymentDetails?.cardDetails?.ExpirationMonth}
          disabled={isView}
        />
        <TextBox
          label='CVV'
          required={true}
          name='paymentDetails.cardDetails.CVV'
          value={formik.values.paymentDetails.cardDetails.CVV}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.paymentDetails?.cardDetails?.CVV}
          touched={formik.touched?.paymentDetails?.cardDetails?.CVV}
          disabled={isView}
        />
      </div>
      {isView ? (
        <AUDButton
          text='Payment Successfully Processed'
          width='100%'
          type='submit'
          disabled={isView}
        />
      ) : (
        <AUDButton
          text='Pay Now'
          width='100%'
          type='submit'
          handleOnClick={formik.submitForm}
        />
      )}
    </div>
  );
};

export default CardDetails;
