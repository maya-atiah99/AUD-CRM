import React, { useState } from "react";
import TabButton from "../../Buttons/TabButton";
import SectionTitle from "../../Texts/SectionTitle";
import CardDetails from "./CardDetails";
import { useFormikContext } from "formik";
const PaymentDetails = ({isView}) => {
  const [selected, setSelected] = useState("card");
  const formik = useFormikContext();
  return (
    <div className='payment-subcontainer'>
      <SectionTitle title='PAYMENT DETAILS' noLine={true} />
      <div className='tab-container'>
        <TabButton
          active={"card" === selected ? true : false}
          text='Pay by Card'
          handleOnClick={() => (
            setSelected("card"),
            formik.setFieldValue("paymentDetails.paymentMethod", "card")
          )}
        />
        <div className='stroke'></div>
        <TabButton
          active={"other" === selected ? true : false}
          text='Other Payment Method'
          handleOnClick={() => (
            setSelected("other"),
            formik.setFieldValue("paymentDetails.paymentMethod", "other")
          )}
        />
      </div>
      <div>
        {selected === "card" && <CardDetails formik={formik} isView={isView} />}
        {selected === "other" && "other"}
      </div>
    </div>
  );
};

export default PaymentDetails;
