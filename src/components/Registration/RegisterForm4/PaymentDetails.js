import React, { useState } from "react";
import TabButton from "../../Buttons/TabButton";
import SectionTitle from "../../Texts/SectionTitle"
import CardDetails from "./CardDetails";
const PaymentDetails = () => {
  const [selected, setSelected] = useState("card");

  return (
    <div className="payment-subcontainer">
    <SectionTitle title="PAYMENT DETAILS" noLine={true} />
      <div className='tab-container'>
        <TabButton
          active={"card" === selected ? true : false}
          text='Pay by Card'
          handleOnClick={() => setSelected("card")}
        />
        <div className="stroke">

        </div>
        <TabButton
          active={"other" === selected ? true : false}
          text='Other Payment Method'
          handleOnClick={() => setSelected("other")}
        />
      </div>
      <div>
        {selected === "card" && <CardDetails/>}
        {selected === "other" && "other"}

      </div>
    </div>
  );
};

export default PaymentDetails;
