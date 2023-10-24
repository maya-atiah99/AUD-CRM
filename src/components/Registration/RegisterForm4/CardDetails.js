import React, { useState } from "react";
import TextBox from "../../Inputs/TextBox";
import DateTime from "../../Inputs/DateTime";
import CardTypeTab from "../../Buttons/CardTypeTab";
import AUDButton from "../../Buttons/AUDButton";
import DropDown from "../../Inputs/DropDown";
const CardDetails = () => {
  const [cardType, setCardType] = useState("visa");

  return (
    <div className='payment-subcontainer'>
      <div>
        <p>
          Card Type <span className='required'>*</span>
        </p>
        <div className='d-flex gap-1'>
          <CardTypeTab
            active={"visa" === cardType ? true : false}
            icon='/images/visa.png'
            handleOnClick={() => setCardType("visa")}
          />
          <CardTypeTab
            active={"master card" === cardType ? true : false}
            icon='/images/masterCard.png'
            handleOnClick={() => setCardType("master card")}
          />
        </div>
      </div>
      <TextBox label='Card Number' required={true} />
      <div className='d-flex gap-1'>
        <DropDown label='Expiration Year' required={true} />
        <DropDown label='Expiration Month' required={true} />
        <TextBox label='CVV' required={true} />
      </div>
      <AUDButton text='Pay Now' width='100%' />
    </div>
  );
};

export default CardDetails;
