import React from "react";
import SectionTitle from "../Texts/SectionTitle";
import TextComponent from "../Texts/TextComponent";
import AgreementTable from "./AgreementTable";
import HorizantalLine from "../Texts/HorizantalLine";

const Tuition = () => {
  return (
    <div className='tuition-container'>
      <SectionTitle title='(1) TUITION' />
      <TextComponent
        font='600'
        text='All refund requests will be processed within 30 days. Refunds are governed by the following regulations:'
      />
      <div className='agreement-table-cont'>
        <AgreementTable />
        <div className='ag-details'>
          <HorizantalLine />
          <div className='d-flex flex-row'>
            <span className='required'>*</span>
            <TextComponent
              font='600'
              classfont='classfont-agreement'
              text='For students in the first semester of attendance 100% refund with the exception of the reservation and enrollment deposit of AED5,000 (for undergraduate) which is nonrefundable. See the AUD Academic Calendar for dates of Drop/Add.'
            />
          </div>
          <div className='d-flex flex-row'>
            <span className='required'>*</span>
            <span className='required'>*</span>
            <TextComponent
              classfont='classfont-agreement'
              font='600'
              text='Monday-Friday - The refund amount will be a credit to the student’s account and carried forward to the following semester. Non-returning students will receive a refund within 30 days of submitting a request form.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tuition;
