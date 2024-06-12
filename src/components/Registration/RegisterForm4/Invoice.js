import React from "react";
import SectionTitle from "../../Texts/SectionTitle";

const Invoice = () => {
  return (
    <div className='invoice-container'>
      <div className='invoice-title'>
        <SectionTitle title='PAYMENT & INVOICE' noLine={true} />
      </div>
      <div className='invoice-card-container'>
        <div className='app-details-cont'>
          <div className='app-details'>
            <div>Application Fee</div>
            <div>420.00 AED</div>
          </div>
          <div className='app-details'>
            <div>VAT</div>
            <div>100.00 AED</div>
          </div>
        </div>
        <div className='app-fee-cont'>
          <label>Application Fee</label>
          <div style={{ color: "#1b224c" }}>420.00 AED</div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
