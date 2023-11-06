import React, { useState } from "react";
import TextBox from "../../Inputs/TextBox";
import CardTypeTab from "../../Buttons/CardTypeTab";
import AUDButton from "../../Buttons/AUDButton";
import DropDown from "../../Inputs/DropDown";
import { useFormikContext } from "formik";

const CardDetails = () => {
  const formik = useFormikContext();
  const cardType = formik.values.paymentDetails.cardDetails.cardType;

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
                "paymentDetails.cardDetails.cardType",
                "visa"
              )
            }
          />
          <CardTypeTab
            active={"master card" === cardType}
            icon='/images/masterCard.png'
            handleOnClick={() =>
              formik.setFieldValue(
                "paymentDetails.cardDetails.cardType",
                "master card"
              )
            }
          />
        </div>
      </div>
      <TextBox
        label='Card Number'
        required={true}
        name='paymentDetails.cardDetails.cardNumber'
        value={formik.values.paymentDetails.cardDetails.cardNumber}
        onChange={(name, value) => {
          formik.setFieldValue(name, value);
        }}
        errors={formik.errors?.paymentDetails?.cardDetails?.cardNumber}
        touched={formik.touched?.paymentDetails?.cardDetails?.cardNumber}
      />
      <div className='d-flex gap-1'>
        <DropDown
          label='Expiration Year'
          required={true}
          isYear={true}
          name='paymentDetails.cardDetails.expirationYear'
          value={formik.values.paymentDetails.cardDetails.expirationYear}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.paymentDetails?.cardDetails?.expirationYear}
          touched={formik.touched?.paymentDetails?.cardDetails?.expirationYear}
        />
        <DropDown
          label='Expiration Month'
          required={true}
          isMonth={true}
          name='paymentDetails.cardDetails.expirationMonth'
          value={formik.values.paymentDetails.cardDetails.expirationMonth}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.paymentDetails?.cardDetails?.expirationMonth}
          touched={formik.touched?.paymentDetails?.cardDetails?.expirationMonth}
        />
        <TextBox
          label='CVV'
          required={true}
          name='paymentDetails.cardDetails.cvv'
          value={formik.values.paymentDetails.cardDetails.cvv}
          onChange={(name, value) => {
            formik.setFieldValue(name, value);
          }}
          errors={formik.errors?.paymentDetails?.cardDetails?.cvv}
          touched={formik.touched?.paymentDetails?.cardDetails?.cvv}
        />
      </div>
      <AUDButton
        text='Pay Now'
        width='100%'
        type='submit'
        handleOnClick={formik.submitForm}
      />
    </div>
  );
};

export default CardDetails;
