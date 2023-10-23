import React from "react";
import PaymentDetails from "./PaymentDetails";
import Invoice from "./Invoice";
const RegisterFormStep4 = () => {
  return (
    <div className='payment-container'>
      <PaymentDetails />
      <div>
        <div className='verticalPayment-container '>
          <div className='verticalLine'></div>
        </div>
      </div>
      <Invoice />
    </div>
  );
};

export default RegisterFormStep4;
