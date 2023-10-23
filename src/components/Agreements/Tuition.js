import React from "react";
import SectionTitle from "../Texts/SectionTitle";
import TextComponent from "../Texts/TextComponent";
import AgreementTable from "./AgreementTable";
import HorizantalLine from "../Texts/HorizantalLine";

const Tuition = () => {
  return (
    <div className="tuition-container">
      <SectionTitle title='(1) TUITION' />
      <TextComponent
        font='600'
        text='All refund requests will be processed within 30 days. Refunds are governed by the following regulations:'
      />
      <div className='agreement-table-cont'>
        <AgreementTable />
        <div>
          <HorizantalLine />
          <TextComponent
            size='18px'
            font='600'
            text='For students in the first semester of attendance 100% refund with the exception of the reservation and enrollment deposit of AED5,000 (for undergraduate) which is nonrefundable. See the AUD Academic Calendar for dates of Drop/Add.'
          />
          <TextComponent
            size='18px'
            font='600'
            text='Monday-Friday - The refund amount will be a credit to the student’s account and carried forward to the following semester. Non-returning students will receive a refund within 30 days of submitting a request form.'
          />
        </div>
      </div>
    </div>
  );
};

export default Tuition;
