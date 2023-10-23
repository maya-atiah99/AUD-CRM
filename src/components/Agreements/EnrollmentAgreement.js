import React from "react";
import BulletedText from "../Texts/BulletedText";

const EnrollmentAgreement = () => {
  const rules = [
    {
      text: "I agree to accept the rules, regulations and fees of the American University in Dubai as stated in the current Catalog (which may be modified from time to time) and on the website, and agree to the terms and conditions as stated in the Undergraduate Application for Admission, which I acknowledge receiving.",
    },
    {
      text: "I understand that students are required to register and successfully",
      items: [
        {
          text: "complete all developmental courses (ENGL 100, MATH 090, MATH 095, MATH 103, MATH 104, UNIV 100)",
        },
        {
          text: "within three registered terms including that of initial registration and no more than two academic years.",
        },
        {
          text: "Students who fail to successfully complete all their developmental courses within three terms, will be limited to only those developmental courses the next term in which they are enrolled,",
        },
        {
          text: " May not register for any new courses for-credit; the maximum number of attempts for any of these developmental courses is three.",
        },
        {
          text: "Failure to successfully complete these courses within the above stated time frames and regulations will result in dismissal from the University.",
        },
      ],
    },
    {
      text: "Failure to successfully complete these courses within the above stated time frames and regulations will result in dismissal from the University.",
    },
    {
      text: "I understand that fees, as listed in the Schedule of Tuition, Fees and Expenses, are payable in advance. I further understand that all fees must be current before students can begin or continue attendance or receive any University services. All financial obligations to the University must be discharged before grades, transcripts, etc., can be issued or a degree conferred.",
    },
    { text: "I understand the refund policy is as follows:" },
  ];
  return (
    <div>
      <BulletedText items={rules} />
    </div>
  );
};

export default EnrollmentAgreement;
